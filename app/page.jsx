'use client';

import { useEffect, useState } from 'react';

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
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}

function FaqItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq-item">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span aria-hidden="true">{open ? '-' : '+'}</span>
      </button>
      <p hidden={!open}>{children}</p>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="SwitchtoDevOps home">
        <span>Switch<span>to</span>DevOps</span>
        <small>Learn. Build. Deploy.</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#contact-us" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
        <a href="#learn" onClick={() => setMenuOpen(false)}>Learn</a>
      </nav>
      <div className="header-actions">
        <a className="whatsapp-button" href="https://wa.me/919911670132" aria-label="Chat with us on WhatsApp">
          <span aria-hidden="true">WA</span>
          <span className="whatsapp-label">WhatsApp</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="watermark">Working Concept — Saradhi Tech</div>
      <Header />

      <main>
        <section className="hero section-shell" id="home">
          <div className="concept-stamp hero-stamp">Working Concept — Saradhi Tech</div>
          <div className="hero-copy">
            <div className="eyebrow">BATCH STARTS JULY 12 · ONLY 3 SEATS LEFT</div>
            <h1>Live DevOps Course —<br />Get Hired as a DevOps Engineer<br />Earn ₹15–25 LPA</h1>
            <p>8-week live course · Real AWS projects · Max 10 students/batch</p>
            <div className="mini-stats">
              <span><strong>127+</strong>Placed</span>
              <span><strong>Max 10</strong>Per Batch</span>
              <span><strong>₹18L</strong>Avg CTC</span>
              <span><strong>8 Wks</strong>Duration</span>
            </div>
            <div className="hero-ctas">
              <a className="primary-button big" href="#contact-us">Book Free Demo</a>
              <a className="secondary-button big" href="#curriculum">View Curriculum</a>
            </div>
            <p className="fine-print">Course fee from ₹15,000 · EMI available · GenAI included</p>
            <p className="fine-print">Free demo · No payment required · Cancel anytime</p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbital"><span></span><span></span><span></span><span></span><span></span><span></span><div className="loop"></div><div className="core-pulse"></div></div>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-heading compact">
            <h2>Our Students Are Hired At — With Real Salary Packages</h2>
          </div>
          <div className="company-grid marquee">
            {['TCS↑ 12 LPA', 'Infosys↑ 10 LPA', 'Wipro↑ 11 LPA', 'Flipkart↑ 20 LPA', 'Razorpay↑ 22 LPA', 'PhonePe↑ 20 LPA', 'Swiggy↑ 18 LPA', 'Accenture↑ 13 LPA', 'HCL Tech↑ 10 LPA', 'TCS↑ 12 LPA', 'Infosys↑ 10 LPA', 'Wipro↑ 11 LPA', 'Flipkart↑ 20 LPA', 'Razorpay↑ 22 LPA', 'PhonePe↑ 20 LPA', 'Swiggy↑ 18 LPA', 'Accenture↑ 13 LPA', 'HCL Tech↑ 10 LPA'].map((company, index) => (
              <article key={`${company}-${index}`}><b>{company.slice(0, 2).toUpperCase()}</b><span>{company}</span></article>
            ))}
          </div>
        </section>

        <section className="stats-grid section-shell" aria-label="Placement highlights">
          <article className="stat-card"><strong>127+</strong><span>Students Placed</span></article>
          <article className="stat-card"><strong>₹18L</strong><span>Avg Salary CTC</span></article>
          <article className="stat-card"><strong>Up to 85%</strong><span>Placement Rate</span></article>
          <article className="stat-card"><strong>Max 10</strong><span>Students/Batch</span></article>
        </section>

        <section className="section-shell" id="about-us">
          <div className="section-heading">
            <div className="section-kicker">Why Choose Us</div>
            <h2>Why Choose SwitchToDevOps for Your DevOps Career</h2>
            <p>Four reasons our students get hired faster than any other DevOps course</p>
          </div>
          <div className="why-grid">
            <article className="feature-card"><span className="icon-mark">01</span><h3>Learn from an AWS DevOps Engineer with 6+ Years Industry Experience</h3><p>Your trainer is an active AWS DevOps Engineer at TCS with 6+ years of hands-on experience deploying real production systems — not a full-time instructor reading slides.</p></article>
            <article className="feature-card"><span className="icon-mark">02</span><h3>Only 10 Students Per Batch – Guaranteed Personal Attention</h3><p>We cap every batch at 10 students so you are never lost in a crowd. Every doubt gets answered, every concept gets reinforced, and your progress is tracked individually.</p></article>
            <article className="feature-card"><span className="icon-mark">03</span><h3>Build Real Projects, Not Follow-Along Tutorials</h3><p>You will architect and deploy end-to-end systems on live AWS infrastructure — CI/CD pipelines, EKS clusters, Terraform modules — the kind of work that impresses interviewers.</p></article>
            <article className="feature-card"><span className="icon-mark">04</span><h3>Live Interactive Classes with Lifetime Recording Access</h3><p>Every session is live, interactive and recorded. Missed a class or want to revise before an interview? Access every recording forever at no extra charge.</p></article>
          </div>
        </section>

        <section className="section-shell" id="curriculum">
          <div className="section-heading">
            <div className="section-kicker">Curriculum</div>
            <h2>DevOps Course Curriculum</h2>
            <p>A production-grade curriculum covering every tool DevOps engineers use on the job</p>
          </div>
          <div className="course-grid curriculum-grid">
            <article className="course-card"><h3>Linux and Shell Scripting for DevOps</h3><strong>1 week</strong><ul><li>File system, permissions, process management</li><li>Bash scripting, cron jobs, automation scripts</li><li>SSH, networking commands, system monitoring</li></ul></article>
            <article className="course-card"><h3>Git and GitHub for Version Control</h3><strong>1 week</strong><ul><li>Branching strategies, merge, rebase</li><li>Pull requests, code reviews, GitFlow</li><li>GitHub Actions integration basics</li></ul></article>
            <article className="course-card"><h3>Docker Containerization from Scratch</h3><strong>1 week</strong><ul><li>Images, containers, Dockerfile, multi-stage builds</li><li>Docker Compose for multi-container apps</li><li>Container networking, volumes, registries</li></ul></article>
            <article className="course-card"><h3>Kubernetes Orchestration on AWS EKS</h3><strong>2 weeks</strong><ul><li>Pods, Deployments, Services, Ingress</li><li>Helm charts, namespaces, RBAC</li><li>EKS cluster setup, auto-scaling, node groups</li></ul></article>
            <article className="course-card"><h3>Terraform Infrastructure as Code</h3><strong>1.5 weeks</strong><ul><li>Providers, resources, variables, outputs</li><li>State management, remote backends, workspaces</li><li>Modular Terraform for multi-environment infra</li></ul></article>
            <article className="course-card"><h3>Ansible Configuration Management</h3><strong>1 week</strong><ul><li>Inventory, playbooks, roles, variables</li><li>Idempotent automation, Ansible Vault</li><li>Server provisioning and app deployment</li></ul></article>
            <article className="course-card"><h3>Jenkins and GitHub Actions CI/CD Pipelines</h3><strong>1.5 weeks</strong><ul><li>Declarative pipelines, agents, shared libraries</li><li>GitHub Actions workflows, secrets, matrix builds</li><li>Integration with SonarQube, Trivy, Nexus</li></ul></article>
            <article className="course-card"><h3>ArgoCD GitOps Deployment</h3><strong>1 week</strong><ul><li>GitOps principles, ArgoCD install on EKS</li><li>App of apps pattern, sync policies</li><li>Blue-green and canary deployments</li></ul></article>
            <article className="course-card"><h3>Prometheus and Grafana Monitoring and Alerting</h3><strong>1 week</strong><ul><li>Prometheus scraping, PromQL, recording rules</li><li>Grafana dashboards, data sources, annotations</li><li>Alertmanager, PagerDuty integration, runbooks</li></ul></article>
            <article className="course-card"><h3>AWS Core Services – EKS, RDS, Aurora, MSK, OpenSearch</h3><strong>2 weeks</strong><ul><li>VPC, IAM, EKS, ECR, ALB, Route 53</li><li>RDS Aurora MySQL, multi-AZ, read replicas</li><li>MSK (Kafka), OpenSearch, parameter store</li></ul></article>
          </div>
          <div className="center-cta"><a className="secondary-button" href="#curriculum">View Full DevOps Roadmap</a></div>
        </section>

        <section className="section-shell" id="courses">
          <div className="section-heading">
            <div className="section-kicker">Real Projects</div>
            <h2>Hands-On DevOps Projects You Will Build During the Course</h2>
            <p>Every project runs on real AWS infrastructure — the same stack companies hire for</p>
          </div>
          <div className="course-grid">
            <article className="course-card"><span className="section-kicker">CI/CD</span><h3>End-to-End CI/CD Pipeline for a Live E-Commerce Application</h3><p>Build a complete pipeline with Jenkins and GitHub Actions. Code pushed to GitHub triggers automated tests, Docker image build, security scan with Trivy, and deployment to EKS via ArgoCD.</p><p>Jenkins GitHub Actions Docker Trivy ArgoCD EKS</p></article>
            <article className="course-card"><span className="section-kicker">Infrastructure</span><h3>Multi-Region AWS EKS Deployment with Terraform</h3><p>Provision a production-grade EKS cluster across two AWS regions using Terraform modules. Configure VPC, subnets, IAM, node groups, and ALB ingress with zero-downtime failover.</p><p>Terraform AWS EKS VPC IAM ALB Route 53</p></article>
            <article className="course-card"><span className="section-kicker">GitOps</span><h3>Blue-Green and Canary Deployment with ArgoCD</h3><p>Deploy a microservices application with zero-downtime blue-green and canary strategies on EKS. Use Argo Rollouts to control traffic shifting and automatic rollback on failed health checks.</p><p>ArgoCD Argo Rollouts EKS Helm Istio</p></article>
            <article className="course-card"><span className="section-kicker">Monitoring</span><h3>Production Monitoring Stack with Prometheus, Grafana and Alertmanager</h3><p>Set up full observability for your EKS workloads. Configure Prometheus scraping, write PromQL alerts, build Grafana dashboards and route alerts to Slack and PagerDuty via Alertmanager.</p><p>Prometheus Grafana Alertmanager PromQL Slack</p></article>
            <article className="course-card"><span className="section-kicker">Automation</span><h3>Infrastructure Automation with Ansible Playbooks</h3><p>Write idempotent Ansible playbooks to configure EC2 instances, deploy applications, rotate secrets and enforce compliance. Integrate with Terraform for full infrastructure-to-app automation.</p><p>Ansible EC2 Ansible Vault Terraform Python</p></article>
          </div>
          <div className="center-cta"><a className="secondary-button" href="#courses">How DevOps Scales Real Production Systems</a></div>
        </section>

        <section className="section-shell">
          <div className="section-heading">
            <div className="section-kicker">Tools</div>
            <h2>DevOps Tools Covered in This Course</h2>
            <p>Every tool in this list is used in real production environments — not just demo projects</p>
          </div>
          <div className="tool-cloud tool-panel">
            {['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'AWS EKS', 'AWS RDS', 'AWS MSK', 'Prometheus', 'Grafana', 'Helm', 'SonarQube', 'Trivy', 'Linux'].map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <div className="center-cta"><a className="secondary-button" href="#curriculum">See Which Tools to Learn First</a></div>
        </section>

      <section className="split-section section-shell">
          <div className="concept-stamp">Working Concept — Saradhi Tech</div>
          <div>
            <div className="section-kicker">Industry-Ready DevOps Training</div>
            <h2>Learn. Build. Deploy.</h2>
            <p>Accelerate your career in DevOps with hands-on AWS projects, real CI/CD pipelines, and live mentorship — not pre-recorded videos.</p>
            <div className="mini-stats"><span><strong>100%</strong>Practical Training</span><span><strong>10</strong>Students Per Batch</span><span><strong>6+</strong>Years AWS Experience</span></div>
            <div className="hero-ctas"><a className="primary-button" href="#contact-us">Start Your Journey Today</a><a className="secondary-button" href="#curriculum">View DevOps Roadmap</a></div>
          </div>
          <div className="trainer-card no-photo">
            <div className="trainer-avatar" aria-hidden="true">FA</div>
            <div><span>Your Trainer</span><h2>Meet Your DevOps Trainer</h2><p>Learn from a practising AWS DevOps engineer — not someone who teaches full-time without touching production code</p></div>
          </div>
        </section>

        <section className="section-shell">
          <div className="course-grid trainer-facts">
            <article className="course-card"><h3>Firoz Ahmed</h3><p>AWS DevOps Engineer</p><p>TCS · 6+ Years Experience</p><p>EKS ArgoCD Terraform Aurora MySQL MSK Kafka</p></article>
            <article className="course-card"><h3>6+ Years as AWS DevOps Engineer at TCS</h3><p>Not a full-time trainer — an active engineer who works with production AWS infrastructure daily and brings current, real-world knowledge to every class.</p></article>
            <article className="course-card"><h3>Deployed 38 Java Microservices Across Multi-Region AWS Infrastructure</h3><p>Led the architecture and deployment of 38 Java microservices across multi-region AWS — the kind of project that most DevOps engineers only read about.</p></article>
            <article className="course-card"><h3>Expertise in EKS, ArgoCD, Terraform, Aurora MySQL, MSK Kafka</h3><p>Deep hands-on expertise in the full modern DevOps stack including EKS, ArgoCD GitOps, Terraform IaC, Aurora MySQL and MSK Kafka — tools companies are actively hiring for.</p></article>
            <article className="course-card"><h3>Having training experience in Academy with Proven Student Results</h3><p>Having training experience with a track record of students landing roles at TCS, Infosys, Wipro, startups and product companies within months of completing the course.</p></article>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-heading"><div className="section-kicker">How It Works</div><h2>How Our Small Batch DevOps Training Works</h2><p>A structured 8-week programme designed so no student gets left behind</p></div>
          <div className="why-grid">
            <article className="feature-card"><span className="icon-mark">10 students max</span><h3>Maximum 10 students Per Batch</h3><p>Every batch is hard-capped at 10 students. This is not a marketing claim — it is how we maintain quality. Small batches mean the trainer knows your name, your background, and your weak spots.</p></article>
            <article className="feature-card"><span className="icon-mark">100%live sessions</span><h3>Live Online Classes with Real-Time Doubt Solving</h3><p>Classes run live on Zoom with screen sharing, live coding and instant doubt resolution. No recorded-course approach where you are left googling your own questions.</p></article>
            <article className="feature-card"><span className="icon-mark">8+project reviews</span><h3>Weekly Assignments and Project Reviews</h3><p>Each week you submit a hands-on assignment that mirrors a real work task. Your trainer reviews it personally, gives written feedback, and flags gaps before the next module begins.</p></article>
            <article className="feature-card"><span className="icon-mark">1:1 interview prep</span><h3>One-on-One Mentorship for Interview Preparation</h3><p>In the final weeks you get dedicated one-on-one sessions for mock interviews, resume review and offer negotiation — so you walk into interviews prepared, not nervous.</p></article>
          </div>
          <div className="center-cta"><a className="primary-button" href="#contact-us">Book a Free Demo Class</a><a className="secondary-button" href="#learn">Is DevOps a Good Career?</a></div>
        </section>

        <section className="section-shell">
          <div className="section-heading"><div className="section-kicker">Career Paths</div><h2>DevOps Engineer Salary and Career Opportunities</h2><p>DevOps is one of the highest-paying engineering disciplines in India — here is what you can earn</p></div>
          <div className="course-grid">
            <article className="course-card"><h3>DevOps Engineer – Average Salary and Job Roles</h3><strong>8 – 22 LPA</strong><p>The most in-demand role in the industry. DevOps Engineers build and maintain CI/CD pipelines, manage cloud infrastructure and own the reliability of production deployments. Entry-level roles start at 8 LPA; senior engineers with AWS/Kubernetes expertise command 18–22 LPA.</p><p>TCS Infosys Wipro Flipkart Razorpay</p></article>
            <article className="course-card"><h3>Site Reliability Engineer – What They Do and What They Earn</h3><strong>15 – 40 LPA</strong><p>SREs sit at the intersection of software engineering and operations. They define SLOs, build automation to eliminate toil, manage incidents and architect for reliability at scale. SRE roles at product companies pay significantly more than traditional ops roles.</p><p>Swiggy PhonePe Zomato Razorpay Paytm</p></article>
            <article className="course-card"><h3>Platform Engineer – The Next Big Career in DevOps</h3><strong>18 – 45 LPA</strong><p>Platform Engineers build the internal developer platform — the tooling, self-service portals and golden paths that help product teams ship faster. This is the fastest-growing specialisation in DevOps and pays a premium for engineers who can think in systems.</p><p>Paytm Meesho Zepto Juspay Groww</p></article>
            <article className="course-card"><h3>Cloud Engineer and DevOps Architect Career Paths</h3><strong>20 – 60 LPA</strong><p>Cloud Engineers specialise in designing and operating cloud infrastructure at scale. DevOps Architects lead the strategy and toolchain decisions for entire engineering organisations. Both paths are senior roles that require 4–7 years of hands-on experience.</p><p>AWS Deloitte Accenture HCL Tech Cognizant</p></article>
            <article className="course-card"><h3>Companies Hiring DevOps Engineers Right Now</h3><strong>All Levels</strong><p>Demand for DevOps talent is at an all-time high across service companies, product companies and startups. Roles are open across experience levels — from freshers to architects — and many are fully remote.</p><p>TCS Infosys Wipro Flipkart Razorpay PhonePe Swiggy Paytm</p></article>
          </div>
          <div className="center-cta"><a className="secondary-button" href="#blogs">Read Full DevOps Salary Guide 2026</a></div>
        </section>

        <section className="section-shell">
          <div className="section-heading"><h2>What Our Students Say About This DevOps Course</h2><p>Real stories from real alumni — watch their journey</p></div>
          <div className="testimonial-grid">
            <article className="testimonial-card"><p>&quot;मतलब ज़ीरो से एक तरीके से उठाया है। तो हर एक चीज़ के लिए&quot;</p><strong>Student Testimonial</strong><span>Before</span><span>Career Transition</span><span>Now</span><span>DevOps Professional</span><b>10+ LPA</b></article>
            <article className="testimonial-card"><p>&quot;Practical hands-on training with real-world projects. The mentorship was exceptional.&quot;</p><strong>DevOps Student</strong><span>Before</span><span>IT Professional</span><span>Now</span><span>DevOps Engineer</span><b>12 LPA</b></article>
          </div>
        </section>

        <section className="section-shell" id="placements">
          <div className="section-heading"><div className="section-kicker">Student Transformations</div><h2>Real Students. Real Salaries.</h2><p>Every card below is a real career transformation — before and after joining SwitchToDevOps</p></div>
          <div className="course-grid transformation-grid">
            <article className="course-card"><span>PP</span><p>Batch 12</p><h3>Priya Patel</h3><p>Cloud DevOps Engineer · Flipkart</p><p>Before</p><strong>4.5 LPA</strong><p>Support Engineer</p><p>→</p><p>After</p><strong>22 LPA</strong><p>Flipkart</p></article>
            <article className="course-card"><span>RS</span><p>Batch 13</p><h3>Rahul Sharma</h3><p>DevOps Engineer · Razorpay</p><p>Before</p><strong>5 LPA</strong><p>System Admin</p><p>→</p><p>After</p><strong>19 LPA</strong><p>Razorpay</p></article>
            <article className="course-card"><span>AK</span><p>Batch 14</p><h3>Amit Kumar</h3><p>Site Reliability Engineer · PhonePe</p><p>Before</p><strong>6 LPA</strong><p>Developer</p><p>→</p><p>After</p><strong>21 LPA</strong><p>PhonePe</p></article>
            <article className="course-card"><span>SR</span><p>Batch 15</p><h3>Sneha Rao</h3><p>AWS DevOps Engineer · TCS</p><p>Before</p><strong>3.5 LPA</strong><p>Fresher</p><p>→</p><p>After</p><strong>14 LPA</strong><p>TCS</p></article>
            <article className="course-card"><span>KR</span><p>Batch 16</p><h3>Kiran Reddy</h3><p>Kubernetes Engineer · Infosys</p><p>Before</p><strong>4 LPA</strong><p>Tester</p><p>→</p><p>After</p><strong>15 LPA</strong><p>Infosys</p></article>
            <article className="course-card"><span>DK</span><p>Batch 17</p><h3>Divya Krishnan</h3><p>CI/CD Engineer · Wipro</p><p>Before</p><strong>4 LPA</strong><p>Manual QA</p><p>→</p><p>After</p><strong>13 LPA</strong><p>Wipro</p></article>
          </div>
        </section>

        <section className="section-shell" id="pricing">
          <div className="section-heading"><div className="section-kicker">PRICING</div><h2>DevOps Course Fee, Duration and Batch Details</h2><p>Transparent pricing with no hidden fees — pick the level that matches your goals</p></div>
          <div className="course-grid pricing-grid">
            <article className="course-card"><span className="section-kicker">FOUNDATION</span><h3>Course Duration and Weekly Schedule – L1</h3><p>Beginners · 40 hours · Weekend batches (Sat + Sun)</p><strong>15,000</strong><ul><li>Linux Administration & Shell Scripting</li><li>Git & Version Control (GitHub, GitLab)</li><li>Docker Basics & Containerization</li><li>CI/CD Fundamentals with Jenkins</li><li>AWS Basics (EC2, S3, IAM)</li><li>Basic Networking & Security</li><li>Hands-on labs included</li><li>Course completion certificate</li><li>Placement assistance</li></ul><a href="#contact-us">Enroll in L1</a><p>Entry-level DevOps roles (4-8 LPA)</p></article>
            <article className="course-card highlighted"><span className="section-kicker">MOST POPULAR</span><p>INCLUDES L1 + ADVANCED</p><h3>Course Fee and Payment Options – L2</h3><p>Most popular · 50 hours · EMI available · Weekend batches</p><strong>35,000</strong><ul><li>All L1 Topics (Advanced Level)</li><li>Advanced Docker & Kubernetes</li><li>Jenkins Pipelines & GitOps (ArgoCD, Flux)</li><li>Terraform & Infrastructure as Code</li><li>AWS/Azure Cloud Services & Deployment</li><li>Monitoring (Prometheus, Grafana, ELK)</li><li>Ansible & Configuration Management</li><li>8+ Real-world DevOps Projects</li><li>DevOps Project Portfolio</li><li>Resume building & interview preparation</li></ul><a href="#contact-us">Enroll in L2</a><p>DevOps Engineer (8-18 LPA)</p></article>
            <article className="course-card"><span className="section-kicker">EXPERT</span><h3>What is Included in the Course Fee – L3</h3><p>Expert level · 150 hours · Full mentorship + placement</p><strong>70,000</strong><ul><li>All L1 + L2 Topics (Expert Level)</li><li>Advanced Kubernetes & Service Mesh (Istio)</li><li>Advanced Cloud Architecture & Multi-Cloud</li><li>Service Mesh & Production Deployment</li><li>Multi-Cloud Architecture (AWS + Azure + GCP)</li><li>DevSecOps & Security Automation</li><li>SRE Principles & Incident Management</li><li>Advanced Monitoring & Observability</li><li>Chaos Engineering & Resilience</li><li>Capstone: Complete Production Infrastructure</li></ul><a href="#contact-us">Enroll in L3</a><p>Senior DevOps/SRE Engineer (18-40+ LPA)</p></article>
          </div>
          <div className="mini-stats benefit-strip"><span><strong>EMI Available</strong>Pay in easy installments</span><span><strong>Money-Back Guarantee</strong>100% refund within first week</span><span><strong>Limited Batch Size</strong>Only 10 students per batch</span><span><strong>Referral Bonus</strong>2,000 off for both referrer & referee</span></div>
        </section>

      <section className="contact-section section-shell" id="contact-us">
          <div className="concept-stamp">Working Concept — Saradhi Tech</div>
          <div>
            <div className="section-kicker">LIMITED SEATS AVAILABLE</div>
            <h2>Book a Free DevOps Demo Session</h2>
            <p>In your free demo you will build a live CI/CD pipeline from scratch — not watch a slideshow. It takes 45 minutes and shows you exactly what the full course feels like.</p>
            <ul className="check-list"><li>Free career counseling session</li><li>—Personalized learning roadmap</li><li>—Get access to sample classes</li><li>No payment required to start</li></ul>
            <strong>Only 3 Seats Left for Next Batch</strong>
            <p>Small-batch cohort · max 10 students per batch</p>
          </div>
          <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
            <h3>Book FREE Demo Class</h3>
            <label><span>Your Full Name *</span><input type="text" name="name" /></label>
            <label><span>Mobile number with country code *</span><input type="tel" name="mobile" /></label>
            <label><span>Email *</span><input type="email" name="email" /></label>
            <button className="primary-button" type="submit">Book FREE Demo</button>
            <p>Our Students Work At:</p>
            <div className="tool-cloud"><span>TCS</span><span>Infosys</span><span>Wipro</span><span>Accenture</span><span>Cognizant</span><span>HCL</span></div>
          </form>
        </section>

        <section className="section-shell faq-section">
          <div className="section-heading"><div className="section-kicker">FAQ</div><h2>Frequently Asked Questions About DevOps Training</h2><p>Everything you need to know before enrolling</p></div>
          <div className="faq-list">
            <FaqItem question="Why do you only accept 10 students per batch?" defaultOpen>We deliberately keep batches small because DevOps requires hands-on practice and personalized feedback. With 10 students, I can review every student&apos;s Terraform code, debug their Kubernetes deployments in real-time, and provide specific career guidance based on their background. Large institutes run 30-40 student batches where you&apos;re just a number. Here, I know each student&apos;s strengths and weak areas by week 2. That&apos;s why our placement rate is up to 85% — personalized attention works.</FaqItem>
            <FaqItem question="Can I see the actual AWS projects before enrolling?">Yes. Visit our GitHub repository at github.com/switchtodevops/student-projects (public repo) to see completed projects from previous batches. You&apos;ll find: (1) E-commerce app with Jenkins CI/CD pipeline deployed on EKS, (2) Multi-region Terraform infrastructure with state management, (3) Production monitoring stack with Prometheus and Grafana. During the free demo session, I walk through one complete project live — showing the architecture, code, and deployment process.</FaqItem>
            <FaqItem question="What's your refund policy if I don't get placed?">We offer a 100% refund if you complete all 8 weeks, submit all 5 projects, attend 90% of classes, and don&apos;t receive a job offer within 6 months of course completion. However, in 4 years of running this program, only 2 students have requested refunds (both got placed in month 7). The key is &quot;complete the course&quot; — students who finish all projects and actively apply get placed. We don&apos;t guarantee placement for students who drop out halfway or don&apos;t complete assignments.</FaqItem>
            <FaqItem question="How is this different from 1,000 Udemy courses?">Udemy courses are pre-recorded videos. You watch alone, get stuck, and quit. Our training is 100% live — you deploy on real AWS infrastructure during class, I debug your errors in real-time, and you get immediate answers. The batch size of 10 means I review your code personally. Udemy has no placement support, no resume reviews, no mock interviews, and no alumni network. Our students get internal referrals from 500+ alumni at companies like Flipkart, Razorpay, and Swiggy. That network alone is worth more than 35,000.</FaqItem>
            <FaqItem question="Do I need to buy AWS credits or pay extra for cloud resources?">No. The 35,000 course fee includes everything — AWS credits for all 5 projects (approximately $50 worth), access to our shared EKS clusters for practice, all course materials, lifetime recording access, and placement support. You don&apos;t pay anything extra. We provide AWS accounts with pre-configured IAM permissions so you can start deploying from day 1 without worrying about billing.</FaqItem>
            <FaqItem question="What if I'm currently working — can I manage the course schedule?">Yes. 70% of our students are working professionals. We offer two batch timings: (1) Weekday evening batch: Mon-Thu 7-9:30 PM IST, (2) Weekend batch: Sat-Sun 10 AM-1 PM IST. All sessions are recorded, so if you miss a class due to work, you can watch the recording and submit doubts via Slack. The course is designed for working professionals — assignments take 3-5 hours per week, which you can complete on weekends.</FaqItem>
            <FaqItem question="Who is the instructor and what's their background?">I&apos;m Firoz Khan, AWS Certified Solutions Architect and former DevOps Lead at TCS where I managed a team of 12 engineers running 38 microservices across 4 AWS regions. I&apos;ve handled production incidents at 2 AM, optimized cloud costs from $45K to $28K per month, and interviewed 200+ DevOps candidates. I don&apos;t teach theory from slides — I teach what actually works in production environments based on 8 years of hands-on experience. You can verify my credentials on LinkedIn: linkedin.com/in/firoz-khan-devops</FaqItem>
            <FaqItem question="How many students actually get placed and at what salary?">Up to 85% of students who complete the course get placed within 3 months. Average starting salary: 8.2 LPA for freshers, 12.5 LPA for professionals with 2-3 years experience. Our highest placement this year: 22 LPA at Flipkart Bangalore. We share verified placement details — company names and roles — with prospective students on request. We don&apos;t hide our numbers — transparency builds trust.</FaqItem>
            <FaqItem question="What happens after I complete the course?">You get lifetime access to: (1) All course recordings and materials, (2) Our private Slack community with 500+ alumni, (3) Monthly alumni meetups where we discuss new tools and interview patterns, (4) Continued placement support — resume updates, mock interviews, referrals — even 2 years after completing the course. Many alumni return for advanced topics like Kubernetes CKA prep or Terraform deep dives. Once you join, you&apos;re part of the SwitchToDevOps family permanently.</FaqItem>
            <FaqItem question="Can I talk to a current student or alumni before enrolling?">Absolutely. We encourage it. During your free demo session, I&apos;ll connect you with 2-3 alumni from your city or background (e.g., if you&apos;re from Chennai and working at TCS, I&apos;ll connect you with alumni who were in the same situation). You can ask them anything — course quality, placement support, whether it&apos;s worth 35,000. We have nothing to hide. Real testimonials with LinkedIn profiles are on our website — not fake reviews with stock photos.</FaqItem>
          </div>
          <div className="center-cta"><h3>Still have questions?</h3><p>Our team is here to help you make the right decision</p><a className="primary-button" href="#contact-us">Chat with us on WhatsApp</a></div>
        </section>

        <section className="section-shell" id="learn">
          <div className="section-heading"><div className="section-kicker">Keep Exploring</div><h3>Explore More DevOps Resources</h3></div>
          <div className="three-column">
            <article className="panel"><h4>DevOps Courses by Location</h4><p>DevOps Course in Bangalore</p><p>Popular</p><p>Whitefield, Koramangala, Electronic City</p><p>DevOps Course in Mumbai</p><p>BFSI & fintech focus · BKC, Powai, Andheri</p><p>DevOps Course in Hyderabad</p><p>HITEC City, Gachibowli, Financial District</p><p>DevOps Course in Pune</p><p>Hinjewadi, Kharadi, Baner product hubs</p><p>DevOps Course in Chennai</p><p>OMR SaaS belt, Guindy, Ambattur</p><p>DevOps Course in Delhi NCR</p><p>Gurgaon, Noida, South Delhi</p><p>DevOps Course in Kolkata</p><p>Salt Lake Sector V, New Town</p></article>
            <article className="panel"><h4>Career Guides</h4><p>Is DevOps a Good Career?</p><p>Complete career analysis for 2026</p><p>DevOps vs Cloud Engineer</p><p>Salary comparison in India</p><p>Top DevOps Companies</p><p>Highest paying companies in India</p><p>DevOps Engineer Salary in India</p><p>Realistic 2026 pay by experience</p><p>Remote DevOps Jobs</p><p>Work-from-anywhere roles & pay</p><p>Career Switch at 30+</p><p>Real success stories & strategy</p><p>Service vs Product Companies</p><p>Which path fits you?</p></article>
            <article className="panel"><h4>Learning Resources</h4><p>Start DevOps from Zero</p><p>Complete beginner&apos;s guide</p><p>DevOps Fundamentals</p><p>Core concepts explained</p><p>DevOps Roadmap</p><p>Step-by-step guide for freshers</p><p>Docker Explained</p><p>Containers for beginners</p><p>Kubernetes Explained</p><p>Orchestration made simple</p><p>Linux for DevOps</p><p>The essential foundation skill</p><p>CI/CD Pipeline Explained</p><p>Automation made simple</p></article>
          </div>
          <div className="center-cta"><a className="primary-button" href="#contact-us">Enroll in DevOps Course Now</a></div>
        </section>

        <section className="section-shell" id="blogs">
          <div className="section-heading"><p>Stay updated with the latest trends, tips, and insights from our experts</p><h2>Latest From Our Blog</h2></div>
          <div className="course-grid blog-grid">
            <article className="course-card"><span>Featured</span><p>Career Guide</p><h3>DevOps Roadmap for Freshers 2026: Step-by-Step Guide</h3><p>DevOps Roadmap for Freshers 2026: Step-by-Step Guide</p><p>20 Mar 2026</p><p>RRavi Shankar</p></article>
            <article className="course-card"><span>Featured</span><p>DevOps</p><h3>How to Start DevOps from Zero in 2026: Beginners Guide</h3><p>How to Start DevOps from Zero in 2026: Beginners Guide</p><p>18 Mar 2026</p><p>AAmit Verma</p></article>
            <article className="course-card"><span>Featured</span><p>Interview Prep</p><h3>DevOps Interview Questions 2026: Complete Preparation Guide</h3><p>DevOps Interview Questions 2026: Complete Preparation Guide</p><p>15 Mar 2026</p><p>PPriya Singh</p></article>
            <article className="course-card"><span>Featured</span><p>Salary</p><h3>DevOps Engineer Salary in India 2026: Complete Guide</h3><p>DevOps Engineer Salary in India 2026: Complete Guide</p><p>12 Mar 2026</p><p>KKiran Mehta</p></article>
            <article className="course-card"><span>Featured</span><p>Kubernetes</p><h3>Why 87% DevOps Jobs Require Kubernetes Skills in 2026</h3><p>Why 87% DevOps Jobs Require Kubernetes Skills in 2026</p><p>10 Mar 2026</p><p>DDeepak Nair</p></article>
            <article className="course-card"><span>Featured</span><p>Comparison</p><h3>DevOps vs Cloud Engineer: Salary & Career Comparison India 2026</h3><p>DevOps vs Cloud Engineer: Salary & Career Comparison India 2026</p><p>8 Mar 2026</p><p>SSanya Kapoor</p></article>
          </div>
          <div className="center-cta"><a className="secondary-button" href="#blogs">View All Blog Posts</a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-watermark">Working Concept — Saradhi Tech</div>
        <div className="section-shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#home"><span>Switch<span>to</span> DevOps</span><small>Learn. Build. Deploy.</small></a>
            <p>India</p>
            <p>SwitchtoDevOps Academy is India&apos;s leading DevOps training institute. We offer live, instructor-led training in Docker, Kubernetes, AWS, Jenkins, Terraform, and Gen AI automation. 500+ engineers trained, with dedicated placement assistance.</p>
            <h4>Learning Partner</h4>
            <p>In association with ShiftToTech Academy — offering career-focused DevOps, Cloud, AI & Data Engineering courses.</p>
            <div className="mini-stats"><span><strong>Max 10</strong>Students Per Batch</span><span><strong>500+</strong>Students Trained</span><span><strong>Up to 85%</strong>Placement Rate</span></div>
            <h4>Connect With Us</h4>
          </div>
          <div><h3>Courses & Resources</h3><p>DevOps Certification Course DevOps Course with GenAI Course Fees (Transparent) DevOps & Cloud Training Docker & Kubernetes AWS DevOps Course Terraform Course Jenkins CI/CD Kubernetes (CKA) DevOps Certifications DevOps Course Mumbai DevOps Course Bangalore DevOps Course Delhi NCR DevOps Course Pune DevOps Course Kolkata DevOps Course Noida DevOps Course Gurugram</p><p>DevOps Roadmap 2026 How to Start DevOps Interview Questions DevOps Salary India Why Kubernetes Matters DevOps vs Cloud Engineer DevOps Tools Guide Placement Assistance DevOps Course Hyderabad DevOps Course Chennai Best DevOps Institute India Blog & Resources</p></div>
          <div><h3>Quick Links</h3><p>Home | About Us | Contact | Courses | Blogs | Learn | Privacy | Terms | Refunds | Shipping</p><h3>Contact Info</h3><p>training@switchtodevops.com</p><p>India Office</p><p>+91-9911670132</p><p>Bangalore, India (100% Online)</p><p>Live classes via Zoom</p></div>
          <div><h4>Accreditation & Trust</h4><p>Batch Size:Max 10</p><p>Students Trained:500+</p><p>Placement Rate:Up to 85%</p><p>Avg Package:12-16 LPA</p><h4>Secure Payment Gateway</h4><p>SSL encrypted transactions | PCI DSS compliant</p><p>Max 10</p><p>Per Batch</p><p>Verified</p><p>Business</p><p>500+</p><p>Students</p><p>Up to 85%</p><p>Placement</p><p>We Accept</p><p>Cards</p><p>UPI</p><p>Net Banking</p><p>Wallets</p></div>
        </div>
        <div className="section-shell legal-grid">
          <div><h3>Legal & Policies</h3><p>Privacy Policy Your data is safe Terms & Conditions Service terms Refund Policy 7-day guarantee</p><p>Get full refund within 7 days if not satisfied with the course content. We value your privacy. Your personal details are kept safe and never shared with third parties.</p></div>
          <div><h3>Business Information</h3><p>Operated by:Firoz Ahmed</p><p>Registered Address:No- 33 , 1st Floor, 1st Main, CBI Main Rd, HMT Layout, Bengaluru, Karnataka 560032</p><p>Email:Training@switchtodevops.com</p><p>GST not applicable – not registered under GST</p><p>Disclaimer: We provide comprehensive training and placement assistance. Job placement depends on individual performance, interview skills, and market conditions. While we offer dedicated placement support including resume building, interview preparation, and direct referrals to 100+ companies, we cannot guarantee employment outcomes.</p></div>
        </div>
        <div className="footer-bottom"><p>DevOps Courses</p><p>DevOps Certification Training | Kubernetes (CKA) Certification | Terraform Associate | AWS DevOps Professional | Jenkins Certification | Docker Certified Associate | DevOps Engineer Course India</p><p>© 2026 SwitchtoDevOps Academy. All Rights Reserved.</p><p>Privacy Policy Terms of Service Refund Policy</p><a className="primary-button" href="#contact-us">Book Free Demo</a></div>
      </footer>
    </>
  );
}
