import { useEffect, useRef, useState, useCallback } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BaseModal = ({ isOpen, onClose, title, children }: BaseModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-lg shadow-[0_0_40px_hsl(348_100%_50%/0.1)] animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="font-pixel text-primary text-[10px] leading-relaxed tracking-wider">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// PanelModal
// ---------------------------------------------------------------------------

interface PanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialName?: string;
  onSave: (name: string) => void;
  mode: "create" | "edit";
}

export const PanelModal = ({
  isOpen,
  onClose,
  initialName = "",
  onSave,
  mode,
}: PanelModalProps) => {
  const [name, setName] = useState(initialName);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialNameRef = useRef(initialName);
  const isOpenRef = useRef(isOpen);

  // Only reset state when modal opens (transition from closed to open)
  useEffect(() => {
    if (isOpen && !isOpenRef.current) {
      setName(initialName);
    }
    isOpenRef.current = isOpen;
  }, [isOpen, initialName]);

  // Track initialName changes separately
  useEffect(() => {
    if (isOpen && initialName !== initialNameRef.current) {
      setName(initialName);
      initialNameRef.current = initialName;
    }
  }, [initialName, isOpen]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    const trimmedName = name.trim();
    if (!trimmedName) return;
    
    setIsSubmitting(true);
    
    try {
      onSave(trimmedName);
      onClose();
    } finally {
      // Reset submitting state after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 300);
    }
  }, [name, onSave, onClose, isSubmitting]);

  // Reset submitting state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false);
    }
  }, [isOpen]);

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "create" ? "New Panel" : "Edit Panel"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
            Panel Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Panel A — Room 101"
            className="neon-input w-full px-4 py-2.5 rounded-lg text-sm"
            autoFocus
            disabled={isSubmitting}
          />
        </div>
        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="flex-1 px-4 py-2.5 bg-secondary text-secondary-foreground font-mono text-sm rounded-lg hover:bg-secondary/80 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!name.trim() || isSubmitting}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_15px_hsl(348_100%_50%/0.3)] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          >
            {isSubmitting ? "Saving..." : (mode === "create" ? "Create →" : "Save →")}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};