import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Trees, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl text-[var(--beige)]">
            <Trees size={32} /> STUMPWORKS
          </div>
          <p className="mt-3 text-sm text-white/60">Rugged, modern stump grinding for homeowners and property managers.</p>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--brown)] hover:border-[var(--brown)] transition">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/" hash="services" className="hover:text-white">Services</Link></li>
            <li><Link to="/" hash="results" className="hover:text-white">Results</Link></li>
            <li><Link to="/" hash="testimonials" className="hover:text-white">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Stump Grinding</li>
            <li>Root Removal</li>
            <li>Cleanup, Topsoil Backfilling & Levelling</li>

          </ul>

        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone size={14} /> (416) 234-4298</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Serving West Toronto, Etobicoke & Mississauga</li>
            <li>chris@apexstump.ca</li>
          </ul>

        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Stumpworks. All rights reserved.
      </div>
    </footer>
  );
}
