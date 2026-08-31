import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data';
import './Experience.css';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const job = siteConfig.experience.jobs[activeTabId];

  return (
    <section id="experience">
      <SectionHeading number="02" title={siteConfig.experience.heading} />

      <div className="experience-inner">
        <div
          role="tablist"
          aria-label="Job tabs"
          className="experience-tabs"
        >
          <div
            className="experience-tab-highlight"
            style={{ ['--tab-active-top' as string]: `${activeTabId * 60}px` }}
          />
          {siteConfig.experience.jobs.map((tab, i) => (
            <button
              key={tab.company}
              className={`experience-tab ${i === activeTabId ? 'active' : ''}`}
              onClick={() => setActiveTabId(i)}
            >
              {tab.companyOption}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="experience-panel">
          <h3 className="experience-title">
            <span className="job-title">{job.title}</span>
            <span className="experience-company">
              {' '}
              <a href={job.url} target="_blank" rel="noreferrer">
                @{job.company}
              </a>
            </span>
          </h3>
          <p className="experience-range">{job.range}</p>
          <ul className="experience-description fancy-list">
            {job.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
