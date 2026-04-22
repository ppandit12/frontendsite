import { useEffect, useState, useMemo } from "react";

export function WoodChips({ count = 18 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const chips = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const top = 60 + Math.random() * 40;
      const dx = (Math.random() - 0.5) * 200;
      const dy = -(80 + Math.random() * 200);
      const dur = 8 + Math.random() * 10;
      const delay = Math.random() * 8;
      const rot = Math.random() * 360;
      return { i, left, top, dx, dy, dur, delay, rot };
    });
  }, [count, mounted]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {chips.map((c) => (
        <span
          key={c.i}
          className="chip"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
            transform: `rotate(${c.rot}deg)`,
            // CSS vars
            ...({ "--dx": `${c.dx}px`, "--dy": `${c.dy}px` } as React.CSSProperties),
          }}
        />
      ))}
    </div>
  );
}
