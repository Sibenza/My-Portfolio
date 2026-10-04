import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/portfolioData';
import Reveal from '../components/Reveal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — Sibenza Munkombwe`;
    return () => {
      document.title = 'Sibenza Munkombwe — Information Systems Portfolio';
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="detail" style={{ '--p-accent': project.accent }}>
      <div className="detail__glow" />

      <div className="detail__inner">
        <Reveal>
          <Link to="/#projects" className="detail__back">
            ← Back to projects
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="detail__head">
            <span className="detail__id">{project.id}</span>
            <div className="detail__tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <h1 className="detail__title">{project.title}</h1>
          <p className="detail__meta">
            <span>{project.role}</span>
            <span className="detail__dot">·</span>
            <span>{project.year}</span>
          </p>
        </Reveal>

        <Reveal delay={140}>
          <section className="detail__section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
        </Reveal>

        <Reveal delay={200}>
          <section className="detail__section">
            <h2>Key Features</h2>
            <ul className="detail__features">
              {project.features.map((f) => (
                <li key={f}>
                  <span className="detail__bullet">▸</span> {f}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={260}>
          <section className="detail__section">
            <h2>Tech Stack</h2>
            <div className="chips">
              {project.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={320}>
          <section className="detail__section">
            <h2>What I Learned</h2>
            <p className="detail__learning">{project.learnings}</p>
          </section>
        </Reveal>

        {(project.github || project.demo) && (
          <Reveal delay={380}>
            <div className="detail__links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  View Code ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </Reveal>
        )}

        <Reveal delay={440}>
          <Link to={`/projects/${next.slug}`} className="detail__next">
            <span className="detail__next-label">Next Project</span>
            <span className="detail__next-title">
              {next.title} <span>→</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}