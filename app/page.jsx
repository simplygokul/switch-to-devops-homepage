'use client';

import { useEffect, useMemo, useState } from 'react';

const stats = [
  ['500+', 'Students Trained'],
  ['Up to 85%', 'Placement Rate'],
  ['12-16 LPA', 'Avg Package'],
  ['Max 10', 'Students/Batch'],
  ['6+ Years', 'Industry Experience'],
];

const curriculum = [
  ['Linux & Shell Scripting', 'File system, permissions, process management'],
  ['Git & GitHub', 'Branching strategies, merge, rebase'],
  ['Docker', 'Images, containers, Dockerfile, multi-stage builds'],
  ['Kubernetes on AWS EKS', 'Pods, Deployments, Services, Ingress'],
  ['Terraform', 'Providers, resources, variables, outputs'],
  ['Ansible', 'Inventory, playbooks, roles, variables'],
  ['Jenkins & GitHub Actions CI/CD', 'Declarative pipelines, agents, shared libraries'],
  ['ArgoCD GitOps', 'GitOps principles, ArgoCD install on EKS'],
  ['Prometheus & Grafana', 'Prometheus scraping, PromQL, recording rules'],
  ['AWS Core Services', 'VPC, IAM, EKS, ECR, ALB, Route 53'],
];

const projects = [
  {
    category: 'CI/CD',
    title: 'End-to-End CI/CD Pipeline for a Live E-Commerce Application',
    text: 'Build a complete pipeline with Jenkins and GitHub Actions. Code pushed to GitHub triggers automated tests, Docker image build, security scan with Trivy, and deployment to EKS via ArgoCD.',
    tools: 'Jenkins GitHub Actions Docker Trivy ArgoCD EKS',
  },
  {
    category: 'Infrastructure',
    title: 'Multi-Region AWS EKS Deployment with Terraform',
    text: 'Provision a production-grade EKS cluster across two AWS regions using Terraform modules. Configure VPC, subnets, IAM, node groups, and ALB ingress with zero-downtime failover.',
    tools: 'Terraform AWS EKS VPC IAM ALB Route 53',
  },
  {
    category: 'GitOps',
    title: 'Blue-Green and Canary Deployment with ArgoCD',
    text: 'Deploy a microservices application with zero-downtime blue-green and canary strategies on EKS. Use Argo Rollouts to control traffic shifting and automatic rollback on failed health checks.',
    tools: 'ArgoCD Argo Rollouts EKS Helm Istio',
  },
  {
    category: 'Monitoring',
    title: 'Production Monitoring Stack with Prometheus, Grafana and Alertmanager',
    text: 'Set up full observability for your EKS workloads. Configure Prometheus scraping, write PromQL alerts, build Grafana dashboards and route alerts to Slack and PagerDuty via Alertmanager.',
    tools: 'Prometheus Grafana Alertmanager PromQL Slack',
  },
  {
    category: 'Automation',
    title: 'Infrastructure Automation with Ansible Playbooks',
    text: 'Write idempotent Ansible playbooks to configure EC2 instances, deploy applications, rotate secrets and enforce compliance. Integrate with Terraform for full infrastructure-to-app automation.',
    tools: 'Ansible EC2 Ansible Vault Terraform Python',
  },
];

const testimonials = [
  ['Priya Patel', 'DevOps Engineer', 'Switch to DevOps changed my life. The training and support helped me get placed in Deloitte.'],
  ['Rahul Sharma', 'Cloud Engineer', 'The hands-on projects and mentorship helped me build real-world confidence.'],
  ['Amit Kumar', 'Site Reliability Engineer', 'Excellent curriculum and career support. Highly recommended for anyone serious about DevOps.'],
  ['Sneha Rao', 'DevOps Engineer', 'I got placed in a top MNC with a great package. Thank you Switch to DevOps!'],
  ['Kiran Reddy', 'Integration Engineer', 'The real-time projects and doubt sessions were extremely helpful throughout.'],
  ['Divya Krishnan', 'Cloud Engineer', 'From zero to job-ready in just a few months. Amazing experience!'],
];

