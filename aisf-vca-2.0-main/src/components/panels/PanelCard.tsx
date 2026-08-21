import { useState, useCallback, useMemo } from "react";
import TeamRow, { type Team, type TeamStatus } from "./TeamRow";
import TeamModal from "./TeamModal";

export interface Panel {
  id: string;
  name: string;
  teams: Team[];
}

interface PanelCardProps {
  panel: Panel;
  isAdmin: boolean;
  onUpdatePanel: (panelId: string, name: string) => void;
  onDeletePanel: (panelId: string) => void;
  onAddTeam: (panelId: string, name: string, status: TeamStatus) => void;
  onUpdateTeam: (panelId: string, teamId: string, name: string, status: TeamStatus) => void;
  onDeleteTeam: (panelId: string, teamId: string) => void;
  onTeamStatusChange: (panelId: string, teamId: string, status: TeamStatus) => void;
  animationDelay?: number;
}

// Derive dynamic background class based on completion ratio
const getPanelBg = (completed: number, total: number): string => {
  if (total === 0) return "bg-muted/30 border-border";
  const pct = completed / total;
  if (pct >= 1) return "bg-green-500/10 border-green-500/50";
  if (pct >= 0.5) return "bg-yellow-400/10 border-yellow-400/50";
  if (pct > 0) return "bg-blue-500/10 border-blue-500/30";
  return "bg-muted/30 border-border";
};

const getPanelGlow = (completed: number, total: number): string => {
  if (total === 0) return "";
  const pct = completed / total;
  if (pct >= 1) return "shadow-[0_0_25px_hsl(142_70%_45%/0.15)]";
  if (pct >= 0.5) return "shadow-[0_0_25px_hsl(43_96%_56%/0.12)]";
  if (pct > 0) return "shadow-[0_0_20px_hsl(217_91%_60%/0.1)]";
  return "";
};

const getProgressColor = (completed: number, total: number): string => {
  if (total === 0) return "bg-muted-foreground/30";
  const pct = completed / total;
  if (pct >= 1) return "bg-green-500";
  if (pct >= 0.5) return "bg-yellow-400";
  if (pct > 0) return "bg-blue-400";
  return "bg-muted-foreground/30";
};

