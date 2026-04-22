import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Trees, Scissors, Sparkles, Zap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Stumpworks" },
      { name: "description", content: "Professional stump grinding and yard solutions." },
    ],
  }),
  component: ServicesPage,
});

const SERVICE_ITEMS = [
  {
    id: "stump-grinding",
    icon: Trees,
    title: "Stump Grinding",
    desc: "Industrial-grade grinders pulverize stumps below grade, turning them into useful mulch.",
    features: ["Below-grade grinding", "Mulch production", "Minimal site impact"],
  },
  {
    id: "root-removal",
    icon: Scissors,
    title: "Root Removal",
    desc: "Extract surface and lateral roots that ruin lawns, cause trip hazards, or damage foundations.",
    features: ["Surface root extraction", "Lawn protection", "Safety focused"],
  },
  {
    id: "debris-cleanup",
    icon: Sparkles,
    title: "Debris Cleanup",
    desc: "Full haul-away of chips, soil, and debris. We leave your yard ready for replanting.",
    features: ["Site clearing", "Mulch hauling", "Yard restoration"],
  },
  {
    id: "emergency-service",
    icon: Zap,
    title: "Emergency Service",
    desc: "Storm damage? We respond quickly to clear fallen trees and stumps that block access.",
    features: ["24/7 availability", "Fast response", "Safe clearing"],
  },
];

const SERVICE_AREAS = [
  {
    city: "Toronto (West & High Park)",
    neighborhoods: ["High Park North", "Swansea", "Bloor West Village", "Roncesvalles", "The Junction", "Junction Triangle", "Parkdale", "Baby Point", "Old Mill"]
  },
  {
    city: "Etobicoke",
    neighborhoods: ["The Kingsway", "Edenbridge - Humber Valley", "Princess Gardens", "Markland Wood", "Islington-City Centre", "Stonegate-Queensway", "Mimico", "New Toronto", "Long Branch", "Alderwood"]
  },
  {
    city: "Mississauga",
    neighborhoods: ["Lorne Park", "Mineola", "Port Credit", "Lakeview", "Clarkson", "Streetsville", "Erin Mills", "Meadowvale", "Applewood", "Cooksville", "Churchill Meadows", "Lisgar"]
  },
  {
    city: "Brampton",
    neighborhoods: ["Credit Valley", "Mount Pleasant", "Bramalea", "Peel Village", "Heart Lake", "Snelgrove", "Churchville", "Castlemore", "Fletcher's Creek"]
  },
  {
    city: "Oakville",
    neighborhoods: ["Old Oakville", "South East Oakville", "Bronte Village", "Glen Abbey", "Joshua Creek", "Clearview", "River Oaks", "West Oak Trails", "Falgarwood"]
  },
  {
    city: "Burlington",
    neighborhoods: ["Roseland", "Shoreacres", "Aldershot", "Tyandaga", "Millcroft", "Alton Village", "The Orchard", "Elizabeth Gardens", "Headon Forest"]
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Our Expertise</span>
              <h1 className="mt-4 text-5xl sm:text-6xl font-display text-primary uppercase leading-tight">
                Professional Stump <br /> & Yard Solutions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We offer a range of specialized services to restore the beauty and safety of your outdoor space.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICE_ITEMS.map((service, i) => (
                <Reveal key={service.id} delay={i * 100} className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-display text-charcoal uppercase mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm font-medium text-charcoal/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://clienthub.getjobber.com/hubs/103765d3-7b15-4cf6-bb79-479c6cf53279/public/requests/2030549/new"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all"
                  >
                    Book this service <ArrowRight size={18} />
                  </a>
                </Reveal>
              ))}
            </div>

            <section className="py-24 mt-16 border-t border-border">
              <Reveal className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Coverage</span>
                <h2 className="mt-4 text-4xl sm:text-5xl font-display text-primary uppercase">Areas We Serve</h2>
                <p className="mt-4 text-muted-foreground">
                  Providing professional stump grinding across the Greater Toronto Area and beyond.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {SERVICE_AREAS.map((area, i) => (
                  <Reveal key={area.city} delay={i * 50} className="space-y-4">
                    <h3 className="font-display text-2xl text-primary uppercase border-b border-[var(--brown)]/20 pb-2">
                      {area.city}
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {area.neighborhoods.map((n) => (
                        <li key={n} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[var(--brown)]/40" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
