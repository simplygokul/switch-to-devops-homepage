'use client';

import { useEffect, useMemo, useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/switch-to-devops-homepage' : '';
const assetPath = (path) => `${basePath}${path}`;
const WHATSAPP = 'https://wa.me/919911670132';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Learn', href: '#learn' },
  { label: 'Contact', href: '#contact' },
];

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
    tag: 'PRODUCTION MENTORSHIP',
    title: 'Learn from an AWS DevOps Engineer with 6+ Years Industry Experience',
    copy: 'Your trainer is an active AWS DevOps Engineer at TCS with 6+ years of hands-on experience deploying real production systems — not a full-time instructor reading slides.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tone: 'orange',
  },
  {
    tag: 'SMALL BATCH SYSTEM',
    title: 'Only 10 Students Per Batch – Guaranteed Personal Attention',
    copy: 'We cap every batch at 10 students so you are never lost in a crowd. Every doubt gets answered, every concept gets reinforced, and your progress is tracked individually.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tone: 'green',
  },
  {
    tag: 'LIVE AWS PROJECTS',
    title: 'Build Real Projects, Not Follow-Along Tutorials',
    copy: 'You will architect and deploy end-to-end systems on live AWS infrastructure — CI/CD pipelines, EKS clusters, Terraform modules — the kind of work that impresses interviewers.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tone: 'blue',
  },
  {
    tag: 'LIVE + RECORDED',
    title: 'Live Interactive Classes with Lifetime Recording Access',
    copy: 'Every session is live, interactive and recorded. Missed a class or want to revise before an interview? Access every recording forever at no extra charge.',
    image: 'https://images.unsplash.com/photo-1588196740430-ec8606e8f2f3?auto=format&fit=crop&w=1200&q=80',
    tone: 'violet',
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
    nodes: ['GitHub', 'Jenkins', 'Trivy', 'ECR', 'ArgoCD', 'EKS'],
    commands: ['$ git push origin main', '$ jenkins build devops-pipeline', '$ trivy image shop:latest', '$ docker push shop:latest', '$ argocd app sync shop', '$ kubectl rollout status deploy/shop'],
  },
  {
    type: 'Infrastructure',
    title: 'Multi-Region AWS EKS Deployment with Terraform',
    copy: 'Provision a production-grade EKS cluster across two AWS regions using Terraform modules. Configure VPC, subnets, IAM, node groups, and ALB ingress with zero-downtime failover.',
    tools: ['Terraform', 'AWS EKS', 'VPC', 'IAM', 'ALB', 'Route 53'],
    nodes: ['Terraform', 'VPC', 'EKS', 'Node Groups', 'ALB', 'Route 53'],
    commands: ['$ terraform init', '$ terraform plan -out=tfplan', '$ terraform apply tfplan', '$ aws eks update-kubeconfig --name prod', '$ kubectl get nodes', '$ kubectl get ingress -A'],
  },
  {
    type: 'GitOps',
    title: 'Blue-Green and Canary Deployment with ArgoCD',
    copy: 'Deploy a microservices application with zero-downtime blue-green and canary strategies on EKS. Use Argo Rollouts to control traffic shifting and automatic rollback on failed health checks.',
    tools: ['ArgoCD', 'Argo Rollouts', 'EKS', 'Helm', 'Istio'],
    nodes: ['Git', 'ArgoCD', 'Rollouts', 'Blue', 'Green', 'Canary'],
    commands: ['$ argocd app create shop', '$ argocd app sync shop', '$ kubectl argo rollouts get rollout shop', '$ kubectl argo rollouts promote shop', '$ kubectl get svc'],
  },
  {
    type: 'Monitoring',
    title: 'Production Monitoring Stack with Prometheus, Grafana and Alertmanager',
    copy: 'Set up full observability for your EKS workloads. Configure Prometheus scraping, write PromQL alerts, build Grafana dashboards and route alerts to Slack and PagerDuty via Alertmanager.',
    tools: ['Prometheus', 'Grafana', 'Alertmanager', 'PromQL', 'Slack'],
    nodes: ['Apps', 'Prometheus', 'Grafana', 'Alertmanager', 'Slack'],
    commands: ['$ helm install kube-prom prometheus-community/kube-prometheus-stack', '$ kubectl port-forward svc/grafana 3000', '$ curl localhost:9090/api/v1/query', '$ kubectl get prometheusrules -A'],
  },
  {
    type: 'Automation',
    title: 'Infrastructure Automation with Ansible Playbooks',
    copy: 'Write idempotent Ansible playbooks to configure EC2 instances, deploy applications, rotate secrets and enforce compliance. Integrate with Terraform for full infrastructure-to-app automation.',
    tools: ['Ansible', 'EC2', 'Ansible Vault', 'Terraform', 'Python'],
    nodes: ['Inventory', 'Playbooks', 'Vault', 'EC2', 'Apps'],
    commands: ['$ ansible-playbook -i inventory site.yml', '$ ansible-vault edit secrets.yml', '$ ansible all -m ping', '$ terraform apply', '$ ansible-playbook deploy.yml'],
  },
];

