import { useState, useEffect, useCallback, useRef } from "react";
import { BaseModal } from "./PanelModal";
import type { Team, TeamStatus } from "./TeamRow";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTeam?: Partial<Team>;
  onSave: (name: string, status: TeamStatus) => void;
  mode: "create" | "edit";
}

const TeamModal = ({
  isOpen,
  onClose,
  initialTeam,
  onSave,
  mode,
}: TeamModalProps) => {
  const [name, setName] = useState(initialTeam?.name ?? "");
  const [status, setStatus] = useState<TeamStatus>(initialTeam?.status ?? "remaining");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialTeamRef = useRef(initialTeam);
  const isOpenRef = useRef(isOpen);

  // Only reset state when modal opens with new team data
  useEffect(() => {
    // Only reset when modal opens (transition from closed to open)
    if (isOpen && !isOpenRef.current) {
      setName(initialTeam?.name ?? "");
      setStatus(initialTeam?.status ?? "remaining");
    }
    isOpenRef.current = isOpen;
  }, [isOpen, initialTeam?.name, initialTeam?.status]);

  // Track initialTeam changes separately
  useEffect(() => {
    if (isOpen && initialTeam !== initialTeamRef.current) {
      setName(initialTeam?.name ?? "");
      setStatus(initialTeam?.status ?? "remaining");
      initialTeamRef.current = initialTeam;
    }
  }, [initialTeam, isOpen]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    const trimmedName = name.trim();
    if (!trimmedName) return;
    
    setIsSubmitting(true);
    
    try {
      onSave(trimmedName, status);
      onClose();
    } finally {
      // Reset submitting state after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 300);
    }
  }, [name, status, onSave, onClose, isSubmitting]);

  const statuses: { value: TeamStatus; label: string; color: string }[] = [
    { value: "remaining", label: "Queued / Remaining", color: "text-muted-foreground" },
    { value: "ongoing", label: "Ongoing / Live", color: "text-yellow-400" },
    { value: "completed", label: "Completed", color: "text-green-400" },
  ];

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
      title={mode === "create" ? "Add Team" : "Edit Team"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
            Team Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Team Prometheus"
            className="neon-input w-full px-4 py-2.5 rounded-lg text-sm"
            autoFocus
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
            Status
          </label>
          <div className="grid grid-cols-3 gap-2">
            {statuses.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => !isSubmitting && setStatus(s.value)}
                disabled={isSubmitting}
                className={`px-2 py-2.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                  status === s.value
                    ? `border-primary bg-primary/10 text-primary`
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-border/80 hover:text-foreground"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span
                  className={`block font-semibold mb-0.5 ${
                    status === s.value ? "text-primary" : s.color
                  }`}
                >
                  {s.value === "remaining" ? "⬜" : s.value === "ongoing" ? "🟡" : "🟢"}
                </span>
                {s.label.split(" / ")[0]}
              </button>
            ))}
          </div>
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
            {isSubmitting ? "Saving..." : (mode === "create" ? "Add →" : "Save →")}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};

export default TeamModal;