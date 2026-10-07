import { ArrowLink, SectionLabel } from "./shared";

const steps = [
  ["01", "Select", "Quality unsalted butter"],
  ["02", "Heat", "Controlled heating"],
  ["03", "Clarify", "Milk solids separate"],
  ["04", "Filter", "Clean and consistent"],
  ["05", "Check", "Quality controls"],
  ["06", "Pack", "Hygienically sealed"],
];

export function Process() {
  return (
    <section className="process-section" id="process">
      <img src="/images/drive/aef827aa-7736-41cd-946c-25030eca35b4.png" alt="Golden ghee being prepared in a brass vat, with steam rising around a stirring ladle" width={1919} height={820} loading="lazy" />
      <div className="process-content"><div className="process-heading"><div><SectionLabel>Our process</SectionLabel><h2>From Butter to Golden<br />Clarity.</h2></div><p>A careful blend of dairy craftsmanship and controlled production helps deliver purity, consistency, aroma and character in every batch.</p></div>
        <ol className="process-steps">{steps.map(([number, title, detail]) => <li key={number}><span>{number}</span><strong>{title}</strong><p>{detail}</p></li>)}</ol>
        <ArrowLink href="#quality" tone="light">Explore our process</ArrowLink>
      </div>
    </section>
  );
}
