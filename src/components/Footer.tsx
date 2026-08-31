import { siteConfig } from '../data';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-name">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {siteConfig.name}
        </a>
      </div>
      <a
          href="https://v4.brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className='footer-inspiration'
        >
          Design Inspiration from bchiang7
        </a>
      <div className="footer-credit">
        <span>© {year} Built with React &amp; Vite. Deployed on Vercel</span>
      </div>
    </footer>
  );
};

export default Footer;
