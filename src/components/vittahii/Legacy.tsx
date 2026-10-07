import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";
import { SectionLabel } from "./shared";

export function Legacy() {
  return (
    <section className="legacy-section paper-section" id="legacy">
      <div className="legacy-copy">
        <SectionLabel>Our legacy</SectionLabel>
        <h2>Four<br />generations.<br />One enduring<br />relationship<br />with dairy.</h2>
        <p>Our family’s dairy journey began in Chalisgaon, Maharashtra in 1962. Built on trust, hard work and generations of dairy experience, that legacy now moves forward through Vittahii.</p>
        <blockquote>“Experience measured not only in years,<br />but in care.”</blockquote>
      </div>
      <figure className="legacy-photo-main">
        <ReferenceImage asset={images.archive} alt="Archival family photograph outside the dairy in Maharashtra" />
      </figure>
      <figure className="legacy-photo-detail">
        <ReferenceImage asset={images.archiveDetail} alt="Milk being collected at a traditional village dairy" />
        <figcaption>Chalisgaon, Maharashtra<br />Family dairy archive</figcaption>
      </figure>
      <aside className="legacy-year"><strong>1962</strong><span>Where our dairy<br />journey began.</span></aside>
    </section>
  );
}
