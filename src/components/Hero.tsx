import { siteConfig } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1 className="overline">{siteConfig.hero.overline}</h1>
      <h2 className="big-heading name">{siteConfig.hero.name}</h2>
      <h3 className="medium-heading tagline">{siteConfig.hero.tagline}</h3>
      <p className="description">{siteConfig.hero.description}</p>
      <a href={siteConfig.hero.callToActionUrl} className="resume-button cta">
        {siteConfig.hero.callToAction}
      </a>
    </section>
  );
};

export default Hero;
