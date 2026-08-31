import { siteConfig } from '../data';
import './Side.css';

const Side = ({ orientation }: { orientation: 'left' | 'right' }) => {
  const sideClass = `side side-${orientation}`;

  if (orientation === 'right') {
    return (
      <div className={sideClass}>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="side-email"
        >
          {siteConfig.contact.email}
        </a>
        <div className="side-line" />
      </div>
    );
  }

  return (
    <div className={sideClass}>
      <ul className="side-social">
        {siteConfig.social.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="side-line" />
    </div>
  );
};

export default Side;
