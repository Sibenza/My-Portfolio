import { education } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading
        index="04 — Education"
        title="Academic background"
        subtitle="Where the foundations were laid."
      />

      <div className="timeline">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <article className="tl-item">
              <div className="tl-marker" />
              <span className="tl-period">{item.period}</span>
              <h3 className="tl-title">{item.title}</h3>
              <p className="tl-org">{item.org}</p>
              {item.detail && <p className="tl-detail">{item.detail}</p>}

              {item.coursework.length > 0 && (
                <div className="tl-coursework">
                  <h4>Relevant Coursework</h4>
                  <div className="chips">
                    {item.coursework.map((c) => (
                      <span key={c} className="chip chip--sm">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}