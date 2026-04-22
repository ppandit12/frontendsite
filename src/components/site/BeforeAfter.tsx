import { useRef, useState, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  alt?: string;
}

export function BeforeAfter({ before, after, alt = "Before and after stump removal" }: Props) {
  const [pos, setPos] = useState(50);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setRevealed(true)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-card)] select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; onMove(e.clientX); }}
      onMouseMove={(e) => dragging.current && onMove(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; onMove(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && onMove(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={`${alt} - after`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1.1s cubic-bezier(0.77,0,0.18,1)",
        }}
        loading="lazy"
      />
      <img
        src={before}
        alt={`${alt} - before`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: revealed ? `inset(0 ${100 - pos}% 0 0)` : "inset(0 100% 0 0)",
          transition: dragging.current
            ? "none"
            : "clip-path 1.1s cubic-bezier(0.77,0,0.18,1)",
        }}
        loading="lazy"
      />

      {/* labels */}
      <span
        className="absolute top-4 left-4 bg-[var(--charcoal)] text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded-full"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateX(0)" : "translateX(-20px)",
          transition: "all 0.6s ease 0.4s",
        }}
      >
        BEFORE
      </span>
      <span
        className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold tracking-widest px-3 py-1.5 rounded-full"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateX(0)" : "translateX(20px)",
          transition: "all 0.6s ease 0.4s",
        }}
      >
        AFTER
      </span>

      {/* slider bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{
          left: `${pos}%`,
          transform: "translateX(-50%)",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.6s ease 0.6s",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-[var(--brown)] flex items-center justify-center hover:shadow-[0_0_24px_var(--brown)] transition-shadow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--brown)]">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
