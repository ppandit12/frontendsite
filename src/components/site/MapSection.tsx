import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const markers = [
  { x: 25, y: 40, label: "Riverside" },
  { x: 50, y: 30, label: "Oakwood" },
  { x: 70, y: 55, label: "Pinehurst" },
  { x: 40, y: 65, label: "Greendale" },
  { x: 65, y: 25, label: "Maple Hills" },
];

const neighborhoods = markers.map(m => m.label);

export function MapSection() {
  return (
    <section id="service-area" className="py-24" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Coverage</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">Serving your area</h2>
          <p className="mt-4 text-muted-foreground">
            From the heart of Toronto to Burlington and everything in between, we bring professional stump grinding to your doorstep.
          </p>
        </Reveal>
        <Reveal>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[var(--brown)]/20 shadow-[var(--shadow-card)] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461530.14691459524!2d-79.914920455823!3d43.65598686616442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4a17d79b91%3A0x3023e1623668393e!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1713876543210!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Stump Grinding Service Area"
              className="grayscale-[20%] contrast-[110%] brightness-[105%]"
            />
            
            {/* Custom Overlay Markers for specific service hubs */}
            <div className="absolute inset-0 pointer-events-none">
              {markers.map((m, i) => (
                <div
                  key={m.label}
                  className="absolute"
                  style={{
                    left: `${m.x}%`,
                    top: `${m.y}%`,
                  }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full bg-[var(--brown)] text-white flex items-center justify-center shadow-lg border-2 border-white"
                      style={{ 
                        animation: `marker-pulse 2.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div className="mt-1 px-2 py-0.5 bg-white/90 rounded shadow-sm text-[10px] font-bold text-primary uppercase whitespace-nowrap border border-border">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay for better integration */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-3xl" />
          </div>
        </Reveal>
        
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[ ...neighborhoods].map((loc) => (
              <div key={loc} className="py-2.5 px-4 rounded-xl bg-white/50 border border-[var(--brown)]/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm hover:bg-white transition-colors">
                {loc}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
