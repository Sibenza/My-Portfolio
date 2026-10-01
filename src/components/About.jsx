import { about, profile } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        index="01 — About"
        title="Turning information into impact"
        subtitle="Who I am, and how I think about systems."
      />

      <div className="about__grid">
        <Reveal className="about__main">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__para">
              {p}
            </p>
          ))}

          <div className="about__meta">
            <div className="about__meta-item">
              <span className="about__meta-label">Based in</span>
              <span>{profile.location}</span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Focus</span>
              <span>Full-Stack · Data · Security</span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Status</span>
              <span className="about__available">Available for opportunities</span>
            </div>
          </div>

          <div className="about__langs">
            <h3 className="about__sub">Languages</h3>
            <div className="chips">
              {about.languages.map((l) => (
                <span key={l.name} className="chip">
                  {l.name}
                  <em>{l.level}</em>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="about__cards">
          {about.softSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="softcard">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}