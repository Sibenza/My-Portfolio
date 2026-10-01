import { useEffect, useState } from 'react';
import { profile } from '../data/portfolioData';

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    let speed = deleting ? 35 : 75;
    if (!deleting && text === current) speed = 1500;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) return setDeleting(true);
        setText(current.slice(0, text.length + 1));
      } else {
        if (text === '') {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % profile.roles.length);
          return;
        }
        setText(current.slice(0, text.length - 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />

      <div className="hero__inner">
        <span className="hero__badge">
          <span className="hero__dot" />
          Open to internships &amp; graduate roles
        </span>

        <h1 className="hero__title">
          Hi, I&rsquo;m <span className="grad-text">{profile.name.split(' ')[0]}</span>.
          <br />
          <span className="hero__typed">
            {text}
            <span className="hero__caret" />
          </span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get In Touch
          </a>
        </div>

        <div className="hero__stats">
          {profile.stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}