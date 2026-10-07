import { BadgeCheck } from "lucide-react";
import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { SectionLabel } from "./shared";

const standards = [
  ["FSSAI", "Licence details to be updated"],
  ["ISO 9001:2015", "Where applicable"],
  ["ISO 22000:2018", "Where applicable"],
  ["HACCP", "Where applicable"],
  ["GMP", "Where applicable"],
];

export function Quality() {
  return (
    <section className="quality-section" id="quality">
      <figure className="quality-visual"><ReferenceImage asset={images.quality} alt="Laboratory testing of golden ghee against defined quality parameters" /></figure>
      <div className="quality-copy"><SectionLabel>Quality &amp; purity</SectionLabel><h2>Quality should<br />never be an<br />afterthought.</h2><p>Product quality is evaluated through defined testing and quality parameters covering appearance, aroma, flavour, consistency and safety.</p>
        <dl className="standard-list">{standards.map(([name, text]) => <div key={name}><dt><BadgeCheck aria-hidden="true" />{name}</dt><dd>{text}</dd></div>)}</dl>
      </div>
    </section>
  );
}
