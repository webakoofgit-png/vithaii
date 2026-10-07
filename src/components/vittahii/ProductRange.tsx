import { useState } from "react";
import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { SectionLabel } from "./shared";

const categories = ["Household", "Retail", "HoReCa", "Bulk"];

export function ProductRange() {
  const [category, setCategory] = useState("Household");
  return (
    <section className="range-section paper-section" id="range">
      <div className="range-heading"><div><SectionLabel>Product range</SectionLabel><h2>Pure goodness.<br />For every<br />requirement.</h2></div><div className="category-picker" role="group" aria-label="Choose product category">{categories.map((item) => <button type="button" aria-pressed={category === item} className={`category-button${category === item ? " category-active" : ""}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
      <figure className="range-visual"><ReferenceImage asset={images.range} alt={`Vittahii Pure Ghee range: 200 mL, 500 mL, 1 L, 5 kg and 10 kg packs for ${category.toLowerCase()} use`} /><figcaption className="sr-only">Available pack sizes: 200 mL, 500 mL, 1 L, 5 kg and 10 kg.</figcaption></figure>
    </section>
  );
}
