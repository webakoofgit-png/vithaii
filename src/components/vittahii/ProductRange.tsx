import { useState } from "react";
import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { SectionLabel } from "./shared";

const categories = ["Household", "Retail", "HoReCa", "Bulk"];
const categoryImages = {
  Household: images.ghee,
  Retail: images.range,
  HoReCa: images.quality,
  Bulk: images.process,
} as const;

export function ProductRange() {
  const [category, setCategory] = useState("Household");
  return (
    <section className="range-section paper-section" id="range">
      <div className="range-heading"><div><SectionLabel>Product range</SectionLabel><h2>Pure goodness.<br />For every requirement.</h2></div><div className="category-picker" role="group" aria-label="Choose product category">{categories.map((item) => <button type="button" aria-pressed={category === item} className={`category-button${category === item ? " category-active" : ""}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
      <figure className="range-visual"><ReferenceImage key={category} className="range-image" asset={categoryImages[category]} alt={`Vittahii Pure Ghee products for ${category.toLowerCase()} use`} /><figcaption className="sr-only">Vittahii Pure Ghee products for household, retail, HoReCa and bulk use.</figcaption></figure>
    </section>
  );
}