const PanelCard = ({
  panel,
  isAdmin,
  onUpdatePanel,
  onDeletePanel,
  onAddTeam,
  onUpdateTeam,
  onDeleteTeam,
  onTeamStatusChange,
  animationDelay = 0,
}: PanelCardProps) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState(panel.name);
  const [collapsed, setCollapsed] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | undefined>(undefined);
  const [teamModalMode, setTeamModalMode] = useState<"create" | "edit">("create");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize derived values to prevent unnecessary re-renders
  const total = useMemo(() => panel.teams.length, [panel.teams.length]);
  const completed = useMemo(() => panel.teams.filter((t) => t.status === "completed").length, [panel.teams]);
  const ongoing = useMemo(() => panel.teams.filter((t) => t.status === "ongoing").length, [panel.teams]);
  const remaining = useMemo(() => panel.teams.filter((t) => t.status === "remaining").length, [panel.teams]);
  const pct = useMemo(() => total > 0 ? Math.round((completed / total) * 100) : 0, [completed, total]);

  const bgClass = useMemo(() => getPanelBg(completed, total), [completed, total]);
  const glowClass = useMemo(() => getPanelGlow(completed, total), [completed, total]);
  const progressColor = useMemo(() => getProgressColor(completed, total), [completed, total]);

  // Memoize handlers
  const handleSaveTitle = useCallback(() => {
    if (editName.trim() && editName.trim() !== panel.name) {
      onUpdatePanel(panel.id, editName.trim());
    }
    setIsEditingName(false);
  }, [editName, panel.id, panel.name, onUpdatePanel]);

  const openAddTeam = useCallback(() => {
    setEditingTeam(undefined);
    setTeamModalMode("create");
    setTeamModalOpen(true);
  }, []);

  const openEditTeam = useCallback((team: Team) => {
    setEditingTeam(team);
    setTeamModalMode("edit");
    setTeamModalOpen(true);
  }, []);

  const handleTeamSave = useCallback((name: string, status: TeamStatus) => {
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      if (teamModalMode === "create") {
        onAddTeam(panel.id, name, status);
      } else if (editingTeam) {
        onUpdateTeam(panel.id, editingTeam.id, name, status);
      }
      setTeamModalOpen(false);
    } finally {
      // Reset submitting state after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 300);
    }
  }, [teamModalMode, editingTeam, panel.id, onAddTeam, onUpdateTeam, isSubmitting]);

  const handleTeamStatusChange = useCallback((teamId: string, status: TeamStatus) => {
    onTeamStatusChange(panel.id, teamId, status);
  }, [panel.id, onTeamStatusChange]);

  const handleDeleteTeam = useCallback((teamId: string) => {
    onDeleteTeam(panel.id, teamId);
  }, [panel.id, onDeleteTeam]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveTitle();
    } else if (e.key === "Escape") {
      setEditName(panel.name);
      setIsEditingName(false);
    }
  }, [handleSaveTitle, panel.name]);

  return (
    <>
      <div
        className={`flex flex-col rounded-lg border transition-all duration-500 ease-in-out
          ${bgClass} ${glowClass}
          hover:-translate-y-1 hover:shadow-xl
          animate-fade-in min-w-[280px] max-w-[360px] w-full`}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {/* ── Panel Header ─────────────────────────────────── */}
        <div className="flex items-start justify-between px-4 pt-4 pb-2 gap-2">
          <div className="flex-1 min-w-0">
            {isAdmin && isEditingName ? (
              <input
                autoFocus
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onBlur={handleSaveTitle}
                onKeyDown={handleKeyDown}
                className="neon-input w-full px-2 py-1 rounded text-sm font-mono"
              />
            ) : (
              <h3
                className={`font-mono font-semibold text-lg text-foreground truncate leading-tight ${
                  isAdmin ? "cursor-pointer hover:text-primary transition-colors duration-200" : ""
                }`}
                onClick={() => isAdmin && setIsEditingName(true)}
                title={isAdmin ? "Click to rename" : panel.name}
              >
                {panel.name}
              </h3>
            )}
            <p className="font-mono text-xs text-muted-foreground mt-0.5">
              {total} team{total !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Admin panel controls */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all duration-200"
              title={collapsed ? "Expand" : "Collapse"}
            >
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            {isAdmin && (
              <button
                onClick={() => onDeletePanel(panel.id)}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all duration-200"
                title="Delete panel"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Progress Bar ─────────────────────────────────── */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Progress
            </span>
            <span
              className={`font-mono text-xs font-semibold transition-colors duration-500 ${
                pct === 100 ? "text-green-400" : pct >= 50 ? "text-yellow-400" : pct > 0 ? "text-blue-400" : "text-muted-foreground"
              }`}
            >
              {pct}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-muted/50 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-in-out ${progressColor}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* ── Teams List ───────────────────────────────────── */}
        {!collapsed && (
          <div className="flex flex-col gap-1.5 px-3 pb-3 flex-1 max-h-[360px] overflow-y-auto">
            {panel.teams.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
                <svg className="w-8 h-8 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-mono text-xs">No teams yet</p>
                {isAdmin && (
                  <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">
                    Add teams below ↓
                  </p>
                )}
              </div>
            ) : (
              panel.teams.map((team) => (
                <TeamRow
                  key={team.id}
                  team={team}
                  isAdmin={isAdmin}
                  onStatusChange={handleTeamStatusChange}
                  onEdit={openEditTeam}
                  onDelete={handleDeleteTeam}
                />
              ))
            )}
          </div>
        )}

        {/* ── Stats Footer ─────────────────────────────────── */}
        <div className="border-t border-border/50 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {completed} done
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-yellow-400">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              {ongoing} live
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
              {remaining} queued
            </span>
          </div>

          {/* Add team button (admin) */}
          {isAdmin && (
            <button
              onClick={openAddTeam}
              disabled={isSubmitting}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded border border-primary/30 bg-primary/5 text-primary font-mono text-[10px] uppercase tracking-wider hover:bg-primary/10 hover:border-primary/60 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Team
            </button>
          )}
        </div>
      </div>

      {/* Team modal */}
      <TeamModal
        isOpen={teamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        initialTeam={editingTeam}
        onSave={handleTeamSave}
        mode={teamModalMode}
      />
    </>
  );
};

export default PanelCard;