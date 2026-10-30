import { useEffect, useState } from 'react';

const EMAIL = 'rbeljot1212@gmail.com';
const GITHUB = 'https://github.com/Heyyya';
const FACEBOOK = 'https://www.facebook.com/ming.O.Stick.O.1212';
const pages = {
  home: {
    title: 'Rommel Besin Beljot — Computer Science Student | Aspiring Full-Stack Developer',
    description: 'Portfolio of Rommel Besin Beljot, a Computer Science student and aspiring full-stack developer specializing in web and mobile development.',
  },
  about: { title: 'About — Rommel Besin Beljot', description: 'Learn more about Rommel Besin Beljot: background, education, career goals, skills, and interests.' },
  work: { title: 'My Work — Rommel Besin Beljot', description: 'Featured academic and personal projects by Rommel Besin Beljot.' },
  services: { title: 'Services — Rommel Besin Beljot', description: 'Web development, mobile app development, and graphic design services.' },
  'services-web': { title: 'Web Development Services — Rommel Besin Beljot', description: 'Responsive websites, landing pages, dashboards, and web applications.' },
  'services-mobile': { title: 'Mobile Development Services — Rommel Besin Beljot', description: 'Flutter app design and user-friendly mobile interfaces.' },
  'services-design': { title: 'Graphic Design Services — Rommel Besin Beljot', description: 'Mockups, branding, and interface design support.' },
  web: { title: 'Web Development — Rommel Besin Beljot', description: 'Web development projects by Rommel Besin Beljot.' },
  mobile: { title: 'Mobile Development — Rommel Besin Beljot', description: 'Mobile development projects by Rommel Besin Beljot.' },
  design: { title: 'Graphic Design — Rommel Besin Beljot', description: 'Graphic design and UI/UX work by Rommel Besin Beljot.' },
  contact: { title: 'Contact — Rommel Besin Beljot', description: 'Get in touch with Rommel Besin Beljot for opportunities, projects, or collaborations.' },
};

const servicePages = {
  'services-web': {
    title: 'Web Development',
    description: 'I build websites and web systems that are responsive, functional, and designed around user needs.',
    icon: 'fa-laptop-code',
    paragraphs: [
      'I create responsive websites, landing pages, dashboards, and web applications with a focus on clean design, usability, and practical functionality. I help turn ideas into digital experiences that are easy to navigate and built for real-world use.',
      'I can support projects involving business websites, portfolio pages, internal tools, and systems that require user interaction and organized data flow.',
    ],
  },
  'services-mobile': {
    title: 'Mobile Development',
    description: 'I design and build mobile apps that feel intuitive, fast, and useful in everyday scenarios.',
    icon: 'fa-mobile-screen-button',
    paragraphs: [
      'I develop mobile applications with a strong focus on simplicity and usability. I can help create apps for personal productivity, tracking, daily routines, and straightforward tools that solve common user problems without unnecessary complexity.',
      'I aim to create clean interfaces and smooth interactions so users can move through the app naturally and confidently.',
    ],
  },
  'services-design': {
    title: 'Graphic Design',
    description: 'I create visuals and interface concepts that make digital products look polished and easy to understand.',
    icon: 'fa-palette',
    paragraphs: [
      'I design visual concepts, mockups, and interface ideas that improve the look and usability of digital products. I focus on clean layouts, thoughtful spacing, and design choices that make information easier to understand and more appealing to the user.',
      'I can support projects with UI/UX design, landing page visuals, branding elements, and simple but effective design systems for modern digital experiences.',
    ],
  },
};

