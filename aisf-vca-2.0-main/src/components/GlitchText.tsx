import { useMemo } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const GlitchText = ({ text, className = "", as: Tag = "span" }: GlitchTextProps) => {
  const letters = useMemo(() => {
    return text.split("").map((char, i) => ({
      char: char === " " ? "\u00A0" : char,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      key: i,
    }));
  }, [text]);

  return (
    <Tag className={`inline-flex flex-wrap ${className}`}>
      {letters.map((l) => (
        <span
          key={l.key}
          className="inline-block"
          style={{
            animation: `flicker ${l.duration}s ease-in-out ${l.delay}s infinite`,
          }}
        >
          {l.char}
        </span>
      ))}
    </Tag>
  );
};

export default GlitchText;