const tools = ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'AWS EKS', 'AWS RDS', 'AWS MSK', 'Prometheus', 'Grafana', 'Helm', 'SonarQube', 'Trivy', 'Linux'];

const howItWorks = [
  ['10 students max', 'Maximum 10 students Per Batch', 'Every batch is hard-capped at 10 students. This is not a marketing claim — it is how we maintain quality. Small batches mean the trainer knows your name, your background, and your weak spots.'],
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

const pricingSupport = [
  'EMI Available — Pay in easy installments',
  'Money-Back Guarantee — 100% refund within first week',
  'Limited Batch Size — Only 10 students per batch',
  'Referral Bonus — 2,000 off for both referrer & referee',
];

const faqs = [
  ['Why do you only accept 10 students per batch?', "We deliberately keep batches small because DevOps requires hands-on practice and personalized feedback. With 10 students, I can review every student's Terraform code, debug their Kubernetes deployments in real-time, and provide specific career guidance based on their background. Large institutes run 30-40 student batches where you're just a number. Here, I know each student's strengths and weak areas by week 2. That's why our placement rate is up to 85% — personalized attention works."],
  ['Can I see the actual AWS projects before enrolling?', "Yes. Visit our GitHub repository at github.com/switchtodevops/student-projects (public repo) to see completed projects from previous batches. You'll find: (1) E-commerce app with Jenkins CI/CD pipeline deployed on EKS, (2) Multi-region Terraform infrastructure with state management, (3) Production monitoring stack with Prometheus and Grafana. During the free demo session, I walk through one complete project live — showing the architecture, code, and deployment process."],
  ["What's your refund policy if I don't get placed?", 'We offer a 100% refund if you complete all 8 weeks, submit all 5 projects, attend 90% of classes, and don\'t receive a job offer within 6 months of course completion. However, in 4 years of running this program, only 2 students have requested refunds (both got placed in month 7). The key is "complete the course" — students who finish all projects and actively apply get placed. We don\'t guarantee placement for students who drop out halfway or don\'t complete assignments.'],
  ['How is this different from 1,000 Udemy courses?', 'Udemy courses are pre-recorded videos. You watch alone, get stuck, and quit. Our training is 100% live — you deploy on real AWS infrastructure during class, I debug your errors in real-time, and you get immediate answers. The batch size of 10 means I review your code personally. Udemy has no placement support, no resume reviews, no mock interviews, and no alumni network. Our students get internal referrals from 500+ alumni at companies like Flipkart, Razorpay, and Swiggy. That network alone is worth more than 35,000.'],
  ['Do I need to buy AWS credits or pay extra for cloud resources?', "No. The 35,000 course fee includes everything — AWS credits for all 5 projects (approximately $50 worth), access to our shared EKS clusters for practice, all course materials, lifetime recording access, and placement support. You don't pay anything extra. We provide AWS accounts with pre-configured IAM permissions so you can start deploying from day 1 without worrying about billing."],
  ["What if I'm currently working — can I manage the course schedule?", 'Yes. 70% of our students are working professionals. We offer two batch timings: (1) Weekday evening batch: Mon-Thu 7-9:30 PM IST, (2) Weekend batch: Sat-Sun 10 AM-1 PM IST. All sessions are recorded, so if you miss a class due to work, you can watch the recording and submit doubts via Slack. The course is designed for working professionals — assignments take 3-5 hours per week, which you can complete on weekends.'],
  ["Who is the instructor and what's their background?", "I'm Firoz Khan, AWS Certified Solutions Architect and former DevOps Lead at TCS where I managed a team of 12 engineers running 38 microservices across 4 AWS regions. I've handled production incidents at 2 AM, optimized cloud costs from $45K to $28K per month, and interviewed 200+ DevOps candidates. I don't teach theory from slides — I teach what actually works in production environments based on 8 years of hands-on experience. You can verify my credentials on LinkedIn: linkedin.com/in/firoz-khan-devops"],
  ['How many students actually get placed and at what salary?', 'Up to 85% of students who complete the course get placed within 3 months. Average starting salary: 8.2 LPA for freshers, 12.5 LPA for professionals with 2-3 years experience. Our highest placement this year: 22 LPA at Flipkart Bangalore. We share verified placement details — company names and roles — with prospective students on request. We don\'t hide our numbers — transparency builds trust.'],
  ['What happens after I complete the course?', "You get lifetime access to: (1) All course recordings and materials, (2) Our private Slack community with 500+ alumni, (3) Monthly alumni meetups where we discuss new tools and interview patterns, (4) Continued placement support — resume updates, mock interviews, referrals — even 2 years after completing the course. Many alumni return for advanced topics like Kubernetes CKA prep or Terraform deep dives. Once you join, you're part of the SwitchToDevOps family permanently."],
  ['Can I talk to a current student or alumni before enrolling?', "Absolutely. We encourage it. During your free demo session, I'll connect you with 2-3 alumni from your city or background (e.g., if you're from Chennai and working at TCS, I'll connect you with alumni who were in the same situation). You can ask them anything — course quality, placement support, whether it's worth 35,000. We have nothing to hide. Real testimonials with LinkedIn profiles are on our website — not fake reviews with stock photos."],
];

const resourceGroups = [
  ['DevOps Courses by Location', ['DevOps Course in Bangalore — Popular — Whitefield, Koramangala, Electronic City', 'DevOps Course in Mumbai — BFSI & fintech focus · BKC, Powai, Andheri', 'DevOps Course in Hyderabad — HITEC City, Gachibowli, Financial District', 'DevOps Course in Pune — Hinjewadi, Kharadi, Baner product hubs', 'DevOps Course in Chennai — OMR SaaS belt, Guindy, Ambattur', 'DevOps Course in Delhi NCR — Gurgaon, Noida, South Delhi', 'DevOps Course in Kolkata — Salt Lake Sector V, New Town']],
  ['Career Guides', ['Is DevOps a Good Career? — Complete career analysis for 2026', 'DevOps vs Cloud Engineer — Salary comparison in India', 'Top DevOps Companies — Highest paying companies in India', 'DevOps Engineer Salary in India — Realistic 2026 pay by experience', 'Remote DevOps Jobs — Work-from-anywhere roles & pay', 'Career Switch at 30+ — Real success stories & strategy', 'Service vs Product Companies — Which path fits you?']],
  ['Learning Resources', ["Start DevOps from Zero — Complete beginner's guide", 'DevOps Fundamentals — Core concepts explained', 'DevOps Roadmap — Step-by-step guide for freshers', 'Docker Explained — Containers for beginners', 'Kubernetes Explained — Orchestration made simple', 'Linux for DevOps — The essential foundation skill', 'CI/CD Pipeline Explained — Automation made simple']],
];

const blogPosts = [
  ['Career Guide', 'DevOps Roadmap for Freshers 2026: Step-by-Step Guide', '20 Mar 2026', 'Ravi Shankar'],
  ['DevOps', 'How to Start DevOps from Zero in 2026: Beginners Guide', '18 Mar 2026', 'Amit Verma'],
  ['Interview Prep', 'DevOps Interview Questions 2026: Complete Preparation Guide', '15 Mar 2026', 'Priya Singh'],
  ['Salary', 'DevOps Engineer Salary in India 2026: Complete Guide', '12 Mar 2026', 'Kiran Mehta'],
  ['Kubernetes', 'Why 87% DevOps Jobs Require Kubernetes Skills in 2026', '10 Mar 2026', 'Deepak Nair'],
  ['Comparison', 'DevOps vs Cloud Engineer: Salary & Career Comparison India 2026', '8 Mar 2026', 'Sanya Kapoor'],
];

const trainerFacts = [
  ['6+ Years as AWS DevOps Engineer at TCS', 'Not a full-time trainer — an active engineer who works with production AWS infrastructure daily and brings current, real-world knowledge to every class.'],
  ['Deployed 38 Java Microservices Across Multi-Region AWS Infrastructure', 'Led the architecture and deployment of 38 Java microservices across multi-region AWS — the kind of project that most DevOps engineers only read about.'],
  ['Expertise in EKS, ArgoCD, Terraform, Aurora MySQL, MSK Kafka', 'Deep hands-on expertise in the full modern DevOps stack including EKS, ArgoCD GitOps, Terraform IaC, Aurora MySQL and MSK Kafka — tools companies are actively hiring for.'],
  ['Having training experience in Academy with Proven Student Results', 'Having training experience with a track record of students landing roles at TCS, Infosys, Wipro, startups and product companies within months of completing the course.'],
];

const footerCourses = ['DevOps Certification Course', 'DevOps Course with GenAI', 'Course Fees (Transparent)', 'DevOps & Cloud Training', 'Docker & Kubernetes', 'AWS DevOps Course', 'Terraform Course', 'Jenkins CI/CD', 'Kubernetes (CKA)', 'DevOps Certifications', 'DevOps Course Mumbai', 'DevOps Course Bangalore', 'DevOps Course Delhi NCR', 'DevOps Course Pune', 'DevOps Course Kolkata', 'DevOps Course Noida', 'DevOps Course Gurugram', 'DevOps Roadmap 2026', 'How to Start DevOps', 'Interview Questions', 'DevOps Salary India', 'Why Kubernetes Matters', 'DevOps vs Cloud Engineer', 'DevOps Tools Guide', 'Placement Assistance', 'DevOps Course Hyderabad', 'DevOps Course Chennai', 'Best DevOps Institute India', 'Blog & Resources'];

const footerQuick = ['Home', 'About Us', 'Contact', 'Courses', 'Blogs', 'Learn', 'Privacy', 'Terms', 'Refunds', 'Shipping'];

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
        <a className="logo" href="#home" aria-label="SwitchtoDevOps home">
          <img src={assetPath('/assets/logo.png')} alt="" className="logo-img" />
          <span className="logo-text">
            Switch<span>toDevOps</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <a className="btn btn-primary" href="#contact">Book Free Demo <Arrow /></a>
        </div>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="mobile-actions">
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Chat on WhatsApp</a>
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Book Free Demo <Arrow /></a>
        </div>
      </div>
    </header>
  );
}

