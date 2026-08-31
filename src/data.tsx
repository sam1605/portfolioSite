import type { ReactNode } from 'react';

export interface NavLink {
  id: string;
  text: string;
}

export interface Social {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface ExperienceJob {
  company: string;
  companyOption: string;
  url: string;
  title: string;
  range: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github: string;
  external: string;
  featured?: boolean;
}

export interface OtherProject {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
}

const GithubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
      transform="translate(-84, -7399)"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"
      fill="currentColor"
    />
    <path
      d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"
      fill="currentColor"
    />
    <path
      d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"
      fill="currentColor"
    />
  </svg>
);

export const siteConfig = {
  name: 'Sam Aditya',
  hero: {
    overline: 'Hi, my name is',
    name: 'Sam Aditya.',
    tagline: 'A design minded Developer focused on building robust Web Applications',
    description:
      "I'm a full stack developer specializing in building scalable, secure web applications with C#, ASP.NET Core, SQL Server, and React. Currently, I'm focused on crafting high-performance APIs and responsive interfaces, backed by real-world insurance domain experience.",
    callToAction: 'Check out my work',
    callToActionUrl: '#experience',
  },
  nav: {
    logo: 'S.',
    links: [
      { id: 'about', text: 'About' },
      { id: 'experience', text: 'Experience' },
      { id: 'work', text: 'Work' },
      { id: 'contact', text: 'Contact' },
    ] as NavLink[],
    resumeUrl: '/resume.pdf',
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      "After my ECE degree, I made the jump into tech — a childhood spent obsessing over Iron Man, hacker movies, and my dad looking effortlessly cool on his work laptop made that inevitable. I picked Electronics for UG to keep both software and hardware on the table, and whether it was how bad I was at hardware or how much I wanted software, I ended up here — and I love it. I'm happiest building in that sweet spot where design meets engineering: things that look good and are built well under the hood. As a full-stack developer, I'm now working toward becoming a solutions architect, using my front-end and back-end experience to design systems that are efficient, scalable, and actually solve real problems.",
      "Away from the keyboard, you'll find me flying on VATSIM, playing guitar, reading, riding my motorcycle, or cooking up something delicious and probably not great for me.",
    ],
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React - Vanilla,NEXT',
      '.NET ASP,MVC,EF-LINQ',
      'SQL Server',
      'SSIS',
      'Azure',
      'Postgres SQL',
      'Node.js',
      'Python',
      
    ],
    profileImage: '/images/me.jpg',
  },
  experience: {
    heading: 'Where I\'ve Worked',
    jobs: [
      {
        company:'Chubb',
  companyOption: 'Chubb (2025-Present)',
  url: 'https://www.chubb.com',
  title: 'Software Engineer',
  range: 'May 2025 - Present',
  description: [
    'Build and maintain internal applications for Chubb North America\'s Financial Business Solutions team using .NET Core, SQL Server, ReactJS, and SSIS.',
    'Developed iCollect, an application for handling transactions against policies across Chubb\'s various policy management systems.',
    'Built the FBS Email Management System, a wrapper around an MS Exchange server that lets the business team assign, track, and manage customer emails tagged to policies.',
    'Developed the Collateral Management System (with Redux) enabling analysts to track assets listed as collateral by insured accounts, managing exposure and deviation.',
  ],
},
{
   company:'Kagool Data',
  companyOption: 'Kagool Data (2022-2025)',
  url: 'https://www.kagool.com',
  title: 'Full Stack Developer',
  range: 'April 2022 - April 2025',
  description: [
    'Delivered full-stack solutions across CRM, file management, chatbot, and data platform projects using .NET (Core/MVC), JavaScript/jQuery, SQL Server, and Azure services.',
    'Built the Konnect CRM timesheet system with leave, employee, and project management modules, plus monthly Power BI reporting on employee time booking and an ITSM ticketing module.',
    'Developed Smiths File Manager, a global file-sharing app using Azure AD auth and Blob Storage with SAS-token uploads and version history; handled bug fixes and the Smiths Medical to ICU Medical C2C migration.',
    'Built a SAP Chatbot on .NET Core, Node.js, and Microsoft Bot Framework that pulled vendor, warehouse, and shipping data from SAP via custom APIs for conversational access.',
    'Led development of the Intelligent Data Platform Portal for Al Futtaim Group, a metadata-driven alternative to Azure Data Factory with custom pipelines (SAP/OSC ingestion into Azure Data Lake), role-based access control, centralized AD access management, and real-time pipeline insights via tables, graphs, Excel, and Power BI reports.',
  ],
},
    ] as ExperienceJob[],
  },
  work: {
    heading: "Some Things I've Built",
    featured: [
      {
  title: 'Expenze',
  description: [
    'Frustrated with expensive subscription apps for finance tracking, I built Expenze over a weekend as a personal finance tracker SPA covering transactions, budgets, recurring rules, fuel logs, and multi-account transfers with row-level security.',
    'Shipped advanced features including AI-powered spending insights via Gemini, CSV bulk import, offline-first sync with operation queuing, PWA theming, and drag-and-drop customization.',
  ],
  tech: ['Vite', 'React 19', 'TypeScript', 'Supabase', 'PostgREST'],
  github: 'https://github.com/sam1605/Expenz',
  external: 'https://expenze.app',
  featured: true,
},
    ] as Project[],
    other: [
      // {
      //   title: 'Integrating Algolia Search with WordPress Multisite',
      //   description:
      //     'Build a custom multisite compatible WordPress plugin to build global search with Algolia.',
      //   tech: ['WordPress', 'Algolia', 'PHP'],
      //   github: 'https://github.com',
      //   external: 'https://example.com',
      // },
    ] as OtherProject[],
  },
  contact: {
    heading: "How to contact me?",
    title: 'Get In Touch',
    description:
      "I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    buttonText: 'Say Hello',
    email: 'samaditya.y@gmail.com',
  },
  social: [
    { name: 'GitHub', url: 'https://github.com/sam1605', icon: <GithubIcon /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedinIcon /> },
    { name: 'Instagram', url: 'https://www.instagram.com/sierra.blues/', icon: <InstagramIcon /> },
  ],
};