const cities = ['Bangalore', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai', 'Delhi NCR', 'Kolkata', 'Noida', 'Gurugram'];

const tools = ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'AWS EKS', 'AWS RDS', 'AWS MSK', 'Prometheus', 'Grafana', 'Helm', 'SonarQube', 'Trivy', 'Linux'];

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('std-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('std-theme', nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle dark and light theme">
      <span aria-hidden="true">{theme === 'dark' ? 'L' : 'D'}</span>
    </button>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ['Home', '#home'],
    ['About Us', '#about-us'],
    ['Contact', '#contact-us'],
    ['Courses', '#courses'],
    ['Blogs', '#resources'],
    ['Learn', '#resources'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="SwitchtoDevOps home">
        <span>Switch<br />to DevOps</span>
      </a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
        {navItems.map(([item, href]) => (
          <a key={item} href={href} onClick={() => setMenuOpen(false)}>{item}</a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="mentor-button" href="tel:+919911670132">+91-9911670132</a>
        <a className="primary-button nav-enroll" href="#contact-us">Book Free Demo</a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function CommandCenter() {
  const logs = [
    '$ git push origin main',
    '> Initializing pipeline',
    '> Code checkout',
    '> Build Docker image',
    '> Run tests',
    '> Deploy to Kubernetes',
    '> Health checks',
    '> Application is live!',
  ];

  return (
    <div className="command-center" aria-label="Deployment Command Center">
      <div className="terminal">
        <div className="panel-title">DEPLOYMENT COMMAND CENTER</div>
        {logs.map((log, index) => (
          <div className="log-row" key={log}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <code>{log}</code>
            <time>10:{24 + index}:3{index}</time>
          </div>
        ))}
      </div>
      <div className="infra">
        <div className="panel-title">INFRASTRUCTURE OVERVIEW</div>
        <div className="node-map">
          <span>Nginx</span><span>App Service</span><span>Redis Cache</span><span>PostgreSQL DB</span>
        </div>
        <div className="health-card"><b>100%</b><span>System Health</span></div>
        <div className="spark-card"><span>CPU Usage</span><i></i></div>
        <div className="deploy-card"><b>24</b><span>Deployments</span></div>
      </div>
    </div>
  );
}

function FaqItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq-item">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{question}</span><span aria-hidden="true">{open ? '-' : '+'}</span>
      </button>
      <p hidden={!open}>{children}</p>
    </div>
  );
}

function HomePage() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const project = projects[activeProject];
  const testimonial = testimonials[activeTestimonial];
  const roadmap = useMemo(() => curriculum.slice(0, 8), []);

  return (
    <>
      <div className="watermark">Working Concept — Saradhi Tech</div>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">BATCH STARTS JULY 12 · ONLY 3 SEATS LEFT</p>
            <h1>Live DevOps Course —<br />Get Hired as a DevOps Engineer<br /><span>Earn ₹15–25 LPA</span></h1>
            <p>8-week live course · Real AWS projects · Max 10 students/batch</p>
            <div className="hero-ctas">
              <a className="primary-button" href="#contact-us">Book Free Demo</a>
              <a className="secondary-button" href="#roadmap">View Curriculum</a>
            </div>
            <p className="fine-print">Course fee from ₹15,000 · EMI available · GenAI included</p>
            <p className="fine-print">Free demo · No payment required · Cancel anytime</p>
          </div>
          <CommandCenter />
        </section>

        <section className="stats-bar" aria-label="Training highlights">
          {stats.map(([value, label]) => (
            <article key={label}><strong>{value}</strong><span>{label}</span></article>
          ))}
        </section>

        <section className="why-section" id="about-us">
          <div className="section-intro">
            <p className="eyebrow">WHY LEARN WITH US?</p>
            <h2>Not just training.<br />A complete career transformation.</h2>
            <p>We focus on the skills companies need today. You focus on becoming the engineer they can't ignore.</p>
            <a href="#about-us">Explore all benefits</a>
          </div>
          <div className="photo-benefits">
            <article><span>01</span><h3>Real World Learning</h3><p>Build, break, fix and deploy actual systems used in industry.</p></article>
            <article><span>02</span><h3>Personalized Mentorship</h3><p>1:1 guidance from industry engineers who have done it.</p></article>
            <article><span>03</span><h3>Career Support</h3><p>Resume, mock interviews, job referrals & placement assistance.</p></article>
          </div>
        </section>

        <section className="roadmap" id="roadmap">
          <div>
            <p className="eyebrow">YOUR LEARNING JOURNEY</p>
            <h2>8 Weeks.<br />8 Powerful Modules.</h2>
            <p>Step by step. Concept by concept. Project by project.</p>
            <a className="primary-button" href="#roadmap">View Full Curriculum</a>
          </div>
          <div className="roadmap-track">
            {roadmap.map(([title, text], index) => (
              <article key={title}>
                <b>{index + 1}</b>
                <span></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-intro">
            <p className="eyebrow">YOUR BY DOING</p>
            <h2>Real World DevOps Projects</h2>
            <p>Work on end-to-end projects and build a strong portfolio.</p>
            <a href="#projects">View all projects</a>
          </div>
          <div className="project-console">
            <div className="tabs">
              {projects.map((item, index) => (
                <button type="button" className={activeProject === index ? 'active' : ''} key={item.title} onClick={() => setActiveProject(index)}>{item.title}</button>
              ))}
            </div>
            <div className="project-body">
              <div className="architecture">
                <span>Users</span><span>Nginx</span><span>App Service</span><span>DB (RDS)</span><span>Docker</span><span>S3 (Storage)</span>
              </div>
              <div className="project-log">
                <code>$ terraform apply</code>
                <code>$ docker build -t app .</code>
                <code>$ kubectl apply -f k8s/</code>
                <code>$ kubectl rollout status deployment/app</code>
                <strong>{project.category}</strong>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <p>{project.tools}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tools" id="courses">
          <p className="eyebrow">TOOLS</p>
          <h2>DevOps Tools Covered in This Course</h2>
          <p>Every tool in this list is used in real production environments — not just demo projects</p>
          <div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </section>

        <section className="trainer" id="mentorship">
          <div className="trainer-photo" aria-label="Firoz Ahmed"></div>
          <div>
            <p className="eyebrow">YOUR TRAINER</p>
            <h2>Meet Your DevOps Trainer</h2>
            <p>Learn from a practising AWS DevOps engineer — not someone who teaches full-time without touching production code</p>
            <h3>Firoz Ahmed</h3>
            <p>AWS DevOps Engineer at TCS</p>
            <ul>
              <li>6+ years experience</li>
              <li>deployed 38 Java microservices across multi-region AWS</li>
              <li>expertise in EKS, ArgoCD, Terraform, Aurora MySQL, MSK Kafka</li>
            </ul>
          </div>
        </section>

        <section className="testimonials" id="success-stories">
          <div className="testimonial-photo"></div>
          <article>
            <p className="quote">"{testimonial[2]}"</p>
            <div className="testimonial-meta">
              <strong>{testimonial[0]}</strong>
              <span>{testimonial[1]}</span>
            </div>
            <div className="testimonial-controls">
              {testimonials.map((item, index) => (
                <button type="button" className={activeTestimonial === index ? 'active' : ''} key={item[0]} onClick={() => setActiveTestimonial(index)} aria-label={`Show ${item[0]} testimonial`}></button>
              ))}
            </div>
          </article>
        </section>

        <section className="cities" id="resources">
          <p className="eyebrow">WE ARE IN YOUR CITY</p>
          <h2>DevOps Training Available In</h2>
          <div>{cities.map((city) => <span key={city}>{city}</span>)}</div>
        </section>

        <section className="final-cta" id="contact-us">
          <div>
            <p className="eyebrow">LIMITED SEATS PER BATCH</p>
            <h2>Start Your DevOps Journey Today!</h2>
            <p>Don't just learn DevOps. Live it.</p>
          </div>
          <div className="cta-features">
            <span>Live Online Training</span>
            <span>Weekend Batches</span>
            <span>Flexible Timings</span>
            <span>100% Practical Training</span>
          </div>
          <div className="hero-ctas">
            <a className="primary-button" href="#contact-us">Book Free Demo</a>
            <a className="secondary-button" href="#contact-us">Chat with us on WhatsApp</a>
          </div>
        </section>

        <section className="faq-section">
          <p className="eyebrow">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <FaqItem question="Who can join the DevOps course?" defaultOpen>Students, freshers, working professionals, system administrators, testers, developers, and anyone who wants to start or switch to a DevOps career can join.</FaqItem>
          <FaqItem question="Do I need coding knowledge?">Basic programming knowledge is helpful but not mandatory. We start from fundamentals and guide you step by step.</FaqItem>
          <FaqItem question="What if I miss a class?">All sessions are recorded, so if you miss a class due to work, you can watch the recording and submit doubts via Slack.</FaqItem>
          <FaqItem question="Will I get placement support?">Yes. We provide resume support, interview preparation, job guidance, and placement assistance.</FaqItem>
        </section>
      </main>
      <footer className="footer">
        <div>
          <a className="brand" href="#home"><span>Switch<br />to DevOps</span></a>
          <p>SwitchtoDevOps Academy is India's leading DevOps training institute. We offer live, instructor-led training in Docker, Kubernetes, AWS, Jenkins, Terraform, and Gen AI automation.</p>
        </div>
        <div><h3>Contact Info</h3><p>training@switchtodevops.com</p><p>+91-9911670132</p><p>Bangalore, India (100% Online)</p></div>
        <div><h3>Quick Links</h3><p>Home | About Us | Contact | Courses | Blogs | Learn</p></div>
      </footer>
    </>
  );
}

export default HomePage;
