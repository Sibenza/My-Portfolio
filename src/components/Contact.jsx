import { profile } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        index="05 — Contact"
        title="Let's build something"
        subtitle="I'm actively looking for internships and graduate opportunities in software engineering, data and IT."
      />

      <Reveal>
        <div className="contact">
          <div className="contact__glow" />

          <div className="contact__inner">
            <h3 className="contact__headline">
              Got a problem worth solving?
            </h3>
            <p className="contact__text">
              Whether it&rsquo;s a full-stack build, a data pipeline, or a system that needs
              rethinking — I&rsquo;d love to hear about it.
            </p>

            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
              {profile.email}
            </a>

            <div className="contact__links">
  {profile.socials.map((s) => (
    <a
      key={s.label}
      href={s.url}
      target="_blank"
      rel="noreferrer"
      className="contact__link"
    >
      {s.label} <span>↗</span>
    </a>
  ))}

 <a href={`tel:${profile.phone}`} className="contact__link">
  📞 {profile.phone}
</a>

  <span className="contact__link contact__link--static">
    {profile.location}
  </span>
</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}