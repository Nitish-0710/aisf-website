import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import GlobalEffects from "@/components/GlobalEffects";
import ThreeWorld from "@/components/ThreeWorld";

// ─── Navbar ───────────────────────────────────────────
const TimerNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="font-pixel text-primary text-sm animate-glow-pulse">
          AISF
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="relative font-mono text-base tracking-wider text-foreground hover:text-primary transition-colors group"
          >
            ← Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <div className="w-[1px] h-4 bg-border" />
          <span className="relative font-mono text-base tracking-wider text-primary">
            Timer
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
          </span>
        </div>
      </div>
    </nav>
  );
};

// ─── Timer Logic ───────────────────────────────────────
const START_TIME = new Date("2026-03-27T12:00:00").getTime();
const END_TIME = new Date("2026-03-28T12:00:00").getTime();
const TOTAL_SECONDS = 24 * 60 * 60;

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function getTimeLeft(): TimeLeft {
  const now = Date.now();

  if (now < START_TIME) {
    return { hours: 24, minutes: 0, seconds: 0, total: TOTAL_SECONDS };
  }

  if (now >= END_TIME) {
    return { hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const remaining = Math.floor((END_TIME - now) / 1000);

  return {
    hours: Math.floor(remaining / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
    total: remaining,
  };
}

// ─── Main Component ────────────────────────────────────
const HackathonTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = getTimeLeft();
      setTimeLeft(tl);
      setPulse(true);
      setTimeout(() => setPulse(false), 120);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const now = Date.now();
  const isRunning = now >= START_TIME && now < END_TIME;
  const isFinished = now >= END_TIME;
  const notStarted = now < START_TIME;

  const percentage = isRunning
    ? Math.min(100, ((TOTAL_SECONDS - timeLeft.total) / TOTAL_SECONDS) * 100)
    : 0;

  const urgencyColor =
    isFinished
      ? "text-destructive"
      : timeLeft.total < 3600
      ? "text-destructive"
      : timeLeft.total < 6 * 3600
      ? "text-yellow-400"
      : "text-primary";

  const ringStroke = isFinished
    ? "hsl(0 84% 60%)"
    : timeLeft.total < 3600
    ? "hsl(0 84% 60%)"
    : timeLeft.total < 6 * 3600
    ? "hsl(43 96% 56%)"
    : "hsl(348 100% 50%)";

  const CIRCUMFERENCE = 2 * Math.PI * 130;
  const dashOffset = CIRCUMFERENCE * (1 - percentage / 100);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="fixed inset-0 z-[1] pointer-events-none">
        <ThreeWorld />
      </div>

      <GlobalEffects />

      <div className="relative z-20">
        <TimerNavbar />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 py-28">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="font-pixel text-primary text-2xl md:text-3xl mb-2">
              Hackathon Timer
            </h1>
            <p className="font-mono text-lg text-muted-foreground">
              24-Hour Countdown — Code Apex 2.0
            </p>
          </div>

          {/* Timer Circle */}
          <div className="relative flex items-center justify-center mb-4">
            <svg width="320" height="320" className="-rotate-90">
              <circle
                cx="160"
                cy="160"
                r="130"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="10"
              />
              <circle
                cx="160"
                cy="160"
                r="130"
                fill="none"
                stroke={ringStroke}
                strokeWidth="10"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={isRunning || isFinished ? dashOffset : CIRCUMFERENCE}
              />
            </svg>

            <div className="absolute text-center">
              {isFinished ? (
                <>
                  <span className="font-pixel text-destructive text-xl">
                    TIME'S UP!
                  </span>
                </>
              ) : (
                <>
                  <span className={`font-pixel text-4xl ${urgencyColor}`}>
                    {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                  </span>
                  <div className="text-sm mt-2">
                    {notStarted ? "Not started" : "Remaining"}
                  </div>
                  <div className={`text-lg ${urgencyColor}`}>
                    {Math.round(percentage)}% elapsed
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="mt-4 font-mono text-sm">
            {isFinished
              ? "Hackathon Finished"
              : isRunning
              ? "Live — Timer Running"
              : "Timer Not Started"}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonTimer;
