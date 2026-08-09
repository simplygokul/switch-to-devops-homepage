'use client';

import { useMemo, useState } from 'react';

const navItems = ['Home', 'Courses', 'Blog', 'Learn', 'Contact'];
const basePath = process.env.NODE_ENV === 'production' ? '/switch-to-devops-homepage' : '';
const assetPath = (path) => `${basePath}${path}`;

const heroStats = [
  ['127+', 'Placed'],
  ['Max 10', 'Per Batch'],
  ['₹18L', 'Avg CTC'],
  ['8 Wks', 'Duration'],
];

const mainStats = [
  ['127+', 'Students Placed'],
  ['₹18L', 'Avg Salary CTC'],
  ['Up to 85%', 'Placement Rate'],
  ['Max 10', 'Students/Batch'],
];

const companies = [
  ['TCS', '12 LPA'],
  ['Infosys', '10 LPA'],
  ['Wipro', '11 LPA'],
  ['Flipkart', '20 LPA'],
  ['Razorpay', '22 LPA'],
  ['PhonePe', '20 LPA'],
  ['Swiggy', '18 LPA'],
  ['Accenture', '13 LPA'],
  ['HCL Tech', '10 LPA'],
];

const benefits = [
  {
    title: 'Learn from an AWS DevOps Engineer with 6+ Years Industry Experience',
    copy: 'Your trainer is an active AWS DevOps Engineer at TCS with 6+ years of hands-on experience deploying real production systems — not a full-time instructor reading slides.',
    image: assetPath('/assets/homepage.webp'),
  },
  {
    title: 'Only 10 Students Per Batch – Guaranteed Personal Attention',
    copy: 'We cap every batch at 10 students so you are never lost in a crowd. Every doubt gets answered, every concept gets reinforced, and your progress is tracked individually.',
    image: assetPath('/assets/hero.webp'),
  },
  {
    title: 'Build Real Projects, Not Follow-Along Tutorials',
    copy: 'You will architect and deploy end-to-end systems on live AWS infrastructure — CI/CD pipelines, EKS clusters, Terraform modules — the kind of work that impresses interviewers.',
    image: assetPath('/assets/og.webp'),
  },
  {
    title: 'Live Interactive Classes with Lifetime Recording Access',
    copy: 'Every session is live, interactive and recorded. Missed a class or want to revise before an interview? Access every recording forever at no extra charge.',
    image: assetPath('/assets/hero-mobile.webp'),
  },
];

const curriculum = [
  ['Linux and Shell Scripting for DevOps', '1 week', ['File system, permissions, process management', 'Bash scripting, cron jobs, automation scripts', 'SSH, networking commands, system monitoring']],
  ['Git and GitHub for Version Control', '1 week', ['Branching strategies, merge, rebase', 'Pull requests, code reviews, GitFlow', 'GitHub Actions integration basics']],
  ['Docker Containerization from Scratch', '1 week', ['Images, containers, Dockerfile, multi-stage builds', 'Docker Compose for multi-container apps', 'Container networking, volumes, registries']],
  ['Kubernetes Orchestration on AWS EKS', '2 weeks', ['Pods, Deployments, Services, Ingress', 'Helm charts, namespaces, RBAC', 'EKS cluster setup, auto-scaling, node groups']],
  ['Terraform Infrastructure as Code', '1.5 weeks', ['Providers, resources, variables, outputs', 'State management, remote backends, workspaces', 'Modular Terraform for multi-environment infra']],
  ['Ansible Configuration Management', '1 week', ['Inventory, playbooks, roles, variables', 'Idempotent automation, Ansible Vault', 'Server provisioning and app deployment']],
  ['Jenkins and GitHub Actions CI/CD Pipelines', '1.5 weeks', ['Declarative pipelines, agents, shared libraries', 'GitHub Actions workflows, secrets, matrix builds', 'Integration with SonarQube, Trivy, Nexus']],
  ['ArgoCD GitOps Deployment', '1 week', ['GitOps principles, ArgoCD install on EKS', 'App of apps pattern, sync policies', 'Blue-green and canary deployments']],
  ['Prometheus and Grafana Monitoring and Alerting', '1 week', ['Prometheus scraping, PromQL, recording rules', 'Grafana dashboards, data sources, annotations', 'Alertmanager, PagerDuty integration, runbooks']],
  ['AWS Core Services – EKS, RDS, Aurora, MSK, OpenSearch', '2 weeks', ['VPC, IAM, EKS, ECR, ALB, Route 53', 'RDS Aurora MySQL, multi-AZ, read replicas', 'MSK (Kafka), OpenSearch, parameter store']],
];

