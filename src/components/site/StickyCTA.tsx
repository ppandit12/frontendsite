import { Phone } from "lucide-react";

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new";

export function StickyCTA() {
  return (
    <>
      <a
        href={QUOTE_URL}
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 btn-primary cta-pulse"
      >
        Get Quote Now
      </a>
      <a
        href="tel:+14612344291"
        className="sm:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-rugged)] cta-pulse"
        aria-label="Call now"
      >
        <Phone size={22} />
      </a>
    </>
  );
}
