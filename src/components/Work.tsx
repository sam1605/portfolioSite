import SectionHeading from './SectionHeading';
import { siteConfig, type Project, type OtherProject } from '../data';
import './Work.css';

const FeaturedProject = ({ index }: { index: number }) => {
  const project = siteConfig.work.featured[index];

  return (
    <div key={project.title} className="featured-project">
      <div className="project-content">
        <p className="overline project-overline">Featured Project</p>
        <h3 className="project-title">
          <a href={project.external} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <div className="project-description">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <ul className="project-tech">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub link"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </svg>
          </a>
          <a
            href={project.external}
            target="_blank"
            rel="noreferrer"
            aria-label="External link"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const OtherProjects = () => {
  return (
    <div className="other-projects" style={{display:'none'}}>
      <h3 className="other-projects-title">Other Noteworthy Projects</h3>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="other-projects-archive"
      >
        view the archive
      </a>

      <ul className="other-projects-grid">
        {siteConfig.work.other.map((project: OtherProject) => (
          <li key={project.title}>
            <div className="other-project">
              <div className="project-top">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub link"
                  className="project-github"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                  </svg>
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="External link"
                  className="project-external"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <h3 className="other-project-name">
                <a href={project.external} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="other-project-description">
                {project.description}
              </p>
              <ul className="other-project-tech">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work">
      <SectionHeading number="03" title={siteConfig.work.heading} />
      <div>
        {siteConfig.work.featured.map((project: Project, i) => (
          <FeaturedProject key={project.title} index={i} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
};

export default Work;
