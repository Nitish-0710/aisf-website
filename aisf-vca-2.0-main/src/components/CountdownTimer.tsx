import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-15T09:00:00");

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const update = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
      setPulse(true);
      setTimeout(() => setPulse(false), 150);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "DAYS", value: time.days },
    { label: "HRS", value: time.hours },
    { label: "MIN", value: time.minutes },
    { label: "SEC", value: time.seconds },
  ];

  return (
    <section className="py-16 relative z-20">
      <div className="container mx-auto px-4 text-center">
        <p className="terminal-header text-sm mb-8 tracking-[0.2em]">
          // TIME LEFT FOR REGISTRATION
        </p>
        <div className="flex justify-center gap-3 sm:gap-6">
          {blocks.map((b) => (
            <div
              key={b.label}
              className={`flex flex-col items-center bg-card border border-border p-4 sm:p-6 rounded transition-all duration-150 ${
                pulse ? "shadow-[0_0_20px_hsl(348_100%_50%/0.3)]" : ""
              }`}
            >
              <span className="font-pixel text-2xl sm:text-4xl md:text-5xl text-primary tabular-nums">
                {String(b.value).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-muted-foreground mt-2 tracking-widest">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
