export default function SectionHeading({ index, title, subtitle }) {
    return (
      <div className="section-heading">
        <span className="section-eyebrow">{index}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    );
  }