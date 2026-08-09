'use client';

import { useEffect, useState } from 'react';

const WHATSAPP = 'https://wa.me/919911670132';
const ENROLL = '#enroll';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Projects', href: '#projects' },
  { label: 'Mentorship', href: '#why-us' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Resources', href: '#resources', hasMenu: true },
];

const stats = [
  { value: '500+', label: 'Students Trained', tone: 'orange', icon: 'users' },
  { value: '85%', label: 'Placement Rate', tone: 'green', icon: 'chart' },
  { value: '100+', label: 'Hiring Partners', tone: 'violet', icon: 'briefcase' },
  { value: '4.8/5', label: 'Average Rating', tone: 'orange', icon: 'star' },
  { value: '6+', label: 'Years Industry Experience', tone: 'blue', icon: 'shield' },
];

const benefits = [
  {
    title: 'Real World Learning',
    copy: 'Build production-grade pipelines, containers and cloud infra — not toy demos.',
    tone: 'orange',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Personalized Mentorship',
    copy: '1:1 guidance from practising DevOps engineers who ship on AWS every day.',
    tone: 'green',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Career Support',
    copy: 'Resume reviews, mock interviews and referrals until you land the role.',
    tone: 'violet',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
  },
];

const modules = [
  { n: '01', title: 'DevOps & Linux Fundamentals', icon: 'linux' },
  { n: '02', title: 'Git & Collaboration Workflows', icon: 'git' },
  { n: '03', title: 'CI with Jenkins & GitHub Actions', icon: 'jenkins' },
  { n: '04', title: 'Config Management with Ansible', icon: 'ansible' },
  { n: '05', title: 'Docker Containerization', icon: 'docker' },
  { n: '06', title: 'Kubernetes Orchestration', icon: 'k8s' },
  { n: '07', title: 'Cloud with AWS', icon: 'aws' },
  { n: '08', title: 'Monitoring & GitOps', icon: 'monitor' },
];

const projectTabs = [
  {
    id: 'ecommerce',
    label: 'E-Commerce App',
    title: 'End-to-End E-Commerce Deployment',
    copy: 'Users hit Nginx, traffic lands on containerized app servers, and data flows to RDS with assets on S3 — the full production path.',
    nodes: ['Users', 'Nginx', 'Docker App Server', 'DB (RDS)', 'S3 Storage'],
    commands: [
      '$ terraform apply',
      '$ aws eks update-kubeconfig --name prod',
      '$ docker build -t shop:latest .',
      '$ kubectl apply -f k8s/',
      '$ kubectl rollout status deploy/shop',
    ],
  },
  {
    id: 'microservices',
    label: 'Microservices App',
    title: 'Multi-Service Platform on EKS',
    copy: 'Design, containerize and deploy a multi-service stack with service discovery, ingress and independent rollouts.',
    nodes: ['API Gateway', 'Auth Svc', 'Order Svc', 'Redis', 'PostgreSQL'],
    commands: [
      '$ helm upgrade --install api ./charts/api',
      '$ kubectl get pods -n shop',
      '$ kubectl logs -f deploy/auth',
      '$ argocd app sync shop-prod',
      '$ kubectl get ingress -A',
    ],
  },
  {
    id: 'cicd',
    label: 'CI/CD Pipeline',
    title: 'Automated Build → Scan → Deploy',
    copy: 'Wire Jenkins and GitHub Actions so every commit is tested, scanned with Trivy, imaged and shipped via ArgoCD.',
    nodes: ['GitHub', 'Jenkins', 'Trivy', 'ECR', 'ArgoCD'],
    commands: [
      '$ git push origin main',
      '$ jenkins build job/devops-pipeline',
      '$ trivy image shop:1.4.2',
      '$ docker push 123.dkr.ecr/shop:1.4.2',
      '$ argocd app sync shop',
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring Stack',
    title: 'Prometheus + Grafana Observability',
    copy: 'Stand up scraping, dashboards and Alertmanager so production health is visible before users feel pain.',
    nodes: ['Apps', 'Prometheus', 'Grafana', 'Alertmanager', 'PagerDuty'],
    commands: [
      '$ helm install kube-prom prometheus-community/kube-prometheus-stack',
      '$ kubectl port-forward svc/grafana 3000',
      '$ curl localhost:9090/api/v1/query',
      '$ kubectl get prometheusrules -A',
      '$ amtool alert',
    ],
  },
];

const testimonials = [
  {
    quote:
      'The training was excellent and practical. I got placed as DevOps Engineer with a great package.',
    name: 'Arun Kumar',
    role: 'DevOps Engineer at Capgemini',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    quote:
      'Hands-on AWS projects and mentor feedback made the switch from support to DevOps feel achievable.',
    name: 'Priya Patel',
    role: 'Cloud DevOps Engineer at Flipkart',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    quote:
      'Small batches meant every doubt got answered. The mock interviews sealed my offer.',
    name: 'Rahul Sharma',
    role: 'DevOps Engineer at Razorpay',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
  },
];

const ctaPoints = [
  'Live Online Training',
  'Weekend Batches',
  'Real AWS Projects',
  'Placement Support',
];

const resourceLinks = [
  'DevOps Roadmap',
  'Curriculum PDF',
  'Interview Guide',
  'Salary Report 2026',
];

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 3 5-6" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        </svg>
      );
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common} width={18} height={18}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common} width={28} height={28} viewBox="0 0 32 32" strokeWidth={1.6}>
          <path d="M10 22h12a5 5 0 0 0 .4-10 7 7 0 0 0-13.2 2.2A4.5 4.5 0 0 0 10 22z" />
          <circle cx="16" cy="16" r="3.2" />
          <path d="M16 14.2v3.6M14.2 16h3.6" />
        </svg>
      );
    default:
      return null;
  }
}

