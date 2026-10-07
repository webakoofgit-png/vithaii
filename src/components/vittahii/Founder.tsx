import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { ArrowLink, SectionLabel } from "./shared";

export function Founder() {
  return (
    <section className="founder-section paper-section" id="founder">
      <figure className="founder-visual"><ReferenceImage asset={images.founder} alt="Founder portrait supplied in the Vittahii design reference" /></figure>
      <div className="founder-copy"><SectionLabel>Fourth generation</SectionLabel><p className="founder-name">Nishant Kotkar</p><h2>Carrying the family legacy into its next chapter.</h2><p>Nishant Kotkar comes from a fourth-generation dairy business family whose journey began in 1962 in Chalisgaon, Maharashtra. With a background in business management and experience rooted in the family dairy business, his vision is to establish Vittahii as a trusted premium ghee brand in India and gradually take it to international markets.</p><ArrowLink href="#contact" tone="maroon" className="text-link">Meet the founder</ArrowLink></div>
    </section>
  );
}
