import { projects } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="03 — Projects"
        title="Things I've built"
        subtitle="Academic and personal projects spanning AI, full-stack, security and community platforms."
      />

      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <article
              className="project"
              style={{ '--p-accent': p.accent }}
            >
              <div className="project__bar" />

              <div className="project__body">
                <div className="project__top">
                  <span className="project__id">{p.id}</span>
                  <div className="project__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="project__title">{p.title}</h3>
                <p className="project__summary">{p.summary}</p>

                <p className="project__impact">
                  <span>↳</span> {p.impact}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}