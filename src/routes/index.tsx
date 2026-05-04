import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, ArrowRight, CheckCircle2, Star, MapPin, Trees, Scissors,
  Sparkles, Zap, ShieldCheck, Clock, Facebook, Instagram, Twitter,
} from "lucide-react";
import heroImgDefault from "@/assets/apex stumps.png";
import crewImgDefault from "@/assets/why-us-team.png";
import blogImgDefault from "@/assets/blog-1.jpg";
import logoUrl from "@/assets/logo.png?url";
import { Reveal } from "@/components/site/Reveal";
import { WoodChips } from "@/components/site/WoodChips";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ResultsSection } from "@/components/site/ResultsSection";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";
import { MapSection } from "@/components/site/MapSection";
import { AreasServed } from "@/components/site/AreasServed";
import { useContent } from "@/hooks/use-content";
import { getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stumpworks | Professional Stump Grinding & Removal" },
      { name: "description", content: "Fast, safe, and affordable stump grinding services. Same-day quotes, fully insured local experts. Get your yard back today." },
      { property: "og:title", content: "Stumpworks | Professional Stump Grinding" },
      { property: "og:description", content: "Restore your yard with rugged, modern stump grinding. Same-day service, fully insured." },
      { property: "og:image", content: logoUrl },
      { name: "twitter:image", content: logoUrl },
      { name: "twitter:site", content: "@Stumpworks" },
    ],
  }),
  component: Index,
});