const projects = [
  {
    type: 'CI/CD',
    title: 'End-to-End CI/CD Pipeline for a Live E-Commerce Application',
    copy: 'Build a complete pipeline with Jenkins and GitHub Actions. Code pushed to GitHub triggers automated tests, Docker image build, security scan with Trivy, and deployment to EKS via ArgoCD.',
    tools: ['Jenkins', 'GitHub Actions', 'Docker', 'Trivy', 'ArgoCD', 'EKS'],
  },
  {
    type: 'Infrastructure',
    title: 'Multi-Region AWS EKS Deployment with Terraform',
    copy: 'Provision a production-grade EKS cluster across two AWS regions using Terraform modules. Configure VPC, subnets, IAM, node groups, and ALB ingress with zero-downtime failover.',
    tools: ['Terraform', 'AWS EKS', 'VPC', 'IAM', 'ALB', 'Route 53'],
  },
  {
    type: 'GitOps',
    title: 'Blue-Green and Canary Deployment with ArgoCD',
    copy: 'Deploy a microservices application with zero-downtime blue-green and canary strategies on EKS. Use Argo Rollouts to control traffic shifting and automatic rollback on failed health checks.',
    tools: ['ArgoCD', 'Argo Rollouts', 'EKS', 'Helm', 'Istio'],
  },
  {
    type: 'Monitoring',
    title: 'Production Monitoring Stack with Prometheus, Grafana and Alertmanager',
    copy: 'Set up full observability for your EKS workloads. Configure Prometheus scraping, write PromQL alerts, build Grafana dashboards and route alerts to Slack and PagerDuty via Alertmanager.',
    tools: ['Prometheus', 'Grafana', 'Alertmanager', 'PromQL', 'Slack'],
  },
  {
    type: 'Automation',
    title: 'Infrastructure Automation with Ansible Playbooks',
    copy: 'Write idempotent Ansible playbooks to configure EC2 instances, deploy applications, rotate secrets and enforce compliance. Integrate with Terraform for full infrastructure-to-app automation.',
    tools: ['Ansible', 'EC2', 'Ansible Vault', 'Terraform', 'Python'],
  },
];

const tools = ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'AWS EKS', 'AWS RDS', 'AWS MSK', 'Prometheus', 'Grafana', 'Helm', 'SonarQube', 'Trivy', 'Linux'];

const howItWorks = [
  ['10 students max', 'Maximum 10 students Per Batch', "Every batch is hard-capped at 10 students. This is not a marketing claim — it is how we maintain quality. Small batches mean the trainer knows your name, your background, and your weak spots."],
  ['100% live sessions', 'Live Online Classes with Real-Time Doubt Solving', 'Classes run live on Zoom with screen sharing, live coding and instant doubt resolution. No recorded-course approach where you are left googling your own questions.'],
  ['8+ project reviews', 'Weekly Assignments and Project Reviews', 'Each week you submit a hands-on assignment that mirrors a real work task. Your trainer reviews it personally, gives written feedback, and flags gaps before the next module begins.'],
  ['1:1 interview prep', 'One-on-One Mentorship for Interview Preparation', 'In the final weeks you get dedicated one-on-one sessions for mock interviews, resume review and offer negotiation — so you walk into interviews prepared, not nervous.'],
];

const careers = [
  ['DevOps Engineer – Average Salary and Job Roles', '8 – 22 LPA', 'The most in-demand role in the industry. DevOps Engineers build and maintain CI/CD pipelines, manage cloud infrastructure and own the reliability of production deployments. Entry-level roles start at 8 LPA; senior engineers with AWS/Kubernetes expertise command 18–22 LPA.', ['TCS', 'Infosys', 'Wipro', 'Flipkart', 'Razorpay']],
  ['Site Reliability Engineer – What They Do and What They Earn', '15 – 40 LPA', 'SREs sit at the intersection of software engineering and operations. They define SLOs, build automation to eliminate toil, manage incidents and architect for reliability at scale. SRE roles at product companies pay significantly more than traditional ops roles.', ['Swiggy', 'PhonePe', 'Zomato', 'Razorpay', 'Paytm']],
  ['Platform Engineer – The Next Big Career in DevOps', '18 – 45 LPA', 'Platform Engineers build the internal developer platform — the tooling, self-service portals and golden paths that help product teams ship faster. This is the fastest-growing specialisation in DevOps and pays a premium for engineers who can think in systems.', ['Paytm', 'Meesho', 'Zepto', 'Juspay', 'Groww']],
  ['Cloud Engineer and DevOps Architect Career Paths', '20 – 60 LPA', 'Cloud Engineers specialise in designing and operating cloud infrastructure at scale. DevOps Architects lead the strategy and toolchain decisions for entire engineering organisations. Both paths are senior roles that require 4–7 years of hands-on experience.', ['AWS', 'Deloitte', 'Accenture', 'HCL Tech', 'Cognizant']],
  ['Companies Hiring DevOps Engineers Right Now', 'All Levels', 'Demand for DevOps talent is at an all-time high across service companies, product companies and startups. Roles are open across experience levels — from freshers to architects — and many are fully remote.', ['TCS', 'Infosys', 'Wipro', 'Flipkart', 'Razorpay', 'PhonePe', 'Swiggy', 'Paytm']],
];

