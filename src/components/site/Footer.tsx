import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Trees, Facebook, Instagram, Twitter } from "lucide-react";
import { useContent } from "@/hooks/use-content";

const DEFAULT_FOOTER = {
  brandName: "STUMPWORKS",
  description: "Rugged, modern stump grinding for homeowners and property managers.",
  quickLinks: [
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/areas-we-serve", label: "Areas We Serve" },
    { to: "/about", label: "About Us" },
    { to: "/", hash: "testimonials", label: "Reviews" },
  ],
  services: [
    "Stump Grinding",
    "Root Removal",
    "Cleanup, Topsoil Backfilling & Levelling",
  ],
  contact: {
    phone: "(416) 234-4298",
    phoneLink: "tel:+14162344298",
    address: "Serving Toronto, Etobicoke & Mississauga",
    email: "chris@apexstump.ca",
  },
  socialLinks: [
    { platform: "facebook", url: "#" },
    { platform: "instagram", url: "#" },
    { platform: "twitter", url: "#" },
  ],
  copyright: "© {year} Stumpworks. All rights reserved.",
  logoUrl: "",
};

export function Footer() {
  const { content } = useContent("footer", DEFAULT_FOOTER);
  
  const footer = content || DEFAULT_FOOTER;

  const renderSocialIcon = (platform: string, className?: string) => {
    switch (platform.toLowerCase()) {
      case "facebook": return <Facebook size={16} className={className} />;
      case "instagram": return <Instagram size={16} className={className} />;
      case "twitter": return <Twitter size={16} className={className} />;
      default: return null;
    }
  };

  return (
    <footer id="contact" className="bg-charcoal text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl text-[var(--beige)]">
            {footer.logoUrl ? (
              <img src={footer.logoUrl} alt={footer.brandName} className="h-12 w-auto object-contain" />
            ) : (
              <><Trees size={32} /> {footer.brandName}</>
            )}
          </div>
          <p className="mt-3 text-sm text-white/60">{footer.description}</p>
          <div className="mt-4 flex gap-3">
            {footer.socialLinks.map((social: any, i: number) => (
              <a key={i} href={social.url} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--brown)] hover:border-[var(--brown)] transition">
                {renderSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footer.quickLinks.map((link: any, i: number) => (
              <li key={i}>
                {link.hash ? (
                  <Link to={link.to} hash={link.hash} className="hover:text-white">{link.label}</Link>
                ) : (
                  <Link to={link.to} className="hover:text-white">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footer.services.map((service: string, i: number) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-[var(--beige)]">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={14} /> 
              <a href={footer.contact.phoneLink} className="hover:text-white">{footer.contact.phone}</a>
            </li>
            <li className="flex items-center gap-2"><MapPin size={14} /> {footer.contact.address}</li>
            <li><a href={`mailto:${footer.contact.email}`} className="hover:text-white">{footer.contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        {footer.copyright.replace('{year}', new Date().getFullYear().toString())}
      </div>
    </footer>
  );
}
