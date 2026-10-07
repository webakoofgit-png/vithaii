import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { ArrowLink, SectionLabel } from "./shared";

export function Ghee() {
  return (
    <section className="ghee-section" id="ghee">
      <figure className="ghee-visual"><ReferenceImage asset={images.ghee} alt="Three branded Vittahii Pure Ghee jars on stone plinths. For the modern Indian table." /></figure>
      <div className="ghee-copy">
        <SectionLabel>Our ghee</SectionLabel>
        <h2>Made with care.<br />Remembered for<br />its character.</h2>
        <p>Crafted from carefully selected unsalted butter, Vittahii Pure Ghee is made to deliver rich aroma, authentic taste and a smooth, consistent texture.</p>
        <ul className="ghee-types"><li>Cow Ghee</li><li>Buffalo Ghee</li></ul>
        <ul className="size-list" aria-label="Available sizes"><li>200 mL</li><li>500 mL</li><li>1 L</li><li>5 kg</li><li>10 kg</li></ul>
        <ArrowLink href="#contact">Enquire about our ghee</ArrowLink>
      </div>
    </section>
  );
}