const testimonials = [
  ['"मतलब ज़ीरो से एक तरीके से उठाया है। तो हर एक चीज़ के लिए"', 'Student Testimonial', 'Career Transition', 'DevOps Professional', '10+ LPA'],
  ['"Practical hands-on training with real-world projects. The mentorship was exceptional."', 'DevOps Student', 'IT Professional', 'DevOps Engineer', '12 LPA'],
];

const transformations = [
  ['Priya Patel', 'Batch 12', 'Cloud DevOps Engineer · Flipkart', '4.5 LPA', 'Support Engineer', '22 LPA', 'Flipkart'],
  ['Rahul Sharma', 'Batch 13', 'DevOps Engineer · Razorpay', '5 LPA', 'System Admin', '19 LPA', 'Razorpay'],
  ['Amit Kumar', 'Batch 14', 'Site Reliability Engineer · PhonePe', '6 LPA', 'Developer', '21 LPA', 'PhonePe'],
  ['Sneha Rao', 'Batch 15', 'AWS DevOps Engineer · TCS', '3.5 LPA', 'Fresher', '14 LPA', 'TCS'],
  ['Kiran Reddy', 'Batch 16', 'Kubernetes Engineer · Infosys', '4 LPA', 'Tester', '15 LPA', 'Infosys'],
  ['Divya Krishnan', 'Batch 17', 'CI/CD Engineer · Wipro', '4 LPA', 'Manual QA', '13 LPA', 'Wipro'],
];

const pricing = [
  ['FOUNDATION', 'Course Duration and Weekly Schedule – L1', 'Beginners · 40 hours · Weekend batches (Sat + Sun)', '15,000', ['Linux Administration & Shell Scripting', 'Git & Version Control (GitHub, GitLab)', 'Docker Basics & Containerization', 'CI/CD Fundamentals with Jenkins', 'AWS Basics (EC2, S3, IAM)', 'Basic Networking & Security', 'Hands-on labs included', 'Course completion certificate', 'Placement assistance'], 'Enroll in L1', 'Entry-level DevOps roles (4-8 LPA)'],
  ['MOST POPULAR', 'Course Fee and Payment Options – L2', 'Most popular · 50 hours · EMI available · Weekend batches', '35,000', ['All L1 Topics (Advanced Level)', 'Advanced Docker & Kubernetes', 'Jenkins Pipelines & GitOps (ArgoCD, Flux)', 'Terraform & Infrastructure as Code', 'AWS/Azure Cloud Services & Deployment', 'Monitoring (Prometheus, Grafana, ELK)', 'Ansible & Configuration Management', '8+ Real-world DevOps Projects', 'DevOps Project Portfolio', 'Resume building & interview preparation'], 'Enroll in L2', 'DevOps Engineer (8-18 LPA)'],
  ['EXPERT', 'What is Included in the Course Fee – L3', 'Expert level · 150 hours · Full mentorship + placement', '70,000', ['All L1 + L2 Topics (Expert Level)', 'Advanced Kubernetes & Service Mesh (Istio)', 'Advanced Cloud Architecture & Multi-Cloud', 'Service Mesh & Production Deployment', 'Multi-Cloud Architecture (AWS + Azure + GCP)', 'DevSecOps & Security Automation', 'SRE Principles & Incident Management', 'Advanced Monitoring & Observability', 'Chaos Engineering & Resilience', 'Capstone: Complete Production Infrastructure'], 'Enroll in L3', 'Senior DevOps/SRE Engineer (18-40+ LPA)'],
];

