import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RegisterOverlayProps {
  active: boolean;
  onComplete: () => void;
}

const UNSTOP_URL = "https://unstop.com/o/ejZIM4H?lb=6H1d2VJr&utm_medium=Share&utm_source=aisaai11683&utm_campaign=Online_coding_challenge";

interface Shard {
  id: number;
  // clip path points
  path: string;
  // initial position (center of shard)
  cx: number;
  cy: number;
  // velocity
  vx: number;
  vy: number;
  // rotation
  rot: number;
  rotSpeed: number;
  // size factor for gravity
  size: number;
  opacity: number;
}



const TypewriterText = ({ text, delay = 0, speed = 50, onDone }: { text: string; delay?: number; speed?: number; onDone?: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
  if (!started || displayed.length === text.length) return;

  let i = 0;

  const interval = setInterval(() => {
    i++;
    setDisplayed((prev) => {
      const next = text.slice(0, prev.length + 1);
      if (next.length === text.length) {
        clearInterval(interval);
        onDone?.();
      }
      return next;
    });
  }, speed);

  return () => clearInterval(interval);
}, [started, text, speed]);

  return (
    <span style={{ animation: "flicker 3s ease-in-out infinite" }}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
};

const RegisterOverlay = ({ active, onComplete }: RegisterOverlayProps) => {
  const [phase, setPhase] = useState<
    "idle" |"burning" | "message" | "countdown" | "done"
  >("idle");
  
  
  
  //const originRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [countNum, setCountNum] = useState(3);
  const [textDone, setTextDone] = useState(false);
  // const snapshotRef = useRef<HTMLCanvasElement | null>(null);

  // Capture page snapshot
 

  // Render shards on canvas


  // Draw crack lines radiating from origin


  useEffect(() => {
    if (!active) {
      setPhase("idle");
      setTextDone(false);
      setCountNum(3);
      return;
    }

    setPhase("burning");

    const t = setTimeout(() => {
      setPhase("message");
    }, 1800); // duration of burn

    return () => clearTimeout(t);
  }, [active]);

  // Handle countdown after text done
  useEffect(() => {
    if (phase !== "message" || !textDone) return;

    const t = setTimeout(() => setPhase("countdown"), 800);
    return () => clearTimeout(t);
  }, [phase, textDone]);

  useEffect(() => {
    if (phase !== "countdown") return;

    if (countNum <= 0) {
      setPhase("done");
      window.location.href = UNSTOP_URL;
      onComplete();
      return;
    }

    const t = setTimeout(() => setCountNum((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countNum, onComplete]);

  // Store click origin from HeroSection
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ x: number; y: number }>;
      //originRef.current = { x: customEvent.detail.x, y: customEvent.detail.y };
    };
    window.addEventListener("register-click-origin", handler);
    return () => window.removeEventListener("register-click-origin", handler);
  }, []);

  if (!active && phase === "idle") return null;

  return (
    <>
      {/* Message + Countdown phase */}
      <AnimatePresence>
        {(phase === "message" || phase === "countdown" || phase === "done") && (
          <motion.div
            key="msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center px-6"
          >
            {phase !== "done" && (
              <div className="text-center space-y-4">
                <p className="font-terminal text-2xl md:text-5xl text-primary">
                  <TypewriterText text="Welcome, Coder." delay={0} speed={60} />
                </p>
                <p className="font-terminal text-lg md:text-3xl text-foreground/70">
                  <TypewriterText text="Fill the form to secure your spot." delay={1200} speed={40} />
                </p>
                <p className="font-mono text-xl text-muted-foreground">
                  <TypewriterText
                    key="redirect-text"
                    text="Redirecting to UnStop..."
                    delay={2800}
                    speed={50}
                    onDone={() => setTextDone(true)}
                  />
                </p>
                {phase === "countdown" && (
                  <motion.p
                    key={`count-${countNum}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-sm text-muted-foreground mt-2"
                  >
                    Redirecting in {countNum}...
                  </motion.p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegisterOverlay;
