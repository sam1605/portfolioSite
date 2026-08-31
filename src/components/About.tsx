import SectionHeading from './SectionHeading';
import { siteConfig } from '../data';
import profileImg from '../assets/dp.jpeg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <SectionHeading number="01" title={siteConfig.about.heading} />

      <div className="about-grid">
        <div className="about-content">
          {siteConfig.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <p className="skills-intro">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="about-skills">
            {siteConfig.about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="Sam Aditya" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