const faqs = [
  ['Why do you only accept 10 students per batch?', "We deliberately keep batches small because DevOps requires hands-on practice and personalized feedback. With 10 students, I can review every student's Terraform code, debug their Kubernetes deployments in real-time, and provide specific career guidance based on their background. Large institutes run 30-40 student batches where you're just a number. Here, I know each student's strengths and weak areas by week 2. That's why our placement rate is up to 85% — personalized attention works."],
  ['Can I see the actual AWS projects before enrolling?', "Yes. Visit our GitHub repository at github.com/switchtodevops/student-projects (public repo) to see completed projects from previous batches. You'll find: (1) E-commerce app with Jenkins CI/CD pipeline deployed on EKS, (2) Multi-region Terraform infrastructure with state management, (3) Production monitoring stack with Prometheus and Grafana. During the free demo session, I walk through one complete project live — showing the architecture, code, and deployment process."],
  ["What's your refund policy if I don't get placed?", 'We offer a 100% refund if you complete all 8 weeks, submit all 5 projects, attend 90% of classes, and don\'t receive a job offer within 6 months of course completion. However, in 4 years of running this program, only 2 students have requested refunds (both got placed in month 7). The key is "complete the course" — students who finish all projects and actively apply get placed. We don\'t guarantee placement for students who drop out halfway or don\'t complete assignments.'],
  ['How is this different from 1,000 Udemy courses?', 'Udemy courses are pre-recorded videos. You watch alone, get stuck, and quit. Our training is 100% live — you deploy on real AWS infrastructure during class, I debug your errors in real-time, and you get immediate answers. The batch size of 10 means I review your code personally. Udemy has no placement support, no resume reviews, no mock interviews, and no alumni network. Our students get internal referrals from 500+ alumni at companies like Flipkart, Razorpay, and Swiggy. That network alone is worth more than 35,000.'],
  ['Do I need to buy AWS credits or pay extra for cloud resources?', "No. The 35,000 course fee includes everything — AWS credits for all 5 projects (approximately $50 worth), access to our shared EKS clusters for practice, all course materials, lifetime recording access, and placement support. You don't pay anything extra. We provide AWS accounts with pre-configured IAM permissions so you can start deploying from day 1 without worrying about billing."],
  ["What if I'm currently working — can I manage the course schedule?", 'Yes. 70% of our students are working professionals. We offer two batch timings: (1) Weekday evening batch: Mon-Thu 7-9:30 PM IST, (2) Weekend batch: Sat-Sun 10 AM-1 PM IST. All sessions are recorded, so if you miss a class due to work, you can watch the recording and submit doubts via Slack. The course is designed for working professionals — assignments take 3-5 hours per week, which you can complete on weekends.'],
  ["Who is the instructor and what's their background?", "I'm Firoz Khan, AWS Certified Solutions Architect and former DevOps Lead at TCS where I managed a team of 12 engineers running 38 microservices across 4 AWS regions. I've handled production incidents at 2 AM, optimized cloud costs from $45K to $28K per month, and interviewed 200+ DevOps candidates. I don't teach theory from slides — I teach what actually works in production environments based on 8 years of hands-on experience. You can verify my credentials on LinkedIn: linkedin.com/in/firoz-khan-devops"],
  ['How many students actually get placed and at what salary?', "Up to 85% of students who complete the course get placed within 3 months. Average starting salary: 8.2 LPA for freshers, 12.5 LPA for professionals with 2-3 years experience. Our highest placement this year: 22 LPA at Flipkart Bangalore. We share verified placement details — company names and roles — with prospective students on request. We don't hide our numbers — transparency builds trust."],
  ['What happens after I complete the course?', "You get lifetime access to: (1) All course recordings and materials, (2) Our private Slack community with 500+ alumni, (3) Monthly alumni meetups where we discuss new tools and interview patterns, (4) Continued placement support — resume updates, mock interviews, referrals — even 2 years after completing the course. Many alumni return for advanced topics like Kubernetes CKA prep or Terraform deep dives. Once you join, you're part of the SwitchToDevOps family permanently."],
  ['Can I talk to a current student or alumni before enrolling?', "Absolutely. We encourage it. During your free demo session, I'll connect you with 2-3 alumni from your city or background (e.g., if you're from Chennai and working at TCS, I'll connect you with alumni who were in the same situation). You can ask them anything — course quality, placement support, whether it's worth 35,000. We have nothing to hide. Real testimonials with LinkedIn profiles are on our website — not fake reviews with stock photos."],
];

