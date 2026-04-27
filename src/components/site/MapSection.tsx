import { MapPin, MousePointer2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import mapVisual from "@/assets/service-area-map.png";

const markers = [
  { x: 35, y: 45, label: "High Park" },
  { x: 45, y: 55, label: "Mimico" },
  { x: 65, y: 65, label: "Port Credit" },
  { x: 30, y: 50, label: "Islington" },
  { x: 40, y: 40, label: "Swansea" },
];


const neighborhoods = markers.map(m => m.label);

export function MapSection() {
  const [showInteractive, setShowInteractive] = useState(false);

  return (
    <section id="service-area" className="py-24" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Coverage</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">Service Area Boundary</h2>
          <p className="mt-4 text-muted-foreground">
            We primarily serve the historic canopies of Central & South Etobicoke, Mississauga, and High Park, 
            maintaining prompt and professional service within our established boundaries.
          </p>
        </Reveal>
        <Reveal>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[var(--brown)]/20 shadow-[var(--shadow-card)] bg-muted group">
            {!showInteractive ? (
              <div className="relative w-full h-full">
                <img 
                  src={mapVisual} 
                  alt="Apex Stump Grinding Service Area Map" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-[110%] brightness-[105%]"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Visual Overlay for Boundary Info */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                   <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-primary/20 max-w-xs transform -translate-y-12 pointer-events-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Service Boundaries</p>
                    </div>
                    <ul className="space-y-3 text-sm text-charcoal/90">
                      <li className="flex gap-2">
                        <span className="font-bold text-brown">East:</span> 
                        <span>Lansdowne / Jameson</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-brown">North:</span> 
                        <span>Rail Lines & Hwy 401</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-brown">West:</span> 
                        <span>Winston Churchill Blvd</span>
                      </li>
                    </ul>
                    <button 
                      onClick={() => setShowInteractive(true)}
                      className="mt-6 w-full btn-primary py-2.5 px-4 text-xs flex items-center justify-center gap-2 bg-charcoal hover:bg-primary shadow-lg transition-all"
                    >
                      <MousePointer2 size={14} /> Interactive Map
                    </button>
                  </div>
                </div>
              </div>
            ) : (

              <div className="relative w-full h-full">
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
                <button 
                  onClick={() => setShowInteractive(false)}
                  className="absolute top-6 right-6 btn-primary py-2 px-4 text-xs bg-white text-charcoal hover:bg-beige border border-border shadow-xl"
                >
                  Back to Visual Map
                </button>
              </div>
            )}
            
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
          <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto italic">
            Don't see your neighborhood? We primarily focus on the historic canopies of Central & South Etobicoke, 
            Mississauga, and High Park to ensure prompt service. For large-scale projects north of the 401, 
            please contact us for a custom quote.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
