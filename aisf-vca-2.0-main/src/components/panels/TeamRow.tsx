import { useState, useCallback, useRef } from "react";

export type TeamStatus = "completed" | "ongoing" | "remaining";

export interface Team {
  id: string;
  name: string;
  status: TeamStatus;
}

interface TeamRowProps {
  team: Team;
  isAdmin: boolean;
  onStatusChange: (id: string, status: TeamStatus) => void;
  onEdit: (team: Team) => void;
  onDelete: (id: string) => void;
}

const STATUS_CYCLE: TeamStatus[] = ["remaining", "ongoing", "completed"];

const statusConfig: Record<
  TeamStatus,
  { dot: string; badge: string; label: string }
> = {
  completed: {
    dot: "bg-green-500",
    badge: "bg-green-500/15 text-green-400 border-green-500/30",
    label: "Done",
  },
  ongoing: {
    dot: "bg-yellow-400 animate-pulse",
    badge: "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
    label: "Live",
  },
  remaining: {
    dot: "bg-muted-foreground/60",
    badge: "bg-muted/50 text-muted-foreground border-border",
    label: "Queued",
  },
};

const TeamRow = ({
  team,
  isAdmin,
  onStatusChange,
  onEdit,
  onDelete,
}: TeamRowProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const lastUpdateTimeRef = useRef<number>(0);
  const updateTimeoutRef = useRef<NodeJS.Timeout>();

  const cfg = statusConfig[team.status];

  const cycleStatus = useCallback(() => {
    // Prevent rapid successive updates
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdateTimeRef.current;
    
    // Debounce: only allow updates every 300ms
    if (timeSinceLastUpdate < 300) {
      return;
    }
    
    // Prevent multiple updates while one is in progress
    if (isUpdating) {
      return;
    }
    
    // Clear any pending timeout
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    
    setIsUpdating(true);
    lastUpdateTimeRef.current = now;
    
    const current = STATUS_CYCLE.indexOf(team.status);
    const next = STATUS_CYCLE[(current + 1) % STATUS_CYCLE.length];
    
    // Call the status change handler
    onStatusChange(team.id, next);
    
    // Reset updating state after a delay
    updateTimeoutRef.current = setTimeout(() => {
      setIsUpdating(false);
    }, 200);
  }, [team.id, team.status, onStatusChange, isUpdating]);

  const handleEdit = useCallback(() => {
    if (isUpdating) return;
    onEdit(team);
  }, [team, onEdit, isUpdating]);

  const handleDelete = useCallback(() => {
    if (isUpdating) return;
    onDelete(team.id);
  }, [team.id, onDelete, isUpdating]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300
        ${team.status === "completed" ? "bg-green-500/5 border-green-500/20" : "bg-secondary/40 border-border hover:border-border/80"}
        hover:bg-secondary/70 ${isUpdating ? "opacity-70" : ""}`}
    >
      {/* Status dot */}
      <span
        className={`w-2 h-2 rounded-full shrink-0 transition-all duration-500 ${cfg.dot} ${
          isUpdating ? "opacity-50" : ""
        }`}
      />

      {/* Team name */}
      <span
        className={`flex-1 font-mono text-lg truncate transition-all duration-300 ${
          team.status === "completed"
            ? "line-through text-muted-foreground"
            : "text-foreground"
        } ${isUpdating ? "opacity-70" : ""}`}
      >
        {team.name}
      </span>

      {/* Checkmark for completed */}
      {team.status === "completed" && (
        <svg
          className="w-3.5 h-3.5 text-green-500 shrink-0 animate-[check-scale_0.3s_ease-out_forwards]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}

      {/* Status badge */}
      <span
        className={`sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold border uppercase tracking-wider ${cfg.badge} ${
          isUpdating ? "opacity-70" : ""
        }`}
      >
        {cfg.label}
      </span>

      {/* Admin controls */}
      {isAdmin && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Cycle status */}
          <button
            onClick={cycleStatus}
            disabled={isUpdating}
            title="Toggle status"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-primary/10 hover:text-primary transition-all duration-200 text-muted-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          {/* Edit */}
          <button
            onClick={handleEdit}
            disabled={isUpdating}
            title="Edit team"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-primary/10 hover:text-primary transition-all duration-200 text-muted-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          {/* Delete */}
          <button
            onClick={handleDelete}
            disabled={isUpdating}
            title="Delete team"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive transition-all duration-200 text-muted-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// Add missing useEffect import
import { useEffect } from "react";

export default TeamRow;