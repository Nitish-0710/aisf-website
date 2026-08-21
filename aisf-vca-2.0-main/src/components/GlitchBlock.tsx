import { useState, useCallback, useMemo, useEffect, useRef } from "react";

interface GlitchBlockProps {
  text: string;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "div";
}

const glitchChars = "!@#$%^&*()_+{}|:<>?";

const GlitchBlock = ({ text, className = "", as: Tag = "p" }: GlitchBlockProps) => {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);
  const hasPlayed = useRef(false);
  const elementRef = useRef<HTMLElement>(null);

  const letterData = useMemo(() => {
    return text.split("").map((char, i) => ({
      char,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
      key: i,
    }));
  }, [text]);

  const runGlitch = useCallback(() => {
    if (glitching) return;
    setGlitching(true);
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            return i < iterations ? char : glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );
      iterations += 2;
      if (iterations >= text.length) {
        setDisplay(text);
        setGlitching(false);
        clearInterval(interval);
      }
    }, 30);
  }, [text, glitching]);

  // Trigger glitch only ONCE on first intersection
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          runGlitch();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [runGlitch]);

  const chars = glitching ? display.split("") : letterData.map((l) => l.char);

  return (
    <Tag
      ref={elementRef as any}
      className={`inline-flex flex-wrap cursor-default group ${className}`}
    >
      {chars.map((char: string, i: number) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: glitching
              ? undefined
              : `flicker ${letterData[i]?.duration ?? 4}s ease-in-out ${letterData[i]?.delay ?? 0}s infinite`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default GlitchBlock;
