const StatusLegend = () => {
  const items = [
    {
      dot: "bg-green-500",
      bg: "bg-green-500/10 border-green-500/30",
      label: "Completed",
      desc: "All teams done",
    },
    {
      dot: "bg-yellow-400 animate-pulse",
      bg: "bg-yellow-400/10 border-yellow-400/30",
      label: "Ongoing",
      desc: "In progress",
    },
    {
      dot: "bg-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
      label: "Partial",
      desc: "1–49% complete",
    },
    {
      dot: "bg-muted-foreground",
      bg: "bg-muted/50 border-border",
      label: "Not Started",
      desc: "0% complete",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mt-6 mb-8 px-1">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mr-1">
        Legend:
      </span>
      {items.map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono ${item.bg} transition-all duration-300`}
        >
          <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
          <span className="text-foreground font-semibold">{item.label}</span>
          <span className="text-muted-foreground hidden sm:inline">— {item.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusLegend;
