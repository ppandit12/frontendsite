import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useContent } from "@/hooks/use-content";
import { useEffect, useState } from "react";
import { fetchContent } from "@/lib/api";

import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.png";
import img4 from "@/assets/gallery-4.png";
import img5 from "@/assets/gallery-5.png";
import img6 from "@/assets/gallery-6.png";
import img7 from "@/assets/gallery-7.png";
import img8 from "@/assets/gallery-8.png";

const defaultImages = [
  { src: img1, alt: "Professional stump grinder machine in action", title: "Precision Grinding" },
  { src: img2, alt: "Large tree stump before removal", title: "Large Stump Removal" },
  { src: img3, alt: "Clean lawn after stump removal", title: "Perfect Finish" },
  { src: img4, alt: "Fresh wood chips after grinding", title: "Mulch Production" },
  { src: img5, alt: "Professional arborist team working", title: "Expert Team" },
  { src: img6, alt: "Stump grinder in narrow backyard", title: "Tight Space Access" },
  { src: img7, alt: "Before and after stump removal comparison", title: "Transformations" },
  { src: img8, alt: "Happy homeowner with clean yard", title: "Satisfied Clients" },
];

export function ImageGrid({ data }: { data: any }) {
  const content = data || {
    sectionTagline: 'Our Recent Work',
    sectionTitle: 'Project Showcase',
    sectionSubtitle: 'Take a look at some of our recent stump grinding projects across the GTA. We pride ourselves on leaving every yard cleaner than we found it.',
    images: defaultImages.map(img => ({ alt: img.alt, title: img.title, url: "" })),
  };

  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    // Ideally we would fetch media from our backend instead of just the content structure
    // Since we don't have a specific useMedia hook yet, we fall back to defaults
    // For a real app, you would join the CMS content with the Media library or rely on uploaded URLs in the content.
    // Here we'll map the content titles to default images if URLs aren't provided.
  }, []);

  const images = content.images.map((img: any, i: number) => ({
    ...img,
    src: img.url || defaultImages[i % defaultImages.length].src,
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{content.sectionTagline}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display text-primary uppercase">
            {content.sectionTitle}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image: any, index: number) => (
            <Reveal key={index} delay={index * 100}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-muted"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{image.alt}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
