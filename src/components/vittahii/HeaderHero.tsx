import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLink, BrandMark } from "./shared";

const links = [
  ["Process", "#process"],
  ["Quality", "#quality"],
  ["Founder", "#founder"],
  ["Contact", "#contact"],
];

export function HeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero" id="top" aria-label="Vittahii pure ghee">
      <img className="hero-photo" src="/images/drive/bde6f4dd-bca4-49cf-b0c7-7809ef7e6e8b.png" alt="Golden ghee poured from a brass ladle into a bowl" width={1773} height={887} fetchPriority="high" />
      <header className="site-header">
        <BrandMark light />
        <nav id="main-navigation" className={`main-nav${menuOpen ? " main-nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <ArrowLink href="#contact" tone="gold" className="header-enquire">Enquire now</ArrowLink>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <div className="hero-copy">
        <p className="hero-eyebrow">Dairy heritage · Since 1962</p>
        <h1><span className="hero-brand-name">Vittahii</span><span>Rooted In Pure Richness</span></h1>
        <p className="hero-deck">Pure Ghee. Crafted Through Generations.</p>
        <p className="hero-description">Built on more than six decades of dairy experience, Vittahii brings traditional wisdom together with modern manufacturing and uncompromising quality.</p>
        <div className="hero-actions">
          <ArrowLink href="#ghee" tone="gold">Explore our ghee</ArrowLink>
          <ArrowLink href="#legacy" tone="light">Our legacy</ArrowLink>
        </div>
      </div>
      <a className="hero-scroll" href="#legacy"><span aria-hidden="true" />Scroll to discover</a>
      <div className="hero-date"><strong>1962</strong><span>The beginning of our dairy journey</span></div>
    </section>
  );
}