const resourceGroups = [
  ['DevOps Courses by Location', ['DevOps Course in Bangalore — Popular — Whitefield, Koramangala, Electronic City', 'DevOps Course in Mumbai — BFSI & fintech focus · BKC, Powai, Andheri', 'DevOps Course in Hyderabad — HITEC City, Gachibowli, Financial District', 'DevOps Course in Pune — Hinjewadi, Kharadi, Baner product hubs', 'DevOps Course in Chennai — OMR SaaS belt, Guindy, Ambattur', 'DevOps Course in Delhi NCR — Gurgaon, Noida, South Delhi', 'DevOps Course in Kolkata — Salt Lake Sector V, New Town']],
  ['Career Guides', ['Is DevOps a Good Career? — Complete career analysis for 2026', 'DevOps vs Cloud Engineer — Salary comparison in India', 'Top DevOps Companies — Highest paying companies in India', 'DevOps Engineer Salary in India — Realistic 2026 pay by experience', 'Remote DevOps Jobs — Work-from-anywhere roles & pay', 'Career Switch at 30+ — Real success stories & strategy', 'Service vs Product Companies — Which path fits you?']],
  ['Learning Resources', ['Start DevOps from Zero — Complete beginner\'s guide', 'DevOps Fundamentals — Core concepts explained', 'DevOps Roadmap — Step-by-step guide for freshers', 'Docker Explained — Containers for beginners', 'Kubernetes Explained — Orchestration made simple', 'Linux for DevOps — The essential foundation skill', 'CI/CD Pipeline Explained — Automation made simple']],
];

const blogPosts = [
  ['Career Guide', 'DevOps Roadmap for Freshers 2026: Step-by-Step Guide', '20 Mar 2026', 'Ravi Shankar'],
  ['DevOps', 'How to Start DevOps from Zero in 2026: Beginners Guide', '18 Mar 2026', 'Amit Verma'],
  ['Interview Prep', 'DevOps Interview Questions 2026: Complete Preparation Guide', '15 Mar 2026', 'Priya Singh'],
  ['Salary', 'DevOps Engineer Salary in India 2026: Complete Guide', '12 Mar 2026', 'Kiran Mehta'],
  ['Kubernetes', 'Why 87% DevOps Jobs Require Kubernetes Skills in 2026', '10 Mar 2026', 'Deepak Nair'],
  ['Comparison', 'DevOps vs Cloud Engineer: Salary & Career Comparison India 2026', '8 Mar 2026', 'Sanya Kapoor'],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="SwitchtoDevOps home">
        <span className="brand-mark">↥</span>
        <span>Switch<span>to DevOps</span></span>
      </a>
      <button className="menu-button" type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{item}</a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="outline-button" href="https://wa.me/919911670132">Chat on WhatsApp</a>
        <a className="solid-button" href="#contact">Book Free Demo</a>
      </div>
    </header>
  );
}

