import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import beforeImg from "@/assets/before-stump.jpg";
import afterImg from "@/assets/after-clean.jpg";

export function ResultsSection() {
  return (
    <section id="results" className="py-24" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Real Results</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">Drag to see the transformation</h2>
        </Reveal>
        <Reveal delay={150}>
          <BeforeAfter before={beforeImg} after={afterImg} />
        </Reveal>

        <Reveal delay={350} className="text-center mt-6">
          <p className="text-charcoal/70 italic">
            See the transformation — from problem stump to clean yard.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
