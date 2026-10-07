import { createFileRoute } from "@tanstack/react-router";
import { HeaderHero } from "@/components/vittahii/HeaderHero";
import { Legacy } from "@/components/vittahii/Legacy";
import { Timeline } from "@/components/vittahii/Timeline";
import { Ghee } from "@/components/vittahii/Ghee";
import { Why } from "@/components/vittahii/Why";
import { Process } from "@/components/vittahii/Process";
import { Quality } from "@/components/vittahii/Quality";
import { BrandStory } from "@/components/vittahii/BrandStory";
import { Founder } from "@/components/vittahii/Founder";
import { ProductRange } from "@/components/vittahii/ProductRange";
import { Contact } from "@/components/vittahii/Contact";
import { Footer } from "@/components/vittahii/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vittahii — Rooted in Pure Richness" },
      { name: "description", content: "Pure ghee crafted through generations. Discover the dairy heritage and careful process behind Vittahii, rooted in Chalisgaon since 1962." },
      { property: "og:title", content: "Vittahii — Rooted in Pure Richness" },
      { property: "og:description", content: "Pure ghee crafted through generations. Discover the dairy heritage and careful process behind Vittahii." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="vittahii-page">
      <HeaderHero />
      <Legacy />
      <Timeline />
      <Ghee />
      <Why />
      <Process />
      <Quality />
      <BrandStory />
      <Founder />
      <ProductRange />
      <Contact />
      <Footer />
    </main>
  );
}
