import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";
import { Reveal } from "@/components/site/Reveal";
import { WoodChips } from "@/components/site/WoodChips";
import { MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MapSection } from "@/components/site/MapSection";

export const Route = createFileRoute("/areas-we-serve")({
  head: () => ({
    meta: [
      { title: "Areas We Serve | Apex Stump Grinding & Removal" },
      { name: "description", content: "Professional stump grinding services across the Greater Toronto Area, including Etobicoke, Mississauga, Brampton, and more." },
    ],
  }),
  component: AreasPage,
});

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new";

const SERVICE_AREAS = [
  {
    city: "Toronto (West & High Park)",
    neighborhoods: ["High Park North", "Swansea", "Bloor West Village", "Roncesvalles", "The Junction", "Junction Triangle", "Parkdale", "Baby Point", "Old Mill"],
  },
  {
    city: "Etobicoke",
    neighborhoods: ["The Kingsway", "Humber Valley", "Princess Gardens", "Markland Wood", "Mimico", "Long Branch", "Alderwood"],
  },
  {
    city: "Mississauga",
    neighborhoods: ["Lorne Park", "Mineola", "Port Credit", "Lakeview", "Clarkson", "Streetsville", "Meadowvale"],
  },
  {
    city: "Brampton",
    neighborhoods: ["Credit Valley", "Mount Pleasant", "Bramalea", "Peel Village", "Heart Lake", "Castlemore"],
  },
  {
    city: "Oakville",
    neighborhoods: ["Old Oakville", "Bronte Village", "Glen Abbey", "Joshua Creek", "West Oak Trails"],
  },
  {
    city: "Burlington",
    neighborhoods: ["Roseland", "Shoreacres", "Aldershot", "Tyandaga", "Millcroft", "The Orchard"],
  },
];

function AreasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--beige)" }} />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(135deg, color-mix(in oklab, var(--beige) 90%, transparent) 0%, color-mix(in oklab, var(--primary) 30%, transparent) 100%)",
            }}
          />
          <WoodChips count={15} />
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase mb-6">
                <MapPin size={14} /> Local Experts
              </span>
              <h1 className="text-5xl sm:text-7xl font-display text-primary uppercase leading-[1.05] max-w-4xl mx-auto">
                Areas We Serve
              </h1>
              <p className="mt-8 text-lg text-foreground/80 max-w-2xl mx-auto">
                Providing professional stump grinding and yard restoration across the 
                Greater Toronto Area and beyond. Find your neighborhood below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coverage Areas Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_AREAS.map((area, i) => (
                <Reveal key={area.city} delay={i * 50} className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-display text-primary uppercase tracking-wide">
                      {area.city}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {area.neighborhoods.map(n => (
                      <li key={n} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brown)]/40 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <MapSection />

        {/* Call to Action */}
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl sm:text-6xl uppercase font-display mb-8">Not on the list?</h2>
              <p className="text-xl text-white/60 mb-12">
                We frequently travel outside our primary service areas for larger projects. 
                Contact us to see if we can help with your property.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={QUOTE_URL} className="btn-primary">Request a Quote <ArrowRight size={18} /></a>
                <a href="tel:+14162344298" className="btn-outline" style={{ borderColor: 'var(--beige)', color: 'var(--beige)' }}>
                  <Phone size={16} /> (416) 234-4298
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
