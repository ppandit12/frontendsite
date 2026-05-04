import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ResultsSection } from "@/components/site/ResultsSection";
import { ImageGrid } from "@/components/site/ImageGrid";
import { Reveal } from "@/components/site/Reveal";
import { useContent } from "@/hooks/use-content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Stumpworks" },
      { name: "description", content: "See our before and after transformations. Real results from professional stump grinding." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { content } = useContent("gallery");

  const headerContent = content?.header || {
    tagline: 'Our Portfolio',
    headline: 'Work Gallery',
    subtitle: 'Browse through our recent projects and see the difference professional grinding makes.',
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-12 px-6 bg-beige/30">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center max-w-3xl mx-auto mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">{headerContent.tagline}</span>
              <h1 className="mt-4 text-5xl sm:text-6xl font-display text-primary uppercase leading-tight">
                {headerContent.headline}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {headerContent.subtitle}
              </p>
            </Reveal>
          </div>
        </section>

        <ResultsSection data={content?.results} />
        <ImageGrid data={content?.images} />
      </main>
      <Footer />
    </div>
  );
}
