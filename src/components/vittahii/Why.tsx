import { BadgeCheck, Gauge, PackageCheck, Sparkles } from "lucide-react";
import { SectionLabel } from "./shared";

const pillars = [
  { number: "01", title: "Quality butter", text: "Carefully selected unsalted butter.", icon: Sparkles },
  { number: "02", title: "Tradition + precision", text: "Dairy understanding supported by controlled modern production.", icon: Gauge },
  { number: "03", title: "Quality assurance", text: "Defined parameters and careful checks.", icon: BadgeCheck },
  { number: "04", title: "Hygienic packing", text: "Suitable food-grade packaging under controlled conditions.", icon: PackageCheck },
];

export function Why() {
  return (
    <section className="why-section paper-section" id="why">
      <div className="why-heading"><div><SectionLabel>Why Vittahii</SectionLabel><h2>The right ingredient.<br />The right process.<br />The right care.</h2></div><p className="why-quote">Purity is not an accident. It is the result of thoughtful decisions at every stage.</p></div>
      <div className="pillar-list">
        {pillars.map(({ number, title, text, icon: Icon }) => (
          <article className="pillar" key={number}><div className="pillar-top"><span className="pillar-number">{number}</span><Icon aria-hidden="true" className="pillar-icon" /></div><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}
