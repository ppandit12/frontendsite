import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Clock, Zap, Star } from "lucide-react";
import crewImg from "@/assets/why-us-team.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Stumpworks" },
      { name: "description", content: "Learn more about our rugged, modern stump grinding experts." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Our Story</span>
              <h1 className="mt-4 text-5xl sm:text-6xl font-display text-primary uppercase leading-tight">
                Rugged Modern <br /> Stump Grinding Experts
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We started with a simple mission: to provide the most reliable, efficient, and clean stump removal service in the region. Today, we're proud to be the first choice for homeowners and property managers alike.
              </p>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[var(--shadow-rugged)]">
                <img
                  src={crewImg}
                  alt="Our professional crew at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display text-primary uppercase mb-6">Our Values</h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Integrity First",
                      desc: "We do what we say we'll do. No hidden fees, no surprises, just honest hard work.",
                    },
                    {
                      icon: Clock,
                      title: "Punctuality",
                      desc: "Your time is valuable. We arrive on schedule and complete jobs efficiently.",
                    },
                    {
                      icon: Zap,
                      title: "Modern Equipment",
                      desc: "We invest in the latest industrial-grade grinders to ensure the best results with minimal impact.",
                    },
                  ].map((val, i) => (
                    <Reveal key={val.title} delay={i * 150} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <val.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-charcoal">{val.title}</h3>
                        <p className="text-muted-foreground">{val.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <section className="bg-charcoal rounded-3xl p-12 text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
               <div className="relative z-10 text-center max-w-2xl mx-auto">
                 <h2 className="text-4xl font-display uppercase mb-6">Built on Trust</h2>
                 <p className="text-white/70 text-lg mb-8">
                   Every stump we grind is a commitment to the quality and care we provide to our community. We're fully insured and stand behind every job we complete.
                 </p>
                 <div className="flex justify-center gap-2 text-[var(--beige)]">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                 </div>
                 <p className="mt-4 font-bold tracking-widest uppercase text-sm">Rated 5.0 by hundreds of locals</p>
               </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
