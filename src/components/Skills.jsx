import { skillGroups } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        index="02 — Skills"
        title="Technical toolkit"
        subtitle="The languages, systems and methods I build with."
      />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <article className="skillcard">
              <div className="skillcard__head">
                <span className="skillcard__icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="chips">
                {group.skills.map((s) => (
                  <span key={s} className="chip chip--sm">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}