import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_80%,transparent)] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Apex Stump Grinding & Removal">
          <img src={logo} alt="Apex Stump Grinding & Removal" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/services" className="hover:text-primary transition">Services</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/gallery" className="hover:text-primary transition">Gallery</a>
          <a href="/#service-area" className="hover:text-primary transition">Areas We Serve</a>
          <a href="/#testimonials" className="hover:text-primary transition">Reviews</a>
          <a href={QUOTE_URL} rel="noopener noreferrer" className="hover:text-primary transition">Get Quote Now</a>
        </nav>
        <a href="tel:+14612344291" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[var(--brown)]">
          <Phone size={16} /> (461) 234-4291
        </a>
      </div>
    </header>
  );
}
