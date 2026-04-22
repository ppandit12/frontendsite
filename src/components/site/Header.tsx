import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_80%,transparent)] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Apex Stump Grinding & Removal">
          <img src={logo} alt="Apex Stump Grinding & Removal" className="h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-primary transition">Services</Link>
          <Link to="/about" className="hover:text-primary transition">About</Link>
          <Link to="/gallery" className="hover:text-primary transition">Gallery</Link>
          <Link to="/" hash="service-area" className="hover:text-primary transition">Areas We Serve</Link>
          <Link to="/" hash="testimonials" className="hover:text-primary transition">Reviews</Link>
          <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Get Quote Now</a>
        </nav>
        <a href="tel:+14612344291" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[var(--brown)]">
          <Phone size={16} /> (461) 234-4291
        </a>
      </div>
    </header>
  );
}