function AnimatedHeadline({ headline }: { headline: string }) {
  return (
    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary uppercase">
      {headline.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-3">
          {word.split("").map((ch, ci) => {
            const idx = headline.split(" ").slice(0, wi).join(" ").length + ci + wi;
            return (
              <span
                key={ci}
                className="inline-block opacity-0"
                style={{
                  animation: `fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards`,
                  animationDelay: `${idx * 0.035}s`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function Hero({ data }: { data: any }) {
  const content = data || {
    tagline: 'Local Stump Specialists',
    headline: 'Professional Stump Grinding That Restores Your Yard',
    subheadline: "Fast, safe, and affordable stump removal services you can trust. Same-day quotes, zero-mess workmanship, and a yard you’ll actually want to walk barefoot on.",
    ctaButtons: [
      { label: 'Get Quote Now', url: 'https://clienthub.getjobber.com/hubs/e26093ba-9938-4ec5-b46f-0e1ed9977087/public/requests/4622022/new', type: 'primary', icon: 'ArrowRight' },
      { label: 'Call Now', url: 'tel:+14162344298', type: 'outline', icon: 'Phone' },
    ],
    stickers: [
      { label: 'Same-Day Service', icon: 'Clock', tilt: -3 },
      { label: 'Fully Insured', icon: 'ShieldCheck', tilt: 2 },
      { label: 'Fast Response', icon: 'Zap', tilt: -2 },
    ],
    heroImageAlt: 'Industrial stump grinder removing a tree stump',
    heroImage: '',
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowRight': return ArrowRight;
      case 'Phone': return Phone;
      case 'Clock': return Clock;
      case 'ShieldCheck': return ShieldCheck;
      case 'Zap': return Zap;
      default: return ArrowRight;
    }
  };

  return (
    <section id="top" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--beige)" }} />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--beige) 90%, transparent) 0%, color-mix(in oklab, var(--primary) 30%, transparent) 100%)",
        }}
      />
      <WoodChips count={22} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-12">
        {/* Left */}
        <div className="relative z-10">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[var(--brown)] uppercase mb-6 opacity-0"
            style={{ animation: "fade-up 0.5s ease forwards", animationDelay: "0.05s" }}
          >
            <Sparkles size={14} /> {content.tagline}
          </span>
          <AnimatedHeadline headline={content.headline} />
          <p
            className="mt-6 text-lg text-foreground/80 max-w-xl opacity-0"
            style={{ animation: "fade-up 0.7s ease forwards", animationDelay: "0.6s" }}
          >
            {content.subheadline}
          </p>
          <div
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 opacity-0"
            style={{ animation: "fade-up 0.7s ease forwards", animationDelay: "0.85s" }}
          >
            {content.ctaButtons.map((btn: any, i: number) => {
              const Icon = getIcon(btn.icon);
              return (
                <a key={i} href={btn.url} rel={btn.url.startsWith('http') ? "noopener noreferrer" : undefined} target={btn.url.startsWith('http') ? "_blank" : undefined} className={`btn-${btn.type} justify-center`}>
                  {btn.type === 'outline' ? <><Icon size={16} /> {btn.label}</> : <>{btn.label} <Icon size={18} /></>}
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {content.stickers.map((s: any, i: number) => {
              const Icon = getIcon(s.icon);
              return (
                <span
                  key={s.label}
                  className="sticker"
                  style={
                    {
                      "--tilt": `${s.tilt}deg`,
                      animationDelay: `${1.0 + i * 0.15}s`,
                    } as React.CSSProperties
                  }
                >
                  <Icon size={14} className="text-[var(--brown)]" /> {s.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div
            className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-rugged)] aspect-square opacity-0"
            style={{ animation: "fade-up 1s ease forwards", animationDelay: "0.3s" }}
          >
            <img
              src={getImageUrl(content.heroImage) || heroImgDefault}
              alt={content.heroImageAlt}
              className="w-full h-full object-cover"
              width={1280}
              height={1280}
            />
            {/* spinning blade overlay */}
            <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full border-4 border-[var(--beige)]/40 border-dashed" style={{ animation: "spin-slow 8s linear infinite" }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ data }: { data: any }) {
  const content = data || {
    tagline: 'What We Do',
    headline: 'Quick service highlights',
    items: [
      { icon: 'Trees', title: 'Stump Grinding', desc: 'Industrial-grade grinders pulverize stumps below grade.' },
      { icon: 'Scissors', title: 'Root Removal', desc: 'Extract surface and lateral roots that ruin lawns.' },
      { icon: 'Sparkles', title: 'Cleanup, Topsoil Backfilling & Levelling', desc: 'Chip bagging or haul-away, soil backfill, and expert grading.' },
    ],
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees': return Trees;
      case 'Scissors': return Scissors;
      case 'Sparkles': return Sparkles;
      default: return Trees;
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{content.tagline}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">{content.headline}</h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-6">
          {content.items.map((it: any, i: number) => {
            const Icon = getIcon(it.icon);
            return (
              <a href="/services" key={it.title} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <Reveal delay={i * 150} className="hover-lift group rounded-2xl bg-card border-2 border-[var(--brown)]/15 p-7 shadow-[var(--shadow-card)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal uppercase tracking-wide">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </Reveal>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs({ data }: { data: any }) {
  const content = data || {
    tagline: 'Why Choose Us',
    headline: 'Built rugged.',
    headlineLine2: 'Run honest.',
    subtitle: "We're a local crew obsessed with leaving your yard better than we found it.",
    reasons: [
      'Professional commercial-grade equipment',
      'Affordable, transparent pricing',
      'Fully insured & bonded crew',
      'Clean workmanship — zero mess left',
      'Fast completion, often same day',
    ],
    imageAlt: 'Professional stump grinding crew',
  };

  const imgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = imgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(mid * -0.08);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{content.tagline}</span>
            <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">{content.headline} <br />{content.headlineLine2}</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              {content.subtitle}
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {content.reasons.map((r: string, i: number) => (
              <Reveal key={r} as="li" delay={200 + i * 150} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={22} />
                <span className="text-base text-charcoal font-medium">{r}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div ref={imgRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-rugged)]">
          <img
            src={crewImgDefault}
            alt={content.imageAlt}
            className="absolute inset-0 w-full h-[115%] object-cover"
            style={{ transform: `translateY(${offset}px) scale(1.05)`, transition: "transform 0.1s linear" }}
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Process({ data }: { data: any }) {
  const content = data || {
    tagline: 'How It Works',
    headline: 'Our process',
    steps: [
      { n: '01', title: 'Request Quote', desc: 'Send pictures or address.' },
      { n: '02', title: 'Site Inspection', desc: 'Free on-site walkthrough.' },
      { n: '03', title: 'Grinding', desc: 'Below-grade pulverization.' },
      { n: '04', title: 'Cleanup', desc: 'Full debris haul-away.' },
      { n: '05', title: 'Final Walk', desc: 'You sign off, we leave clean.' },
    ],
  };

  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--beige)] uppercase">{content.tagline}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl uppercase">{content.headline}</h2>
        </Reveal>
        <div ref={ref} className="relative">
          {/* line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--beige)] rounded-full"
              style={{ width: active ? "100%" : "0%", transition: "width 1.6s cubic-bezier(0.65,0,0.35,1)" }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {content.steps.map((s: any, i: number) => (
              <div
                key={s.n}
                className="relative text-center opacity-0"
                style={{
                  animation: active ? `pop-in 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards` : undefined,
                  animationDelay: `${0.3 + i * 0.18}s`,
                }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[var(--brown)] text-white flex items-center justify-center font-display text-xl shadow-lg relative z-10 transition-transform hover:rotate-6">
                  {s.n}
                </div>
                <h4 className="mt-4 font-display text-lg uppercase tracking-wide">{s.title}</h4>
                <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ data }: { data: any }) {
  const content = data || {
    tagline: 'Word On The Street',
    headline: 'What customers say',
    testimonials: [
      { name: 'Sarah M.', text: "They ground out a massive oak stump in under an hour. Zero damage to my lawn. Wild.", rating: 5 },
      { name: 'Derek T.', text: 'Same-day quote, next-day done. Crew was professional and the cleanup was spotless.', rating: 5 },
      { name: 'Maria L.', text: "Honestly the best contractor experience I've had. Fair price, no surprises.", rating: 5 },
      { name: 'Jamal R.', text: 'Three stumps gone, grass already growing back. Would absolutely call again.', rating: 5 },
    ],
  };

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % content.testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused, content.testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{content.tagline}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">{content.headline}</h2>
        </Reveal>
        <div
          className="grid md:grid-cols-3 gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[0, 1, 2].map((off) => {
            if (content.testimonials.length === 0) return null;
            const t = content.testimonials[(idx + off) % content.testimonials.length];
            if (!t) return null;
            return (
              <Reveal key={`${idx}-${off}`} delay={off * 120} className="hover-lift">
                <div className="bubble h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-[var(--brown)] text-[var(--brown)]" />
                    ))}
                  </div>
                  <p className="text-charcoal leading-relaxed flex-grow">“{t.text}”</p>
                  <div className="mt-4 font-bold text-primary">— {t.name}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Blog({ data }: { data: any }) {
  const content = data || {
    tagline: 'From The Field',
    headline: 'Insights & guides',
    posts: [
      { title: "How long does stump grinding take?", excerpt: "What to expect from a typical residential job, start to finish." },
      { title: "Stump removal vs. grinding", excerpt: "Which method is right for your yard and budget." },
      { title: "After grinding: what comes next?", excerpt: "Tips for replanting grass and reusing wood mulch." },
    ]
  };

  const posts = content.posts;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{content.tagline}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">{content.headline}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 150} className="group hover-lift rounded-2xl overflow-hidden bg-card border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={getImageUrl(p.image) || blogImgDefault}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="font-display text-xl text-primary uppercase leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--brown)]">
                  Read more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ data }: { data: any }) {
  const content = data || {
    headline: 'Ready to remove',
    headlineLine2: 'that stump?',
    subtitle: 'Get fast service from local experts. Free quotes, no pressure.',
    ctaButtons: [
      { label: 'Get Quote Now', url: 'https://clienthub.getjobber.com/hubs/e26093ba-9938-4ec5-b46f-0e1ed9977087/public/requests/4622022/new', type: 'primary', icon: 'ArrowRight' },
      { label: '(416) 234-4298', url: 'tel:+14162344298', type: 'outline', icon: 'Phone' },
    ],
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowRight': return ArrowRight;
      case 'Phone': return Phone;
      default: return ArrowRight;
    }
  };

  return (
    <section id="quote" className="relative py-28 bg-charcoal text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(230,211,177,0.6) 0 1px, transparent 1px 8px), repeating-linear-gradient(0deg, rgba(230,211,177,0.3) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px sweep-border" />
      <div className="absolute inset-x-0 bottom-0 h-px sweep-border" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[1.05]">
            {content.headline} <br /> {content.headlineLine2}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-5 text-white/70 text-lg">{content.subtitle}</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {content.ctaButtons.map((btn: any, i: number) => {
              const Icon = getIcon(btn.icon);
              return (
                <a 
                  key={i} 
                  href={btn.url} 
                  rel={btn.url.startsWith('http') ? "noopener noreferrer" : undefined} 
                  target={btn.url.startsWith('http') ? "_blank" : undefined} 
                  className={btn.type === 'primary' ? "btn-primary cta-pulse" : "btn-outline"}
                  style={btn.type === 'outline' ? { color: "var(--beige)", borderColor: "var(--beige)" } : {}}
                >
                  {btn.type === 'outline' ? <><Icon size={16} /> {btn.label}</> : <>{btn.label} <Icon size={18} /></>}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  const { content } = useContent("home");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero data={content?.hero} />
        <Services data={content?.services} />
        <ResultsSection data={content?.results} />
        <WhyUs data={content?.whyUs} />
        <Testimonials data={content?.testimonials} />
        <MapSection data={content?.map} />
        <Blog data={content?.blog} />
        <FinalCTA data={content?.cta} />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