function CommandCenter() {
  const lines = ['Initializing pipeline', 'Code checkout', 'Install dependencies', 'Run unit tests', 'Build Docker image', 'Deploy to Kubernetes', 'Health checks', 'Application is live!'];

  return (
    <div className="command-center" aria-label="Deployment Command Center">
      <div className="terminal-panel">
        <p className="panel-label">DEPLOYMENT COMMAND CENTER</p>
        <div className="terminal-lines">
          {lines.map((line, index) => (
            <div className="terminal-line" key={line}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <code>{index === 0 ? '$ ' : '> '}{line}</code>
              <time>10:{24 + index}:3{index}</time>
            </div>
          ))}
        </div>
      </div>
      <div className="infra-panel">
        <p className="panel-label">INFRASTRUCTURE OVERVIEW</p>
        <div className="infra-map">
          <span>Nginx<br />Load Balancer</span>
          <span>App Service</span>
          <span>App Service</span>
          <span>Redis<br />Cache</span>
          <span>PostgreSQL<br />DB</span>
        </div>
      </div>
      <div className="health-grid">
        <article><strong>100%</strong><span>System Health</span></article>
        <article><strong>23%</strong><span>CPU Usage</span><i /></article>
        <article><strong>24</strong><span>Deployments</span><b /></article>
      </div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return (
    <div className={`section-intro ${dark ? 'dark' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <article className="faq-item">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{item[0]}</span>
        <b>{open ? '−' : '+'}</b>
      </button>
      <p hidden={!open}>{item[1]}</p>
    </article>
  );
}

export default function HomePage() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const project = projects[activeProject];
  const testimonial = testimonials[activeTestimonial];
  const tickerCompanies = useMemo(() => [...companies, ...companies], []);

  return (
    <>
      <div className="watermark">Working Concept — Saradhi Tech</div>
      <Header />
      <main id="home">
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">BATCH STARTS JULY 12 · ONLY 3 SEATS LEFT</p>
              <h1>Live DevOps Course —<span>Get Hired as a DevOps Engineer</span><em>Earn ₹15–25 LPA</em></h1>
              <p>8-week live course · Real AWS projects · Max 10 students/batch</p>
              <div className="hero-stats">
                {heroStats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
              </div>
              <div className="button-row">
                <a className="solid-button" href="#contact">Book Free Demo</a>
                <a className="outline-button" href="#courses">View Curriculum</a>
              </div>
              <p className="hero-note">Course fee from ₹15,000 · EMI available · GenAI included</p>
              <p className="hero-note">Free demo · No payment required · Cancel anytime</p>
            </div>
            <CommandCenter />
          </div>
          <div className="company-strip">
            <p>Our Students Are Hired At — With Real Salary Packages</p>
            <div><div>{tickerCompanies.map(([name, salary], index) => <span key={`${name}-${index}`}>{name} ↑ {salary}</span>)}</div></div>
          </div>
          <div className="stat-ribbon">
            {mainStats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
          </div>
        </section>

        <section className="benefits-section">
          <SectionIntro eyebrow="Why Choose Us" title="Why Choose SwitchToDevOps for Your DevOps Career" copy="Four reasons our students get hired faster than any other DevOps course" />
          <div className="benefit-layout">
            {benefits.map((benefit, index) => (
              <article className="benefit-card" key={benefit.title}>
                <img src={benefit.image} alt="" />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap-section" id="courses">
          <div className="roadmap-shell">
            <SectionIntro dark eyebrow="Curriculum" title="DevOps Course Curriculum" copy="A production-grade curriculum covering every tool DevOps engineers use on the job" />
            <div className="roadmap-track">
              {curriculum.map(([title, duration, bullets], index) => (
                <article key={title}>
                  <b>{index + 1}</b>
                  <span>{duration}</span>
                  <h3>{title}</h3>
                  <p>{bullets[0]}</p>
                </article>
              ))}
            </div>
            <div className="module-details">
              {curriculum.map(([title, duration, bullets]) => (
                <article key={`${title}-details`}>
                  <h3>{title}</h3>
                  <span>{duration}</span>
                  <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </article>
              ))}
            </div>
            <a className="solid-button" href="#courses">View Full DevOps Roadmap</a>
          </div>
        </section>

        <section className="projects-section">
          <SectionIntro eyebrow="Real Projects" title="Hands-On DevOps Projects You Will Build During the Course" copy="Every project runs on real AWS infrastructure — the same stack companies hire for" />
          <div className="project-console">
            <div className="project-tabs">
              {projects.map((item, index) => <button type="button" key={item.title} className={index === activeProject ? 'active' : ''} onClick={() => setActiveProject(index)}>{item.type}</button>)}
            </div>
            <div className="project-stage">
              <div className="architecture-map" aria-hidden="true">
                {['Users', 'Nginx', 'App Server', 'DB (RDS)', 'Docker', 'S3 (Storage)'].map((node) => <span key={node}>{node}</span>)}
              </div>
              <div className="deploy-log">
                {['terraform apply', 'aws eks update-kubeconfig', 'docker build -t myapp .', 'docker push myapp:latest', 'kubectl apply -f k8s/', 'kubectl rollout status deployment/app'].map((line) => <code key={line}>$ {line}</code>)}
                <strong>Deployment successfully rolled out!</strong>
              </div>
              <article className="project-copy">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <a className="outline-button" href="#projects">How DevOps Scales Real Production Systems</a>
              </article>
            </div>
          </div>
        </section>

        <section className="tools-section">
          <SectionIntro eyebrow="Tools" title="DevOps Tools Covered in This Course" copy="Every tool in this list is used in real production environments — not just demo projects" />
          <div className="tool-cloud">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          <a href="#learn">See Which Tools to Learn First</a>
        </section>

        <section className="industry-section" id="learn">
          <div>
            <p className="eyebrow">Industry-Ready DevOps Training</p>
            <h2>Learn.<br />Build.<br />Deploy.</h2>
            <p>Accelerate your career in DevOps with hands-on AWS projects, real CI/CD pipelines, and live mentorship — not pre-recorded videos.</p>
            <div className="industry-stats"><span>100% Practical Training</span><span>10 Students Per Batch</span><span>6+ Years AWS Experience</span></div>
            <div className="button-row"><a className="solid-button" href="#contact">Start Your Journey Today</a><a className="outline-button" href="#courses">View DevOps Roadmap</a></div>
          </div>
          <div className="trainer-panel">
            <img src={assetPath('/assets/mentor7.jpeg')} alt="Firoz Ahmed" />
            <div>
              <p className="eyebrow">Your Trainer</p>
              <h2>Meet Your DevOps Trainer</h2>
              <p>Learn from a practising AWS DevOps engineer — not someone who teaches full-time without touching production code</p>
              <h3>Firoz Ahmed</h3>
              <p>AWS DevOps Engineer · TCS · 6+ Years Experience</p>
              <div className="chips">{['EKS', 'ArgoCD', 'Terraform', 'Aurora MySQL', 'MSK Kafka'].map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>
          <div className="trainer-facts">
            {[
              ['6+ Years as AWS DevOps Engineer at TCS', 'Not a full-time trainer — an active engineer who works with production AWS infrastructure daily and brings current, real-world knowledge to every class.'],
              ['Deployed 38 Java Microservices Across Multi-Region AWS Infrastructure', 'Led the architecture and deployment of 38 Java microservices across multi-region AWS — the kind of project that most DevOps engineers only read about.'],
              ['Expertise in EKS, ArgoCD, Terraform, Aurora MySQL, MSK Kafka', 'Deep hands-on expertise in the full modern DevOps stack including EKS, ArgoCD GitOps, Terraform IaC, Aurora MySQL and MSK Kafka — tools companies are actively hiring for.'],
              ['Having training experience in Academy with Proven Student Results', 'Having training experience with a track record of students landing roles at TCS, Infosys, Wipro, startups and product companies within months of completing the course.'],
            ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="process-section">
          <SectionIntro eyebrow="How It Works" title="How Our Small Batch DevOps Training Works" copy="A structured 8-week programme designed so no student gets left behind" />
          <div className="process-grid">{howItWorks.map(([metric, title, copy]) => <article key={title}><strong>{metric}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="button-row"><a className="solid-button" href="#contact">Book a Free Demo Class</a><a className="outline-button light" href="#careers">Is DevOps a Good Career?</a></div>
        </section>

        <section className="career-section" id="careers">
          <SectionIntro eyebrow="Career Paths" title="DevOps Engineer Salary and Career Opportunities" copy="DevOps is one of the highest-paying engineering disciplines in India — here is what you can earn" />
          <div className="career-list">{careers.map(([title, salary, copy, names]) => <article key={title}><strong>{salary}</strong><h3>{title}</h3><p>{copy}</p><div>{names.map((name) => <span key={name}>{name}</span>)}</div></article>)}</div>
          <a href="#blog">Read Full DevOps Salary Guide 2026</a>
        </section>

        <section className="proof-section">
          <div className="story-visual" aria-hidden="true" />
          <article className="story-card">
            <SectionIntro eyebrow="" title="What Our Students Say About This DevOps Course" copy="Real stories from real alumni — watch their journey" />
            <p className="quote">{testimonial[0]}</p>
            <div className="story-meta"><strong>{testimonial[1]}</strong><span>Before: {testimonial[2]}</span><span>Now: {testimonial[3]}</span><b>{testimonial[4]}</b></div>
            <div className="dots">{testimonials.map((item, index) => <button type="button" key={item[1]} className={activeTestimonial === index ? 'active' : ''} onClick={() => setActiveTestimonial(index)} aria-label={`Show ${item[1]}`} />)}</div>
          </article>
        </section>

        <section className="transform-section">
          <SectionIntro eyebrow="Student Transformations" title="Real Students. Real Salaries." copy="Every card below is a real career transformation — before and after joining SwitchToDevOps" />
          <div className="transform-grid">{transformations.map(([name, batch, role, beforePay, beforeRole, afterPay, afterCompany]) => <article key={name}><span>{batch}</span><h3>{name}</h3><p>{role}</p><div><b>Before</b><strong>{beforePay}</strong><small>{beforeRole}</small></div><em>→</em><div><b>After</b><strong>{afterPay}</strong><small>{afterCompany}</small></div></article>)}</div>
        </section>

        <section className="pricing-section">
          <SectionIntro eyebrow="PRICING" title="DevOps Course Fee, Duration and Batch Details" copy="Transparent pricing with no hidden fees — pick the level that matches your goals" />
          <div className="pricing-grid">{pricing.map(([tier, title, meta, price, items, cta, outcome]) => <article key={tier}><span>{tier}</span><h3>{title}</h3><p>{meta}</p><strong>{price}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><a className="solid-button" href="#contact">{cta}</a><small>{outcome}</small></article>)}</div>
          <div className="pricing-notes">{['EMI Available — Pay in easy installments', 'Money-Back Guarantee — 100% refund within first week', 'Limited Batch Size — Only 10 students per batch', 'Referral Bonus — 2,000 off for both referrer & referee'].map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section className="demo-section" id="contact">
          <div>
            <p className="eyebrow">LIMITED SEATS AVAILABLE</p>
            <h2>Book a Free DevOps Demo Session</h2>
            <p>In your free demo you will build a live CI/CD pipeline from scratch — not watch a slideshow. It takes 45 minutes and shows you exactly what the full course feels like.</p>
            <ul><li>Free career counseling session</li><li>Personalized learning roadmap</li><li>Get access to sample classes</li><li>No payment required to start</li></ul>
            <strong>Only 3 Seats Left for Next Batch</strong>
            <span>Small-batch cohort · max 10 students per batch</span>
          </div>
          <form>
            <h3>Book FREE Demo Class</h3>
            <label>Your Full Name *</label>
            <input type="text" />
            <label>Mobile number with country code *</label>
            <input type="tel" />
            <label>Email *</label>
            <input type="email" />
            <button className="solid-button" type="button">Book FREE Demo</button>
            <p>Our Students Work At: TCS · Infosys · Wipro · Accenture · Cognizant · HCL</p>
          </form>
        </section>

        <section className="faq-section">
          <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions About DevOps Training" copy="Everything you need to know before enrolling" />
          {faqs.map((item, index) => <FaqItem key={item[0]} item={item} index={index} />)}
          <div className="question-cta"><h3>Still have questions?</h3><p>Our team is here to help you make the right decision</p><a className="outline-button light" href="https://wa.me/919911670132">Chat with us on WhatsApp</a></div>
        </section>

        <section className="resources-section">
          <SectionIntro eyebrow="Keep Exploring" title="Explore More DevOps Resources" />
          <div className="resource-grid">{resourceGroups.map(([title, items]) => <article key={title}><h3>{title}</h3>{items.map((item) => <p key={item}>{item}</p>)}</article>)}</div>
          <a className="solid-button" href="#contact">Enroll in DevOps Course Now</a>
        </section>

        <section className="blog-section" id="blog">
          <SectionIntro eyebrow="" title="Latest From Our Blog" copy="Stay updated with the latest trends, tips, and insights from our experts" />
          <div className="blog-grid">{blogPosts.map(([tag, title, date, author]) => <article key={title}><span>Featured · {tag}</span><h3>{title}</h3><p>{date}</p><strong>{author}</strong></article>)}</div>
          <a href="#blog">View All Blog Posts</a>
        </section>
      </main>
      <footer className="site-footer">
        <div><a className="brand" href="#home"><span className="brand-mark">↥</span><span>Switch<span>to DevOps</span></span></a><p>SwitchtoDevOps Academy is India's leading DevOps training institute. We offer live, instructor-led training in Docker, Kubernetes, AWS, Jenkins, Terraform, and Gen AI automation. 500+ engineers trained, with dedicated placement assistance.</p><p>Learning Partner: In association with ShiftToTech Academy — offering career-focused DevOps, Cloud, AI & Data Engineering courses.</p></div>
        <div><h3>Courses & Resources</h3><p>DevOps Certification Course · DevOps Course with GenAI · Course Fees (Transparent) · DevOps & Cloud Training · Docker & Kubernetes · AWS DevOps Course · Terraform Course · Jenkins CI/CD · Kubernetes (CKA) · DevOps Certifications · DevOps Course Mumbai · DevOps Course Bangalore · DevOps Course Delhi NCR · DevOps Course Pune · DevOps Course Kolkata · DevOps Course Noida · DevOps Course Gurugram · DevOps Roadmap 2026 · How to Start DevOps · Interview Questions · DevOps Salary India · Why Kubernetes Matters · DevOps vs Cloud Engineer · DevOps Tools Guide · Placement Assistance · DevOps Course Hyderabad · DevOps Course Chennai · Best DevOps Institute India · Blog & Resources</p></div>
        <div><h3>Contact Info</h3><p>training@switchtodevops.com</p><p>India Office</p><p>+91-9911670132</p><p>Bangalore, India (100% Online)</p><p>Live classes via Zoom</p></div>
        <div><h3>Legal & Policies</h3><p>Home | About Us | Contact | Courses | Blogs | Learn | Privacy | Terms | Refunds | Shipping</p><p>Privacy Policy — Your data is safe · Terms & Conditions — Service terms · Refund Policy — 7-day guarantee</p><p>Get full refund within 7 days if not satisfied with the course content. We value your privacy. Your personal details are kept safe and never shared with third parties.</p><p>Operated by: Firoz Ahmed</p><p>Registered Address: No- 33 , 1st Floor, 1st Main, CBI Main Rd, HMT Layout, Bengaluru, Karnataka 560032</p><p>Email: Training@switchtodevops.com</p><p>GST not applicable – not registered under GST</p></div>
        <div className="footer-bottom"><p>© 2026 SwitchtoDevOps Academy. All Rights Reserved.</p><p>Call Now · Chat on WhatsApp · Book Free Demo</p></div>
      </footer>
    </>
  );
}
