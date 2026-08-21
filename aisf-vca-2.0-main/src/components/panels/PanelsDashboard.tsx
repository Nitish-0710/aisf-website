import { useState, useEffect, useCallback, useRef } from "react";
import { nanoid } from "nanoid";
import AdminLogin from "./AdminLogin";
import PanelCard, { type Panel } from "./PanelCard";
import { PanelModal } from "./PanelModal";
import StatusLegend from "./StatusLegend";
import type { TeamStatus } from "./TeamRow";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "aisf-panels-v1";

type Role = "admin" | "participant";

interface PanelsDashboardProps {
  isAdminRoute?: boolean;
}

const PanelsDashboard = ({ isAdminRoute = false }: PanelsDashboardProps) => {
  const [panels, setPanels] = useState<Panel[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // Fallback to empty array if nothing in localStorage
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [role, setRole] = useState<Role>(isAdminRoute ? "admin" : "participant");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [panelModalOpen, setPanelModalOpen] = useState(false);
  const [editingPanel, setEditingPanel] = useState<Panel | undefined>(undefined);
  const [panelModalMode, setPanelModalMode] = useState<"create" | "edit">("create");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Refs to track update state and prevent echo loops
  const isAdminUpdatingRef = useRef(false);
  const updateTimeoutRef = useRef<NodeJS.Timeout>();
  const lastSyncedStateRef = useRef<string>("");
  const isInitializedRef = useRef(false);

  // Fetch initial state from Supabase
  useEffect(() => {
    if (!supabase) return;

    const fetchState = async () => {
      const { data, error } = await supabase
        .from("app_state")
        .select("data")
        .eq("id", "panels_state")
        .single();

      if (!error && data?.data) {
        const newData = data.data as Panel[];
        const newDataStr = JSON.stringify(newData);
        lastSyncedStateRef.current = newDataStr;
        setPanels(newData);
      }
      isInitializedRef.current = true;
    };
    fetchState();
  }, []);

  // Subscribe to real-time changes (only for participants)
  useEffect(() => {
    if (!supabase || isAdminRoute) return;

    let isSubscribed = true;

    const channel = supabase
      .channel("app_state_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "app_state",
          filter: "id=eq.panels_state",
        },
        (payload) => {
          if (!isSubscribed) return;
          
          if (payload.new && (payload.new as any).data) {
            const newData = (payload.new as any).data;
            const newDataStr = JSON.stringify(newData);
            
            // Prevent echo loop: don't update if admin is currently updating
            if (isAdminUpdatingRef.current) {
              return;
            }
            
            // Only update if data is actually different
            if (lastSyncedStateRef.current !== newDataStr) {
              lastSyncedStateRef.current = newDataStr;
              setPanels(newData);
            }
          }
        }
      )
      .subscribe();

    return () => {
      isSubscribed = false;
      supabase.removeChannel(channel);
    };
  }, [isAdminRoute]);

  // Persist panels to localStorage & Push to Supabase if Admin
  useEffect(() => {
    // Skip if not initialized yet
    if (!isInitializedRef.current) return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(panels));
    } catch {
      // quota errors ignored
    }

    if (supabase && isAdminRoute) {
      const currentStateStr = JSON.stringify(panels);
      
      // Skip if state hasn't changed
      if (lastSyncedStateRef.current === currentStateStr) {
        return;
      }
      
      // Clear any pending timeout
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
      
      // Mark that admin is updating
      isAdminUpdatingRef.current = true;
      
      // Debounce the push to prevent race conditions
      updateTimeoutRef.current = setTimeout(async () => {
        try {
          const { error } = await supabase
            .from("app_state")
            .upsert({ id: "panels_state", data: panels });
          
          if (!error) {
            lastSyncedStateRef.current = JSON.stringify(panels);
          }
        } catch (error) {
          console.error("Failed to sync to Supabase:", error);
        } finally {
          // Reset the updating flag after a short delay
          setTimeout(() => {
            isAdminUpdatingRef.current = false;
          }, 100);
        }
      }, 200);
      
      return () => {
        if (updateTimeoutRef.current) {
          clearTimeout(updateTimeoutRef.current);
        }
      };
    }
  }, [panels, isAdminRoute]);

  // ── Panel CRUD ───────────────────────────────────────
  const handleCreatePanel = useCallback((name: string) => {
    setPanels((prev) => [
      ...prev,
      { id: nanoid(), name, teams: [] },
    ]);
  }, []);

  const handleUpdatePanel = useCallback((panelId: string, name: string) => {
    setPanels((prev) =>
      prev.map((p) => (p.id === panelId ? { ...p, name } : p))
    );
  }, []);

  const handleDeletePanel = useCallback((panelId: string) => {
    setPanels((prev) => prev.filter((p) => p.id !== panelId));
  }, []);

  // ── Team CRUD ────────────────────────────────────────
  const handleAddTeam = useCallback(
    (panelId: string, name: string, status: TeamStatus) => {
      setPanels((prev) =>
        prev.map((p) =>
          p.id === panelId
            ? { ...p, teams: [...p.teams, { id: nanoid(), name, status }] }
            : p
        )
      );
    },
    []
  );

  const handleUpdateTeam = useCallback(
    (panelId: string, teamId: string, name: string, status: TeamStatus) => {
      setPanels((prev) =>
        prev.map((p) =>
          p.id === panelId
            ? {
                ...p,
                teams: p.teams.map((t) =>
                  t.id === teamId ? { ...t, name, status } : t
                ),
              }
            : p
        )
      );
    },
    []
  );

  const handleDeleteTeam = useCallback((panelId: string, teamId: string) => {
    setPanels((prev) =>
      prev.map((p) =>
        p.id === panelId
          ? { ...p, teams: p.teams.filter((t) => t.id !== teamId) }
          : p
      )
    );
  }, []);

  const handleTeamStatusChange = useCallback(
    (panelId: string, teamId: string, status: TeamStatus) => {
      setPanels((prev) =>
        prev.map((p) =>
          p.id === panelId
            ? {
                ...p,
                teams: p.teams.map((t) =>
                  t.id === teamId ? { ...t, status } : t
                ),
              }
            : p
        )
      );
    },
    []
  );

  // ── Derived stats ────────────────────────────────────
  const totalTeams = panels.reduce((s, p) => s + p.teams.length, 0);
  const totalCompleted = panels.reduce(
    (s, p) => s + p.teams.filter((t) => t.status === "completed").length,
    0
  );
  const totalOngoing = panels.reduce(
    (s, p) => s + p.teams.filter((t) => t.status === "ongoing").length,
    0
  );
  const overallPct =
    totalTeams > 0 ? Math.round((totalCompleted / totalTeams) * 100) : 0;

  // ── Filtered panels ──────────────────────────────────
  const filteredPanels = searchQuery.trim()
    ? panels
        .map((p) => ({
          ...p,
          teams: p.teams.filter((t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.teams.length > 0
        )
    : panels;

  const isAdmin = role === "admin" && isAuthenticated;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 pt-28 pb-12">

        {/* ── Page Header (centered) ──────────────────── */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="w-12 h-[2px] bg-primary/40 rounded-full" />
            <div className="w-2 h-10 bg-primary rounded-full shadow-[0_0_14px_hsl(348_100%_50%/0.7)]" />
            <div className="w-12 h-[2px] bg-primary/40 rounded-full" />
          </div>
          <h1 className="font-pixel text-primary text-4xl md:text-4xl leading-relaxed tracking-wide mb-3">
            Hackathon Panels
          </h1>
          <p className="font-mono text-lg text-muted-foreground tracking-wider">
            Real-time dashboard — track panel status &amp; team progress
          </p>
        </div>

        {/* ── Stats Row ─────────────────── */}
        <div className="flex items-center justify-end flex-wrap gap-4 mb-8">

          {/* Global stats */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-xl backdrop-blur-sm">
              <span className="font-mono text-sm text-muted-foreground">Panels:</span>
              <span className="font-mono text-base font-bold text-foreground">{panels.length}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-xl backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono text-sm text-green-400 font-semibold">{totalCompleted} done</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-xl backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="font-mono text-sm text-yellow-400 font-semibold">{totalOngoing} live</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-xl backdrop-blur-sm">
              <span className="font-mono text-sm text-primary font-semibold">{overallPct}% overall</span>
            </div>
          </div>
        </div>

        {/* Admin unauthenticated */}
        {role === "admin" && !isAuthenticated ? (
          <AdminLogin onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <>
            {/* ── Admin toolbar ─────────────────────────── */}
            {isAdmin && (
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <button
                  onClick={() => {
                    setPanelModalMode("create");
                    setEditingPanel(undefined);
                    setPanelModalOpen(true);
                  }}
                  className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_22px_hsl(348_100%_50%/0.45)] active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Panel
                </button>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-green-500/10 border border-green-500/30 rounded-xl backdrop-blur-sm">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-mono text-sm text-green-400 font-semibold">Admin Mode Active</span>
                </div>
              </div>
            )}

            {/* ── Search ──────────────────────────────── */}
            <div className="relative max-w-sm mb-6">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search teams or panels..."
                className="neon-input w-full pl-12 pr-4 py-3 rounded-xl text-base"
              />
            </div>

            {/* ── Status Legend ─────────────────────── */}
            <StatusLegend />

            {/* ── Panels Grid (WRAP on overflow) ───── */}
            {filteredPanels.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-28 text-muted-foreground">
                <svg className="w-20 h-20 mb-5 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
                <p className="font-mono text-lg">
                  {searchQuery ? "No results found." : "No panels yet."}
                </p>
                {isAdmin && !searchQuery && (
                  <p className="font-mono text-base text-muted-foreground/60 mt-2">
                    Use "+ Add Panel" to create your first panel.
                  </p>
                )}
              </div>
            ) : (
              /* Panels wrap to next row when overflow — no horizontal scroll */
              <div className="flex flex-wrap gap-5 pb-8">
                {filteredPanels.map((panel, idx) => (
                  <div
                    key={panel.id}
                    lassName="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                  >
                    <PanelCard
                      panel={panel}
                      isAdmin={isAdmin}
                      onUpdatePanel={handleUpdatePanel}
                      onDeletePanel={handleDeletePanel}
                      onAddTeam={handleAddTeam}
                      onUpdateTeam={handleUpdateTeam}
                      onDeleteTeam={handleDeleteTeam}
                      onTeamStatusChange={handleTeamStatusChange}
                      animationDelay={idx * 80}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Create/Edit Panel Modal */}
      <PanelModal
        isOpen={panelModalOpen}
        onClose={() => setPanelModalOpen(false)}
        initialName={editingPanel?.name}
        onSave={handleCreatePanel}
        mode={panelModalMode}
      />
    </div>
  );
};

export default PanelsDashboard;
