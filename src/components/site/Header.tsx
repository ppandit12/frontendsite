import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new";

const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/areas-we-serve", label: "Areas We Serve" },
  { to: "/", hash: "testimonials", label: "Reviews" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_80%,transparent)] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Apex Stump Grinding & Removal">
            <img src={logo} alt="Apex Stump Grinding & Removal" className="h-20 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) =>
              link.hash ? (
                <Link key={link.label} to={link.to} hash={link.hash} className="hover:text-primary transition">
                  {link.label}
                </Link>
              ) : (
                <Link key={link.label} to={link.to} className="hover:text-primary transition">
                  {link.label}
                </Link>
              )
            )}
            <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Get Quote Now</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Phone – hidden on very small, visible sm+ */}
            <a href="tel:+14162344298" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[var(--brown)]">
              <Phone size={16} /> (416) 234-4298
            </a>

            {/* Hamburger – visible below md */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden relative z-50 flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--primary)] text-white shadow-md transition-transform active:scale-90"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 md:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-down panel */}
        <nav
          className={`absolute top-24 inset-x-0 mx-4 rounded-2xl bg-white shadow-2xl border border-border overflow-hidden transition-all duration-300 origin-top ${
            mobileOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
          }`}
          style={{ maxHeight: "calc(100vh - 7rem)" }}
        >
          <div className="flex flex-col py-4">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-6 py-4 text-base font-semibold text-[var(--charcoal)] hover:bg-[var(--beige)]/40 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-6 py-4 text-base font-semibold text-[var(--charcoal)] hover:bg-[var(--beige)]/40 transition-colors"
            >
              Get Quote Now
            </a>

            {/* Divider */}
            <div className="mx-6 my-2 h-px bg-border" />

            {/* Phone CTA */}
            <a
              href="tel:+14162344298"
              className="flex items-center gap-3 px-6 py-4 text-base font-bold text-[var(--brown)]"
            >
              <Phone size={18} />
              (416) 234-4298
            </a>

            {/* Quote button */}
            <div className="px-6 pb-4">
              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-center"
              >
                Get Free Quote →
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
