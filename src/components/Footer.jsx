import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </span>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}