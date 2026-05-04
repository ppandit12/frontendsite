import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useContent } from "@/hooks/use-content";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  const { content } = useContent("sticky-cta", {
    quoteLabel: 'Get Quote Now',
    quoteUrl: 'https://clienthub.getjobber.com/hubs/e26093ba-9938-4ec5-b46f-0e1ed9977087/public/requests/4622022/new',
    phoneLink: 'tel:+14162344298',
    showAfterScroll: 400,
  });

  useEffect(() => {
    const threshold = content?.showAfterScroll || 400;
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [content?.showAfterScroll]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <a
        href={content.quoteUrl}
        rel="noopener noreferrer"
        className="pointer-events-auto btn-primary h-14 px-8 shadow-2xl cta-pulse flex items-center justify-center whitespace-nowrap"
      >
        {content.quoteLabel}
      </a>
      <a
        href={content.phoneLink}
        className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Call now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
