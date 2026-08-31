import SectionHeading from './SectionHeading';
import { siteConfig } from '../data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <SectionHeading number="04" title={siteConfig.contact.heading} />

      <h2 className="medium-heading contact-title">
        {siteConfig.contact.title}
      </h2>

      <p className="contact-description">
        {siteConfig.contact.description}
      </p>

      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="resume-button contact-button"
      >
        {siteConfig.contact.buttonText}
      </a>
    </section>
  );
};

export default Contact;