const projects = [
  {
    category: 'mobile', icon: 'fa-wallet', type: 'Mobile Application', name: 'Budget Tracker',
    description: 'A mobile application that helps users manage their income and expenses while providing a clear overview of their financial activities.',
    features: ['Income Tracking', 'Expense Tracking & Categorization', 'Financial Overview Dashboard', 'User-Friendly Interface'], tech: ['Flutter', 'Dart'],
  },
  {
    category: 'web', icon: 'fa-comments', type: 'Web Platform', name: 'Guidance Office Support System',
    description: 'A web-based guidance platform that allows students to communicate with available guidance counselors online for academic and personal support.',
    features: ['Online Counseling & Real-Time Chat', 'Secure Student Authentication', 'Counselor Availability Status', 'Academic & Personal Support Requests'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Supabase'],
  },
  {
    category: 'web', icon: 'fa-book-open', type: 'Web Platform', name: 'Library Management System',
    description: 'A role-based library platform for Tangub City Global College that helps staff manage books, students, and borrowing activity from one dashboard.',
    features: ['Book & Student Management', 'Borrowing & Return Processing', 'Admin, Librarian & Role-Based Access', 'Reports & Secure Authentication'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Supabase'],
    link: 'https://github.com/aeioumsglai03-dot/Library-Management-System',
  },
  {
    category: 'web', icon: 'fa-lock', type: 'Private Web Application', name: 'Personal Photo Vault',
    description: 'A private photo vault with a focused sign-in experience for keeping personal memories organized and protected.',
    features: ['Private Authenticated Access', 'Personal Photo Storage', 'Responsive Web Interface', 'Purpose-Built Privacy-First Design'],
    tech: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/aeioumsglai03-dot/personal-photo-vault',
  },
  {
    category: 'web', icon: 'fa-gamepad', type: 'Web Game', name: 'Regex Challenge Game',
    description: 'A multi-page educational web game where players master Regular Expressions through 7 progressively unlocked categories of pattern-matching challenges, complete with live scoring, a results summary, and a standalone global leaderboard.',
    features: ['7 Unlockable Challenge Categories', 'Live Regex Validation & Scoring', 'Results Summary with Stats', 'Global Top 10 Leaderboard'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'], link: 'https://github.com/Heyyya/regex-challenge-game.io',
  },
  {
    category: 'web', icon: 'fa-images', type: 'Web Application', name: 'Our Memories — Couple Album',
    description: 'A private photo & video album for two authorized accounts only, with albums/collections, a full-screen media viewer, a built-in collage maker, and monthly slideshows — secured end-to-end with Supabase Auth, Row Level Security, and signed media URLs.',
    features: ['Private Auth — No Public Sign-Up', 'Albums, Collections & Collage Maker', 'Timeline, Favorites, Archive & Trash', 'Row-Level-Secured Media Storage'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'], link: 'https://github.com/Rome-glitch-spec/couple-album',
  },
  {
    category: 'design', icon: 'fa-palette', type: 'UI/UX & Graphic Design', name: 'Design Work — In Progress',
    description: "Alongside development, I'm building out UI/UX and graphic design work using Figma and Canva. Case studies for this category are coming soon as projects are finished.",
    tech: ['Figma', 'Canva'],
  },
];

const routeAliases = {
  'index.html': 'home', 'about.html': 'about', 'work.html': 'work', 'services.html': 'services',
  'services-web-development.html': 'services-web', 'services-mobile-development.html': 'services-mobile',
  'services-graphic-design.html': 'services-design', 'web-development.html': 'web',
  'mobile-development.html': 'mobile', 'graphic-design.html': 'design', 'contact.html': 'contact',
};

function getCurrentPage() {
  const queryPage = new URLSearchParams(window.location.search).get('page');
  if (queryPage && pages[queryPage]) return queryPage;
  return routeAliases[window.location.pathname.split('/').pop()] || 'home';
}

function pageHref(page) {
  return `?page=${page}`;
}

function Icon({ name, brand = false }) {
  return <i aria-hidden="true" className={`${brand ? 'fa-brands' : 'fa-solid'} ${name}`} />;
}

function Dropdown({ label, items, page, open, onToggle, mobile = false, onNavigate }) {
  const dropdownClass = mobile ? 'mnav-dropdown' : 'dropdown';
  const buttonClass = mobile ? 'mnav mnav-dropdown-btn' : 'nav-link dropdown-btn';
  const menuClass = mobile ? 'mnav-dropdown-menu' : 'dropdown-menu';
  return (
    <div className={dropdownClass}>
      <button className={buttonClass} type="button" aria-expanded={open} onClick={onToggle}>
        {label} <Icon name="fa-chevron-down dropdown-arrow" />
      </button>
      <div className={`${menuClass}${open ? (mobile ? ' show' : ' show') : ''}`}>
        {items.map((item) => (
          <a
            href={pageHref(item.page)}
            className={page === item.page ? 'active' : ''}
            key={item.page}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Header({ page }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [scrolled, setScrolled] = useState(window.scrollY > 20);
  const services = [
    { page: 'services-web', label: 'Web Development' },
    { page: 'services-mobile', label: 'Mobile Development' },
    { page: 'services-design', label: 'Graphic Design' },
  ];
  const workItems = [
    { page: 'web', label: 'Web Development' },
    { page: 'mobile', label: 'Mobile Development' },
    { page: 'design', label: 'Graphic Design' },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Theme selection remains available for the current page when storage is disabled.
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const toggleDropdown = (name) => setOpenDropdown((current) => current === name ? '' : name);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown('');
  };
  const linkClass = (name) => `nav-link${page === name ? ' active' : ''}`;

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''} id="header">
        <div className="container nav-wrap">
          <a href={pageHref('home')} className="logo"><span className="dot" />oming.dev</a>
          <ul className="nav-links">
            <li><a href={pageHref('home')} className={linkClass('home')}>Home</a></li>
            <li><a href={pageHref('about')} className={linkClass('about')}>About</a></li>
            <li><Dropdown label="Services" items={services} page={page} open={openDropdown === 'services'} onToggle={() => toggleDropdown('services')} /></li>
            <li><Dropdown label="Projects" items={workItems} page={page} open={openDropdown === 'projects'} onToggle={() => toggleDropdown('projects')} /></li>
            <li><a href={pageHref('contact')} className={linkClass('contact')}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" aria-label="Toggle dark and light mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Icon name={theme === 'dark' ? 'fa-moon' : 'fa-sun'} />
            </button>
            <button className="hamburger" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`menu-overlay${menuOpen ? ' open' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <button className="menu-close" type="button" aria-label="Close menu" onClick={closeMenu}><Icon name="fa-xmark" /></button>
        <a href={pageHref('home')} className="mnav" onClick={closeMenu}>Home</a>
        <a href={pageHref('about')} className="mnav" onClick={closeMenu}>About</a>
        <Dropdown label="Services" items={services} page={page} open={openDropdown === 'mobile-services'} onToggle={() => toggleDropdown('mobile-services')} mobile onNavigate={closeMenu} />
        <Dropdown label="Projects" items={workItems} page={page} open={openDropdown === 'mobile-projects'} onToggle={() => toggleDropdown('mobile-projects')} mobile onNavigate={closeMenu} />
        <a href={pageHref('contact')} className="mnav" onClick={closeMenu}>Contact</a>
      </nav>
    </>
  );
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('in'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  });
}

function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-head reveal">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <p>© 2026 Rommel Besin Beljot · Computer Science Student | Aspiring Full-Stack Developer</p>
          <div className="footer-social">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="fa-github" brand /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="fa-facebook-f" brand /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="fa-envelope" /></a>
          </div>
        </div>
        <p className="designed-by">Designed &amp; developed by Rommel Besin Beljot</p>
      </div>
    </footer>
  );
}

function HomePage() {
  const roles = ['Computer Science Student', 'Aspiring Full-Stack Developer', 'Web & Mobile App Builder', 'UI/UX Enthusiast'];
  const [role, setRole] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const currentRole = roles[roleIndex];
      characterIndex += deleting ? -1 : 1;
      setRole(currentRole.slice(0, characterIndex));
      if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        timer = window.setTimeout(tick, 1400);
        return;
      }
      if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      timer = window.setTimeout(tick, deleting ? 35 : 65);
    };
    timer = window.setTimeout(tick, 65);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="hero-tag"><span className="pulse" />Open to internships &amp; junior dev roles</div>
            <h1>Hi, I'm <span className="accent">Rommel Besin Beljot</span></h1>
            <div className="hero-role"><span>{role}</span><span className="cursor">&nbsp;</span></div>
            <p className="tagline">Building modern, responsive, and user-friendly digital solutions through creativity, innovation, and continuous learning.</p>
            <div className="hero-btns">
              <a href={pageHref('work')} className="btn btn-primary"><Icon name="fa-code" /> View My Work</a>
              <a href={pageHref('contact')} className="btn btn-outline"><Icon name="fa-paper-plane" /> Contact Me</a>
              <button type="button" className="btn btn-outline" onClick={() => window.alert('Add your resume PDF and link it here — e.g. href="resume.pdf" download.')}><Icon name="fa-download" /> Download Resume</button>
            </div>
            <div className="hero-stats">
              <div><strong>3rd Year</strong><span>BS Computer Science</span></div>
              <div><strong>6+</strong><span>Projects Built</span></div>
              <div><strong>3</strong><span>Languages Spoken</span></div>
            </div>
          </div>
          <div className="reveal">
            <div className="hero-photo" style={{ marginBottom: 20 }}>
              <img src="./images/profile.jpg" alt="Portrait of Rommel Besin Beljot" />
            </div>
          </div>
          <div className="code-panel reveal" style={{ gridColumn: '1 / -1' }}>
            <div className="code-head"><span /><span /><span /><span className="code-file">about-oming.js</span></div>
            <div className="code-body">
              <div><span className="ln">01</span><span className="tok-key">const</span> <span className="tok-fn">developer</span> <span className="tok-punc">= {'{'}</span></div>
              <div><span className="ln">02</span>&nbsp;&nbsp;<span className="tok-prop">name</span><span className="tok-punc">:</span> <span className="tok-str">"Rommel Besin Beljot"</span><span className="tok-punc">,</span></div>
              <div><span className="ln">03</span>&nbsp;&nbsp;<span className="tok-prop">alias</span><span className="tok-punc">:</span> <span className="tok-str">"Oming"</span><span className="tok-punc">,</span></div>
              <div><span className="ln">04</span>&nbsp;&nbsp;<span className="tok-prop">role</span><span className="tok-punc">:</span> <span className="tok-str">"CS Student · Full-Stack Dev"</span><span className="tok-punc">,</span></div>
              <div><span className="ln">05</span>&nbsp;&nbsp;<span className="tok-prop">based</span><span className="tok-punc">:</span> <span className="tok-str">"Kolambugan, Lanao del Norte, PH"</span><span className="tok-punc">,</span></div>
              <div><span className="ln">06</span>&nbsp;&nbsp;<span className="tok-prop">stack</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">"JS"</span>, <span className="tok-str">"PHP"</span>, <span className="tok-str">"Dart"</span>, <span className="tok-str">"Flutter"</span>, <span className="tok-str">"Supabase"</span><span className="tok-punc">],</span></div>
              <div><span className="ln">07</span>&nbsp;&nbsp;<span className="tok-prop">languages</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">"Cebuano"</span>, <span className="tok-str">"Filipino"</span>, <span className="tok-str">"English"</span><span className="tok-punc">],</span></div>
              <div><span className="ln">08</span>&nbsp;&nbsp;<span className="tok-prop">hobbies</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">"pickleball"</span>, <span className="tok-str">"baseball"</span>, <span className="tok-str">"manga"</span><span className="tok-punc">],</span></div>
              <div><span className="ln">09</span>&nbsp;&nbsp;<span className="tok-fn">isLearning</span><span className="tok-punc">:</span> <span className="tok-key">true</span><span className="tok-punc">,</span></div>
              <div><span className="ln">10</span>&nbsp;&nbsp;<span className="tok-fn">availableForWork</span><span className="tok-punc">:</span> <span className="tok-key">true</span><span className="tok-punc">,</span></div>
              <div><span className="ln">11</span><span className="tok-punc">{'};'}</span></div>
              <div><span className="ln">12</span></div>
              <div><span className="ln">13</span><span className="tok-com">// let's build something great together</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="Explore" title="Get to know my work" description="A quick look at where to find everything — my story, my projects, and how to reach me." />
          <div className="explore-grid">
            <ExploreCard icon="fa-user" title="About Me" text="My background, education, goals, and the skills I bring to every project." action="Learn more" page="about" />
            <ExploreCard icon="fa-briefcase" title="My Work" text="Featured academic and personal projects that show how I approach problems." action="View projects" page="work" />
            <ExploreCard icon="fa-paper-plane" title="Contact" text="Have an opportunity or project in mind? Let's talk — my inbox is open." action="Get in touch" page="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

function ExploreCard({ icon, title, text, action, page }) {
  return (
    <a href={pageHref(page)} className="explore-card reveal">
      <Icon name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
      <span>{action} <Icon name="fa-arrow-right" /></span>
    </a>
  );
}

function AboutPage() {
  const skills = [
    { icon: 'fa-code', title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Dart'] },
    { icon: 'fa-mobile-screen-button', title: 'Frameworks', items: ['Flutter'] },
    { icon: 'fa-database', title: 'Database', items: ['Supabase'] },
    { icon: 'fa-toolbox', title: 'Tools', items: ['VS Code', 'Git & GitHub', 'Figma', 'Canva'] },
  ];
  return (
    <>
      <PageBanner eyebrow="About" title="Getting to know me" description="A closer look at who I am, what I've studied, and the tools I build with." />
      <section className="section" style={{ paddingTop: 20 }} id="about">
        <div className="container about-grid">
          <div className="about-photo-card reveal">
            <div className="avatar-frame"><img src="./images/profile.jpg" alt="Rommel Besin Beljot" /></div>
            <h3>Rommel Besin Beljot</h3>
            <div className="role">"Oming" · Aspiring Full-Stack Developer</div>
            <ul className="info-list">
              {[
                ['Preferred Name', 'Oming'], ['Age', '27'], ['Date of Birth', 'Dec 12, 1998'], ['Gender', 'Male'],
                ['Nationality', 'Filipino'], ['Location', 'Kolambugan, Lanao del Norte, PH'],
                ['Languages', 'Cebuano, Filipino, English'], ['Email', EMAIL], ['Phone', '0915 061 3881'],
              ].map(([label, value]) => <li key={label}><span>{label}</span><span>{value}</span></li>)}
            </ul>
          </div>
          <div className="about-text reveal">
            <p>I am a third-year Bachelor of Science in Computer Science student at Tangub City Global College with a strong passion for software and web development. I enjoy creating practical applications that solve real-world problems while continuously improving my technical and problem-solving skills.</p>
            <p>Through academic and personal projects, I have gained experience in web and mobile development using modern technologies. I am dedicated to continuous learning and aspire to become a software engineer who builds impactful digital solutions — one that enjoys transforming ideas into functional, meaningful software.</p>
            <p>My interests span web development, mobile application development, UI/UX design, and modern software technologies. I believe in continuous learning, hard work, and self-improvement, and I take on projects that challenge my creativity and technical abilities.</p>
            <div className="pill-row">{['Web Development', 'Mobile Apps', 'UI/UX Design', 'Artificial Intelligence', 'Emerging Tech'].map((item) => <span className="pill" key={item}>{item}</span>)}</div>
            <div className="subblock">
              <h4><Icon name="fa-graduation-cap" /> Education</h4>
              <div className="edu-card">
                <div className="edu-icon"><Icon name="fa-building-columns" /></div>
                <div><h3>Tangub City Global College</h3><div className="degree">Bachelor of Science in Computer Science</div><div className="status">Third-Year Student · Currently Enrolled</div></div>
              </div>
            </div>
            <div className="subblock">
              <h4><Icon name="fa-flag-checkered" /> Career Goals</h4>
              <div className="goal-cards">
                <div className="goal-card"><span>Short-Term</span><p>Complete my bachelor's degree, strengthen my software development skills, and gain professional experience through internships and real-world projects.</p></div>
                <div className="goal-card"><span>Long-Term</span><p>Become a successful software engineer, create innovative digital solutions, continuously grow in the technology industry, and achieve financial independence.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="Tools I build with" description="Languages, frameworks, and tools I use to design and ship applications." />
          <div className="skills-grid">
            {skills.map((skill) => <div className="skill-card reveal" key={skill.title}><Icon name={skill.icon} /><h4>{skill.title}</h4><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Beyond Code" title="Interests & hobbies" description="What keeps me curious and recharged outside of development work." />
          <div className="two-col">
            <TagCard title="Interests" items={['Software Development', 'Web Development', 'Mobile App Development', 'UI/UX Design', 'Artificial Intelligence', 'Emerging Technologies']} />
            <TagCard title="Hobbies" items={['Pickleball', 'Baseball', 'Badminton', 'Reading Manga', 'Reading Manhwa', 'Reading Manhua']} />
          </div>
        </div>
      </section>
    </>
  );
}

function TagCard({ title, items }) {
  return <div className="tag-card reveal"><h4>{title}</h4><div className="tag-cloud">{items.map((item) => <span key={item}>{item}</span>)}</div></div>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-visual"><Icon name={project.icon} /></div>
      <div className="project-body">
        <div className="project-tag">{project.type}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.features && <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Icon name="fa-circle" /> {feature}</li>)}</ul>}
        <div className="tech-badges">{project.tech.map((tech) => <span className="badge" key={tech}>{tech}</span>)}</div>
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub <Icon name="fa-github" brand /></a>}
      </div>
    </article>
  );
}

function ProjectsPage({ page }) {
  const projectList = page === 'work' ? projects : projects.filter((project) => project.category === page);
  const banner = {
    work: ['My Work', 'Featured projects', 'A selection of academic and personal projects that reflect how I approach problems.'],
    web: ['Projects', 'Web Development', "Web platforms and applications I've built, from front-end to back-end."],
    mobile: ['Projects', 'Mobile Development', "Mobile applications I've designed and developed with Flutter and Dart."],
    design: ['Projects', 'Graphic Design', 'UI/UX and visual design work using Figma and Canva.'],
  }[page];
  return (
    <>
      <PageBanner eyebrow={banner[0]} title={banner[1]} description={banner[2]} />
      <section className="section" style={{ paddingTop: 20 }} id="work">
        <div className="container">{projectList.map((project) => <ProjectCard project={project} key={project.name} />)}</div>
      </section>
    </>
  );
}

function ServicesPage() {
  const services = [
    ['fa-laptop-code', 'Web Development', 'I create responsive websites and web applications that are clean, functional, and easy to use. I can build business websites, portfolios, landing pages, dashboards, and simple systems that help users interact with your content smoothly.'],
    ['fa-mobile-screen-button', 'Mobile Development', 'I develop mobile apps focused on usability, clarity, and daily functionality. I can help create apps for productivity, tracking, routines, or simple tools that make everyday tasks easier for users.'],
    ['fa-palette', 'Graphic Design', 'I design visual concepts and interfaces that are modern, organized, and user-friendly. I can support branding, mockups, UI layouts, and design elements that make digital products look more polished and professional.'],
  ];
  return (
    <>
      <PageBanner eyebrow="Services" title="What I can build for you" description="I design and develop digital products that are functional, user-friendly, and built with a strong focus on clarity and impact." />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <SectionHeading title="Core services" description="From polished websites to mobile apps and visual design, I help turn ideas into practical digital experiences." />
          {services.map(([icon, title, text]) => <div className="service-focus reveal" id={title.toLowerCase().replace(' ', '-')} key={title}><div className="service-icon"><Icon name={icon} /></div><div className="service-copy"><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>
    </>
  );
}

function ServiceDetailPage({ page }) {
  const service = servicePages[page];
  return (
    <>
      <PageBanner eyebrow="Services" title={service.title} description={service.description} />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="service-focus reveal">
            <div className="service-icon"><Icon name={service.icon} /></div>
            <div className="service-copy"><h3>What I do</h3>{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const submitContact = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get('subject') || 'Portfolio Contact';
    const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageBanner eyebrow="Contact" title="Let's build something together" description="Have an opportunity, project, or just want to say hi? My inbox is open." />
      <section className="section" style={{ paddingTop: 20 }} id="contact">
        <div className="container contact-grid">
          <div className="contact-info-card reveal">
            <ContactItem icon="fa-envelope" title="Email">{EMAIL}</ContactItem>
            <ContactItem icon="fa-phone" title="Phone">0915 061 3881</ContactItem>
            <ContactItem icon="fa-location-dot" title="Location">Kolambugan, Lanao del Norte, Philippines</ContactItem>
            <div className="social-row">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="fa-github" brand /></a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="fa-facebook-f" brand /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="fa-envelope" /></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitContact}>
            <div className="form-row">
              <div className="field"><label htmlFor="fname">Name</label><input id="fname" name="name" type="text" placeholder="Your name" required /></div>
              <div className="field"><label htmlFor="femail">Email</label><input id="femail" name="email" type="email" placeholder="you@email.com" required /></div>
            </div>
            <div className="field full form-field"><label htmlFor="fsubject">Subject</label><input id="fsubject" name="subject" type="text" placeholder="What's this about?" /></div>
            <div className="field full form-field"><label htmlFor="fmessage">Message</label><textarea id="fmessage" name="message" rows="5" placeholder="Tell me about the opportunity or project..." required /></div>
            <button type="submit" className="btn btn-primary contact-submit"><Icon name="fa-paper-plane" /> Send Message</button>
            <p className="form-note">This opens your email client addressed to {EMAIL}.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, title, children }) {
  return <div className="contact-item"><Icon name={icon} /><div><h5>{title}</h5><p>{children}</p></div></div>;
}

function App() {
  const page = getCurrentPage();
  useReveal();

  useEffect(() => {
    document.title = pages[page].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pages[page].description);
  }, [page]);

  let content;
  if (page === 'home') content = <HomePage />;
  else if (page === 'about') content = <AboutPage />;
  else if (page === 'services') content = <ServicesPage />;
  else if (servicePages[page]) content = <ServiceDetailPage page={page} />;
  else if (page === 'contact') content = <ContactPage />;
  else content = <ProjectsPage page={page} />;

  return (
    <>
      <div className="bg-grid" />
      <Header page={page} />
      <main>{content}</main>
      <Footer />
    </>
  );
}

export default App;
