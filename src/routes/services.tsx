import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";
import { Reveal } from "@/components/site/Reveal";
import { WoodChips } from "@/components/site/WoodChips";
import {
  Trees, Scissors, Sparkles, Zap, ArrowRight, CheckCircle2,
  ShieldCheck, Clock, Phone, MapPin, Star, Award,
} from "lucide-react";

// Assets
import heroImg from "@/assets/hero-grinder.jpg";
import beforeImg from "@/assets/before-stump.jpg";
import rootRemovalImg from "@/assets/root-removal-final.png";
import emergencyImg from "@/assets/emergency-storm.png";
import cleanLawnImg from "@/assets/after-clean.jpg";



export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Apex Stump Grinding & Removal" },
      { name: "description", content: "Professional stump grinding, root removal, and yard cleanup services in the GTA." },
    ],
  }),
  component: ServicesPage,
});

const QUOTE_URL = "https://clienthub.getjobber.com/hubs/e26093ba-9938-4ec5-b46f-0e1ed9977087/public/requests/4622022/new";

const SERVICE_ITEMS = [
  {
    id: "stump-grinding",
    icon: Trees,
    title: "Stump Grinding",
    tagline: "Precision Removal",
    desc: "Our industrial-grade grinders pulverize stumps 6-12 inches below grade, turning them into useful mulch. We handle any size, from small garden stumps to massive forest remnants.",
    features: ["Below-grade grinding", "Mulch production", "Minimal site impact", "Any stump size"],
    image: heroImg,
  },
  {
    id: "root-removal",
    icon: Scissors,
    title: "Root Removal",
    tagline: "Landscape Protection",
    desc: "Exposed roots can damage foundations, crack driveways, and create trip hazards. We safely extract surface and lateral roots while preserving your lawn's health.",
    features: ["Surface root extraction", "Foundation safety", "Lawn preservation", "Hazard reduction"],
    image: rootRemovalImg,
  },
  {
    id: "debris-cleanup",
    icon: Sparkles,
    title: "Cleanup, Topsoil Backfilling & Levelling",
    tagline: "Zero-Mess Solution",
    desc: "We don't just leave a pile of chips. Our team provides full haul-away services, backfilling with clean topsoil and leaving your yard ready for immediate replanting.",
    features: ["Chip bagging or haul-away", "Topsoil backfilling", "Site restoration", "Topsoil leveling & grading"],
    image: cleanLawnImg,
  },

];




function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        io.unobserve(el);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ServicesPage() {
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
                <Sparkles size={14} /> Our Expertise
              </span>
              <h1 className="text-5xl sm:text-7xl font-display text-primary uppercase leading-[1.05] max-w-4xl mx-auto">
                Specialized Stump <br /> & Yard Clearance
              </h1>
              <p className="mt-8 text-lg text-foreground/80 max-w-2xl mx-auto">
                Reclaim your outdoor space with our professional-grade removal services. 
                We don't just grind stumps; we provide complete site preparation and 
                landscape restoration for homeowners and contractors alike.
              </p>
            </motion.div>
            



          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: "+", label: "Stumps Removed" },
              { value: 98, suffix: "%", label: "Happy Clients" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 24, suffix: "hr", label: "Response Time" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-4xl sm:text-5xl font-display text-[var(--beige)]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-2">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {SERVICE_ITEMS.map((service, i) => (
              <div key={service.id} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                <Reveal className="flex-1 w-full" delay={100}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[var(--beige)] rounded-3xl -z-10 group-hover:bg-[var(--beige)]/60 transition-colors" />
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-rugged)]">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    {/* Spinning blade decoration */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-4 border-[var(--brown)]/20 border-dashed animate-spin-slow pointer-events-none" />
                  </div>
                </Reveal>

                <Reveal className="flex-1" delay={200}>
                  <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{service.tagline}</span>
                  <h2 className="text-4xl sm:text-5xl text-primary uppercase font-display mt-4 mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-charcoal/80">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={QUOTE_URL} className="btn-primary">Book This Service <ArrowRight size={18} /></a>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute inset-x-0 top-0 h-px sweep-border" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <Reveal className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[var(--beige)] uppercase">Simple & Seamless</span>
              <h2 className="text-4xl sm:text-6xl uppercase font-display mt-4">Our Service Process</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "01", title: "Request Quote", d: "Send photos or address for a free estimate." },
                { n: "02", title: "Expert Arrival", d: "Our crew arrives on time with commercial gear." },
                { n: "03", title: "The Grind", d: "Precision grinding with total site protection." },
                { n: "04", title: "Full Cleanup", d: "Haul-away and backfill — ready for grass." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 150} className="relative group text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--brown)] flex items-center justify-center text-2xl font-display mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {step.n}
                  </div>
                  <h4 className="text-xl font-display uppercase mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.d}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-8 left-20 w-full h-px bg-white/10" />}
                </Reveal>
              ))}
            </div>
          </div>
        </section>



        {/* Final CTA */}
        <section className="py-24 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-5xl sm:text-7xl font-display text-primary uppercase leading-tight">Ready to clear <br /> the way?</h2>
              <p className="mt-8 text-xl text-muted-foreground">
                Get your property back to its best. No job is too large or too small for our expert crew.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <a href={QUOTE_URL} className="btn-primary cta-pulse">Request My Free Quote <ArrowRight size={18} /></a>
                <a href="tel:+14162344298" className="btn-outline"><Phone size={16} /> (416) 234-4298</a>
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