function CommandCenter() {
  const desktopLines = [
    'Initializing pipeline',
    'Code checkout',
    'Install dependencies',
    'Run unit tests',
    'Build Docker image',
    'Deploy to Kubernetes',
    'Health checks',
    'Application is live!',
  ];
  const mobileLines = [
    'Initializing pipeline',
    'Build Docker image',
    'Deploy to Kubernetes',
    'Application is live!',
  ];

  return (
    <div className="command-center" aria-label="Deployment Command Center">
      <div className="cc-glow" aria-hidden />
      <div className="cc-grid">
        <article className="cc-terminal">
          <header>
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <p>pipeline.log</p>
          </header>
          <ul className="cc-lines desktop-only">
            {desktopLines.map((line, i) => (
              <li key={line} style={{ animationDelay: `${0.1 * i}s` }}>
                <time>10:{String(24 + i).padStart(2, '0')}:3{i}</time>
                <span className="ok">✓</span>
                <code>{line}</code>
              </li>
            ))}
          </ul>
          <ul className="cc-lines mobile-only">
            {mobileLines.map((line, i) => (
              <li key={line} style={{ animationDelay: `${0.1 * i}s` }}>
                <span className="ok">✓</span>
                <code>{line}</code>
              </li>
            ))}
          </ul>
        </article>

        <article className="cc-infra">
          <p className="cc-label">Infrastructure Overview</p>
          <div className="infra-map">
            <div className="node nginx">Nginx<br />Load Balancer</div>
            <div className="node-row">
              <div className="node app">App Service</div>
              <div className="node app">App Service</div>
            </div>
            <div className="node-row">
              <div className="node redis">Redis<br />Cache</div>
              <div className="node pg">PostgreSQL<br />DB</div>
            </div>
          </div>
        </article>

        <article className="cc-metric health">
          <div className="ring" aria-hidden><strong>100%</strong></div>
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
            <i style={{ height: '40%' }} /><i style={{ height: '65%' }} /><i style={{ height: '50%' }} />
            <i style={{ height: '85%' }} /><i style={{ height: '70%' }} /><i className="active" style={{ height: '95%' }} />
          </div>
          <strong>24</strong>
        </article>
      </div>
    </div>
  );
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <article className={`faq-item ${open ? 'is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{item[0]}</span>
        <b aria-hidden>{open ? '−' : '+'}</b>
      </button>
      {open ? <p>{item[1]}</p> : null}
    </article>
  );
}

export default function HomePage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [moduleIndex, setModuleIndex] = useState(0);
  const project = projects[projectIndex];
  const story = testimonials[storyIndex];
  const ticker = useMemo(() => [...companies, ...companies], []);

  return (
    <>
      <div className="watermark" aria-hidden>Working Concept — Saradhi Tech</div>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-atmosphere" aria-hidden />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">BATCH STARTS JULY 12 · ONLY 3 SEATS LEFT</p>
              <h1>
                Live DevOps Course —
                <span>Get Hired as a DevOps Engineer</span>
                <em>Earn ₹15–25 LPA</em>
              </h1>
              <p className="hero-support">8-week live course · Real AWS projects · Max 10 students/batch</p>
              <div className="hero-stats">
                {heroStats.map(([value, label]) => (
                  <article key={label}><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
              <div className="hero-ctas">
                <a className="btn btn-primary btn-lg" href="#contact">Book Free Demo <Arrow /></a>
                <a className="btn btn-outline btn-lg" href="#courses">View Curriculum</a>
              </div>
              <p className="hero-note">Course fee from ₹15,000 · EMI available · GenAI included</p>
              <p className="hero-note">Free demo · No payment required · Cancel anytime</p>
            </div>
            <CommandCenter />
          </div>
        </section>

        {/* HIRING STRIP */}
        <section className="company-strip" aria-label="Hiring companies">
          <p>Our Students Are Hired At — With Real Salary Packages</p>
          <div className="ticker-wrap">
            <div className="ticker">
              {ticker.map(([name, salary], i) => (
                <span key={`${name}-${i}`}>{name} ↑ {salary}</span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-bar" aria-label="Key outcomes">
          <div className="stats-track">
            {mainStats.map(([value, label]) => (
              <article key={label} className="stat-item">
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="why-section light-section" id="why">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Why Choose Us</p>
              <h2>Why Choose SwitchToDevOps for Your DevOps Career</h2>
              <p className="section-copy">Four reasons our students get hired faster than any other DevOps course</p>
            </div>
            <div className="benefit-asymmetric">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className={`benefit-panel tone-${benefit.tone} layout-${index % 2 === 0 ? 'media-left' : 'media-right'}`}>
                  <div className="benefit-media">
                    <img src={benefit.image} alt="" />
                    <span className="benefit-tag">{benefit.tag}</span>
                  </div>
                  <div className="benefit-copy">
                    <span className="benefit-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="curriculum-section" id="courses">
          <div className="section-shell">
            <div className="section-heading center">
              <p className="eyebrow">Curriculum</p>
              <h2>DevOps Course Curriculum</h2>
              <p className="section-copy">A production-grade curriculum covering every tool DevOps engineers use on the job</p>
            </div>

            <p className="roadmap-hint">Swipe to explore all {curriculum.length} modules →</p>
            <div className="roadmap-rail" role="list">
              {curriculum.map((mod, index) => (
                <button
                  type="button"
                  className={`roadmap-step ${moduleIndex === index ? 'is-active' : ''}`}
                  role="listitem"
                  key={mod[0]}
                  onClick={() => setModuleIndex(index)}
                >
                  <div className="step-node"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <p>{mod[0]}</p>
                  <small>{mod[1]}</small>
                  {index < curriculum.length - 1 ? <span className="step-arrow" aria-hidden /> : null}
                </button>
              ))}
            </div>

            <div className="module-detail">
              <div>
                <p className="eyebrow">{curriculum[moduleIndex][1]}</p>
                <h3>{curriculum[moduleIndex][0]}</h3>
                <ul>
                  {curriculum[moduleIndex][2].map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
              <div className="module-nav">
                <button type="button" onClick={() => setModuleIndex((i) => (i - 1 + curriculum.length) % curriculum.length)} aria-label="Previous module">‹</button>
                <button type="button" onClick={() => setModuleIndex((i) => (i + 1) % curriculum.length)} aria-label="Next module">›</button>
              </div>
            </div>

            <div className="center-cta">
              <a className="btn btn-primary" href="#learn">View Full DevOps Roadmap <Arrow /></a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Real Projects</p>
              <h2>Hands-On DevOps Projects You Will Build During the Course</h2>
              <p className="section-copy">Every project runs on real AWS infrastructure — the same stack companies hire for</p>
            </div>

            <div className="project-console">
              <div className="project-tabs" role="tablist" aria-label="Project categories">
                {projects.map((tab, index) => (
                  <button
                    key={tab.type}
                    type="button"
                    role="tab"
                    aria-selected={index === projectIndex}
                    className={index === projectIndex ? 'is-active' : ''}
                    onClick={() => setProjectIndex(index)}
                  >
                    {tab.type}
                  </button>
                ))}
              </div>

              <div className="project-body" role="tabpanel">
                <div className="project-arch">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div className="arch-flow">
                    {project.nodes.map((node, i) => (
                      <div key={node} className="arch-node-wrap">
                        <div className="arch-node">{node}</div>
                        {i < project.nodes.length - 1 ? <span className="arch-link" aria-hidden /> : null}
                      </div>
                    ))}
                  </div>
                  <div className="tool-chips">
                    {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
                <div className="project-terminal">
                  <header>
                    <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                    <p>deploy.sh</p>
                  </header>
                  <pre>{project.commands.map((cmd) => <code key={cmd}>{cmd}</code>)}</pre>
                </div>
              </div>
            </div>

            <div className="center-cta">
              <a className="text-link" href="#learn">How DevOps Scales Real Production Systems <Arrow /></a>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="tools-section light-section" id="tools">
          <div className="section-shell">
            <div className="section-heading center">
              <p className="eyebrow dark">Tools</p>
              <h2>DevOps Tools Covered in This Course</h2>
              <p className="section-copy">Every tool in this list is used in real production environments — not just demo projects</p>
            </div>
            <div className="tool-cloud">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="center-cta">
              <a className="btn btn-primary" href="#courses">See Which Tools to Learn First <Arrow /></a>
            </div>
          </div>
        </section>

        {/* INDUSTRY BAND */}
        <section className="industry-band">
          <div className="section-shell industry-inner">
            <p className="eyebrow">Industry-Ready DevOps Training</p>
            <h2>Learn.Build.Deploy.</h2>
            <p>Accelerate your career in DevOps with hands-on AWS projects, real CI/CD pipelines, and live mentorship — not pre-recorded videos.</p>
            <div className="industry-stats">
              <article><strong>100% Practical Training</strong></article>
              <article><strong>10 Students Per Batch</strong></article>
              <article><strong>6+ Years AWS Experience</strong></article>
            </div>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#contact">Start Your Journey Today <Arrow /></a>
              <a className="btn btn-outline" href="#courses">View DevOps Roadmap</a>
            </div>
          </div>
        </section>

        {/* TRAINER */}
        <section className="trainer-section light-section" id="trainer">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Your Trainer</p>
              <h2>Meet Your DevOps Trainer</h2>
              <p className="section-copy">Learn from a practising AWS DevOps engineer — not someone who teaches full-time without touching production code</p>
            </div>
            <div className="trainer-layout">
              <aside className="trainer-card">
                <img src={assetPath('/assets/mentor7.jpeg')} alt="Firoz Ahmed" />
                <h3>Firoz Ahmed</h3>
                <p>AWS DevOps Engineer · TCS · 6+ Years Experience</p>
                <div className="tool-chips">
                  {['EKS', 'ArgoCD', 'Terraform', 'Aurora MySQL', 'MSK Kafka'].map((t) => <span key={t}>{t}</span>)}
                </div>
              </aside>
              <div className="trainer-facts">
                {trainerFacts.map(([title, copy]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="process-section" id="process">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">How It Works</p>
              <h2>How Our Small Batch DevOps Training Works</h2>
              <p className="section-copy">A structured 8-week programme designed so no student gets left behind</p>
            </div>
            <div className="process-grid">
              {howItWorks.map(([metric, title, copy]) => (
                <article key={title}>
                  <p className="process-metric">{metric}</p>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#contact">Book a Free Demo Class <Arrow /></a>
              <a className="btn btn-outline" href="#learn">Is DevOps a Good Career?</a>
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="careers-section light-section" id="careers">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Career Paths</p>
              <h2>DevOps Engineer Salary and Career Opportunities</h2>
              <p className="section-copy">DevOps is one of the highest-paying engineering disciplines in India — here is what you can earn</p>
            </div>
            <div className="career-list">
              {careers.map(([title, salary, copy, comps]) => (
                <article key={title}>
                  <div className="career-salary">{salary}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <div className="tool-chips dark-chips">
                      {comps.map((c) => <span key={c}>{c}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="center-cta">
              <a className="btn btn-primary" href="#blog">Read Full DevOps Salary Guide 2026 <Arrow /></a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="stories-section" id="stories">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">What Our Students Say About This DevOps Course</p>
              <h2>Real stories from real alumni — watch their journey</h2>
            </div>
            <div className="story-board">
              <div className="story-visual" aria-hidden>
                <div className="story-glyph">STD</div>
                <p>Student voice</p>
              </div>
              <div className="story-quote">
                <blockquote>{story[0]}</blockquote>
                <div className="story-person">
                  <strong>{story[1]}</strong>
                  <span>Before: {story[2]}</span>
                  <span>Now: {story[3]}</span>
                  <span>{story[4]}</span>
                </div>
                <div className="story-nav">
                  <button type="button" aria-label="Previous story" onClick={() => setStoryIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}>‹</button>
                  <div className="dots">
                    {testimonials.map((_, i) => (
                      <button key={i} type="button" aria-label={`Show story ${i + 1}`} className={i === storyIndex ? 'is-active' : ''} onClick={() => setStoryIndex(i)} />
                    ))}
                  </div>
                  <button type="button" aria-label="Next story" onClick={() => setStoryIndex((i) => (i + 1) % testimonials.length)}>›</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSFORMATIONS */}
        <section className="transform-section light-section" id="transformations">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Student Transformations</p>
              <h2>Real Students. Real Salaries.</h2>
              <p className="section-copy">Every card below is a real career transformation — before and after joining SwitchToDevOps</p>
            </div>
            <div className="transform-rail">
              {transformations.map(([name, batch, role, beforePay, beforeRole, afterPay, afterCo]) => (
                <article key={name}>
                  <p className="batch">{batch}</p>
                  <h3>{name}</h3>
                  <p className="role">{role}</p>
                  <div className="before-after">
                    <div>
                      <span>Before</span>
                      <strong>{beforePay}</strong>
                      <small>{beforeRole}</small>
                    </div>
                    <span className="arrow-mark" aria-hidden>→</span>
                    <div>
                      <span>After</span>
                      <strong>{afterPay}</strong>
                      <small>{afterCo}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing-section" id="pricing">
          <div className="section-shell">
            <div className="section-heading center">
              <p className="eyebrow">PRICING</p>
              <h2>DevOps Course Fee, Duration and Batch Details</h2>
              <p className="section-copy">Transparent pricing with no hidden fees — pick the level that matches your goals</p>
            </div>
            <div className="pricing-grid">
              {pricing.map(([badge, title, meta, price, includes, cta, outcome]) => (
                <article key={badge} className={badge === 'MOST POPULAR' ? 'is-featured' : ''}>
                  <p className="price-badge">{badge}</p>
                  <h3>{title}</h3>
                  <p className="price-meta">{meta}</p>
                  <p className="price-value"><span>₹</span>{price}</p>
                  <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
                  <a className="btn btn-primary" href="#contact">{cta} <Arrow /></a>
                  <p className="price-outcome">{outcome}</p>
                </article>
              ))}
            </div>
            <div className="pricing-support">
              {pricingSupport.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        {/* DEMO / CONTACT */}
        <section className="demo-section" id="contact">
          <div className="section-shell demo-grid">
            <div>
              <p className="eyebrow">LIMITED SEATS AVAILABLE</p>
              <h2>Book a Free DevOps Demo Session</h2>
              <p className="section-copy">In your free demo you will build a live CI/CD pipeline from scratch — not watch a slideshow. It takes 45 minutes and shows you exactly what the full course feels like.</p>
              <ul className="demo-list">
                <li>Free career counseling session</li>
                <li>Personalized learning roadmap</li>
                <li>Get access to sample classes</li>
                <li>No payment required to start</li>
              </ul>
              <p className="seat-note">Only 3 Seats Left for Next Batch</p>
              <p className="seat-sub">Small-batch cohort · max 10 students per batch</p>
              <p className="demo-companies">Our Students Work At: TCS · Infosys · Wipro · Accenture · Cognizant · HCL</p>
            </div>
            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Book FREE Demo Class</h3>
              <label>
                Your Full Name *
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Mobile number with country code *
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                Email *
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <button className="btn btn-primary btn-lg" type="submit">Book FREE Demo</button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section light-section" id="faq">
          <div className="section-shell faq-layout">
            <div className="section-heading">
              <p className="eyebrow dark">FAQ</p>
              <h2>Frequently Asked Questions About DevOps Training</h2>
              <p className="section-copy">Everything you need to know before enrolling</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => <FaqItem key={item[0]} item={item} index={index} />)}
            </div>
            <div className="faq-help">
              <h3>Still have questions?</h3>
              <p>Our team is here to help you make the right decision</p>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Chat with us on WhatsApp <Arrow /></a>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="resources-section" id="learn">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Keep Exploring</p>
              <h2>Explore More DevOps Resources</h2>
            </div>
            <div className="resource-grid">
              {resourceGroups.map(([title, links]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link) => <li key={link}><a href="#home">{link}</a></li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="center-cta">
              <a className="btn btn-primary" href="#contact">Enroll in DevOps Course Now <Arrow /></a>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="blog-section light-section" id="blog">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Latest From Our Blog</p>
              <h2>Stay updated with the latest trends, tips, and insights from our experts</h2>
            </div>
            <div className="blog-grid">
              {blogPosts.map(([cat, title, date, author]) => (
                <article key={title}>
                  <p className="blog-meta">Featured · {cat}</p>
                  <h3>{title}</h3>
                  <p>{date}</p>
                  <p>{author}</p>
                </article>
              ))}
            </div>
            <div className="center-cta">
              <a className="btn btn-outline dark-outline" href="#blog">View All Blog Posts</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <div className="footer-brand">
            <a className="logo" href="#home">
              <img src={assetPath('/assets/logo.png')} alt="" className="logo-img" />
              <span className="logo-text">Switch<span>toDevOps</span></span>
            </a>
            <p className="tagline">Learn. Build. Deploy.</p>
            <p>India</p>
            <p>SwitchtoDevOps Academy is India&apos;s leading DevOps training institute. We offer live, instructor-led training in Docker, Kubernetes, AWS, Jenkins, Terraform, and Gen AI automation. 500+ engineers trained, with dedicated placement assistance.</p>
            <p><strong>Learning Partner</strong></p>
            <p>In association with ShiftToTech Academy — offering career-focused DevOps, Cloud, AI &amp; Data Engineering courses.</p>
            <div className="footer-trust">
              <span>Max 10 Students Per Batch</span>
              <span>500+ Students Trained</span>
              <span>Up to 85% Placement Rate</span>
            </div>
          </div>

          <div>
            <h3>Courses &amp; Resources</h3>
            <div className="footer-dense">
              {footerCourses.map((item) => <a key={item} href="#courses">{item}</a>)}
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            {footerQuick.map((item) => <a key={item} href="#home">{item}</a>)}
            <h3 className="spaced">Connect With Us</h3>
            <a href="mailto:training@switchtodevops.com">training@switchtodevops.com</a>
            <a href="tel:+919911670132">+91-9911670132</a>
            <p>India Office</p>
            <p>Bangalore, India (100% Online)</p>
            <p>Live classes via Zoom</p>
          </div>
        </div>

        <div className="section-shell footer-mid">
          <div>
            <h3>Accreditation &amp; Trust</h3>
            <p>Batch Size: Max 10 · Students Trained: 500+ · Placement Rate: Up to 85% · Avg Package: 12-16 LPA</p>
            <p>Secure Payment Gateway · SSL encrypted transactions | PCI DSS compliant</p>
            <p>Max 10 Per Batch · Verified Business · 500+ Students · Up to 85% Placement</p>
          </div>
          <div>
            <h3>We Accept</h3>
            <p>Cards · UPI · Net Banking · Wallets</p>
            <h3 className="spaced">Legal &amp; Policies</h3>
            <p>Privacy Policy — Your data is safe</p>
            <p>Terms &amp; Conditions — Service terms</p>
            <p>Refund Policy — 7-day guarantee</p>
            <p>Get full refund within 7 days if not satisfied with the course content. We value your privacy. Your personal details are kept safe and never shared with third parties.</p>
          </div>
        </div>

        <div className="section-shell footer-biz">
          <p><strong>Operated by:</strong> Firoz Ahmed</p>
          <p><strong>Registered Address:</strong> No- 33 , 1st Floor, 1st Main, CBI Main Rd, HMT Layout, Bengaluru, Karnataka 560032</p>
          <p><strong>Email:</strong> Training@switchtodevops.com</p>
          <p>GST not applicable – not registered under GST</p>
          <p className="disclaimer">We provide comprehensive training and placement assistance. Job placement depends on individual performance, interview skills, and market conditions. While we offer dedicated placement support including resume building, interview preparation, and direct referrals to 100+ companies, we cannot guarantee employment outcomes.</p>
          <p>DevOps Certification Training · Kubernetes (CKA) Certification · Terraform Associate · AWS DevOps Professional · Jenkins Certification · Docker Certified Associate · DevOps Engineer Course India</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SwitchtoDevOps Academy. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a href="#home">Refund Policy</a>
            <a href="tel:+919911670132">Call Now</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <a href="#contact">Book Free Demo</a>
          </div>
        </div>
      </footer>
    </>
  );
}