function ModuleGlyph({ type }) {
  return <span className={`module-glyph module-glyph--${type}`} aria-hidden />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="logo" href="#home" aria-label="Switch to DevOps home">
          <span className="logo-mark">
            <Icon name="cloud" />
          </span>
          <span className="logo-text">
            Switch to <em>DevOps</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
              {item.hasMenu ? <span className="nav-caret" aria-hidden /> : null}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            Talk to Mentor
          </a>
          <a className="btn btn-primary" href={ENROLL}>
            Enroll Now <Icon name="arrow" />
          </a>
        </div>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-actions">
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Talk to Mentor
          </a>
          <a className="btn btn-primary" href={ENROLL} onClick={() => setOpen(false)}>
            Enroll Now <Icon name="arrow" />
          </a>
        </div>
      </div>
    </header>
  );
}

function CommandCenter() {
  const lines = [
    { text: 'Initializing pipeline', ok: true },
    { text: 'Code checkout', ok: true },
    { text: 'Install dependencies', ok: true },
    { text: 'Run unit tests', ok: true },
    { text: 'Build Docker image', ok: true },
    { text: 'Deploy to Kubernetes', ok: true },
    { text: 'Health checks passed', ok: true },
    { text: 'Deployment successful 🚀', ok: true, success: true },
  ];

  return (
    <div className="command-center" aria-label="Deployment Command Center">
      <div className="cc-glow" aria-hidden />
      <div className="cc-grid">
        <article className="cc-terminal">
          <header>
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <p>pipeline.log</p>
          </header>
          <ul>
            {lines.map((line, i) => (
              <li key={line.text} style={{ animationDelay: `${0.12 * i}s` }}>
                <time>10:{String(24 + i).padStart(2, '0')}:3{i}</time>
                <span className={line.success ? 'ok success' : 'ok'}>✓</span>
                <code>{line.text}</code>
              </li>
            ))}
          </ul>
        </article>

        <article className="cc-infra">
          <p className="cc-label">Infrastructure Overview</p>
          <div className="infra-map">
            <div className="node nginx">Nginx</div>
            <div className="node-row">
              <div className="node app">App Service</div>
              <div className="node app">App Service</div>
            </div>
            <div className="node-row">
              <div className="node redis">Redis</div>
              <div className="node pg">PostgreSQL</div>
            </div>
          </div>
        </article>

        <article className="cc-metric health">
          <div className="ring" aria-hidden>
            <strong>100%</strong>
          </div>
          <p>System Health</p>
        </article>

        <article className="cc-metric cpu">
          <p className="cc-label">CPU Usage</p>
          <svg viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden>
            <path d="M0 28 C12 26, 18 10, 30 16 S48 34, 60 22 78 6, 90 14 108 30, 120 18" />
          </svg>
          <strong>23%</strong>
        </article>

        <article className="cc-metric deploys">
          <p className="cc-label">Deployments</p>
          <div className="bars" aria-hidden>
            <i style={{ height: '40%' }} />
            <i style={{ height: '65%' }} />
            <i style={{ height: '50%' }} />
            <i style={{ height: '85%' }} />
            <i style={{ height: '70%' }} />
            <i className="active" style={{ height: '95%' }} />
          </div>
          <strong>
            24 <span>This Week</span>
          </strong>
        </article>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const project = projectTabs[projectIndex];
  const story = testimonials[storyIndex];

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-atmosphere" aria-hidden />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">From Zero to DevOps Hero</p>
              <h1>
                <span className="brand-lockup">Switch to DevOps</span>
                <span className="hero-headline">Code It. Deploy It. Own It.</span>
              </h1>
              <p className="hero-support">
                Master in-demand DevOps skills through real-world projects, hands-on training and
                expert mentorship.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary btn-lg" href={ENROLL}>
                  Enroll Now <Icon name="arrow" />
                </a>
                <a className="btn btn-outline btn-lg" href="#roadmap">
                  <Icon name="download" /> Download Curriculum
                </a>
              </div>
            </div>
            <CommandCenter />
          </div>
        </section>

        <section className="stats-bar" aria-label="Key outcomes">
          <div className="stats-track">
            {stats.map((stat) => (
              <article key={stat.label} className={`stat-item tone-${stat.tone}`}>
                <span className="stat-icon">
                  <Icon name={stat.icon} />
                </span>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
                <span className="stat-chevron" aria-hidden />
              </article>
            ))}
          </div>
        </section>

        <section className="why-section" id="why-us">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Why Learn With Us?</p>
              <h2>Not just training. A complete career transformation.</h2>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article key={benefit.title} className={`benefit-panel tone-${benefit.tone}`}>
                  <div className="benefit-media">
                    <img src={benefit.image} alt="" />
                    <span className="benefit-icon" aria-hidden />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </article>
              ))}
            </div>
            <a className="text-link" href="#courses">
              Explore all benefits <span className="dotted-trail" aria-hidden />
              <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="roadmap-section" id="roadmap">
          <div className="section-shell">
            <div className="section-heading center">
              <p className="eyebrow">Your Learning Journey</p>
              <h2>8 Weeks. 8 Powerful Modules.</h2>
            </div>
            <div className="roadmap-rail" role="list">
              {modules.map((mod, index) => (
                <div className="roadmap-step" role="listitem" key={mod.n}>
                  <div className="step-node">
                    <ModuleGlyph type={mod.icon} />
                    <span>{mod.n}</span>
                  </div>
                  <p>{mod.title}</p>
                  {index < modules.length - 1 ? <span className="step-arrow" aria-hidden /> : null}
                </div>
              ))}
            </div>
            <div className="center-cta">
              <a className="btn btn-primary" href="#courses">
                View Full Curriculum <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Build What Companies Hire For</p>
              <h2>Real World DevOps Projects</h2>
            </div>

            <div className="project-console">
              <div className="project-tabs" role="tablist" aria-label="Project categories">
                {projectTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={index === projectIndex}
                    className={index === projectIndex ? 'is-active' : ''}
                    onClick={() => setProjectIndex(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="project-body" role="tabpanel">
                <div className="project-arch">
                  <p className="cc-label">{project.title}</p>
                  <p className="project-copy">{project.copy}</p>
                  <div className="arch-flow">
                    {project.nodes.map((node, i) => (
                      <div key={node} className="arch-node-wrap">
                        <div className="arch-node">{node}</div>
                        {i < project.nodes.length - 1 ? <span className="arch-link" aria-hidden /> : null}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-terminal">
                  <header>
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <p>deploy.sh</p>
                  </header>
                  <pre>
                    {project.commands.map((cmd) => (
                      <code key={cmd}>{cmd}</code>
                    ))}
                  </pre>
                </div>
              </div>

              <a className="btn btn-primary project-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
                View Project Details <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="stories-section" id="stories">
          <div className="section-shell stories-grid">
            <div className="story-photo">
              <img src={story.image} alt={story.name} />
              <div className="photo-frame" aria-hidden />
            </div>
            <div className="story-quote">
              <p className="eyebrow">Success Stories</p>
              <blockquote>“{story.quote}”</blockquote>
              <div className="story-person">
                <strong>{story.name}</strong>
                <span>{story.role}</span>
              </div>
              <div className="story-nav">
                <button
                  type="button"
                  aria-label="Previous story"
                  onClick={() => setStoryIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                >
                  ‹
                </button>
                <div className="dots">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show story ${i + 1}`}
                      className={i === storyIndex ? 'is-active' : ''}
                      onClick={() => setStoryIndex(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next story"
                  onClick={() => setStoryIndex((i) => (i + 1) % testimonials.length)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta" id="enroll">
          <div className="cta-atmosphere" aria-hidden />
          <div className="section-shell cta-inner">
            <h2>Start Your DevOps Journey Today!</h2>
            <p>Live mentorship, weekend batches and production projects — ready when you are.</p>
            <ul className="cta-points">
              {ctaPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
                Enroll Now <Icon name="arrow" />
              </a>
              <a className="btn btn-outline btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
                Talk to Mentor
              </a>
            </div>
          </div>
        </section>

        <section className="resources-section" id="resources">
          <div className="section-shell resources-row">
            <h2>Resources</h2>
            <div className="resource-links">
              {resourceLinks.map((link) => (
                <a key={link} href="#roadmap">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="courses">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#home">
              <span className="logo-mark">
                <Icon name="cloud" />
              </span>
              <span className="logo-text">
                Switch to <em>DevOps</em>
              </span>
            </a>
            <p>Code it. Deploy it. Own it. — career-ready DevOps training with real AWS projects.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#courses">Courses</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#projects">Projects</a>
            <a href="#stories">Success Stories</a>
            <a href="#resources">Resources</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp Mentor
            </a>
            <a href="tel:+919911670132">+91 99116 70132</a>
            <a href="https://switchtodevops.com/" target="_blank" rel="noreferrer">
              switchtodevops.com
            </a>
          </div>
          <div className="socials">
            <h3>Social</h3>
            <div className="social-row">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                YT
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                f
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Switch to DevOps. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
