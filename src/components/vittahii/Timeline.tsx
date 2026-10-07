import { SectionLabel } from "./shared";

const milestones = [
  ["1962", "Family dairy journey begins"],
  ["1980s–2000s", "Experience grows across generations"],
  ["Fourth Generation", "New vision for a modern ghee brand"],
  ["Today", "Vittahii takes the legacy forward"],
  ["Future", "India and international markets"],
];

export function Timeline() {
  return (
    <section className="timeline-section" aria-label="A legacy in motion">
      <div className="timeline-heading"><SectionLabel>A legacy in motion</SectionLabel><span>Progress reveals on scroll <span aria-hidden="true">→</span></span></div>
      <ol className="timeline-list">
        {milestones.map(([year, text]) => (
          <li key={year}><span className="timeline-dot" aria-hidden="true" /><strong>{year}</strong><p>{text}</p></li>
        ))}
      </ol>
    </section>
  );
}