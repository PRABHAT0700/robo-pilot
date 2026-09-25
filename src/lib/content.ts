export const site = {
  name: "Robopilot AI",
  tagline: "Build Smarter. Move Faster. Grow Further.",
  email: "hello@robopilot.ai",
  salesEmail: "sales@robopilot.ai",
  phone: "+91 98765 43210",
  phoneTel: "tel:+919876543210",
  whatsapp: "+91 98765 43211",
  whatsappHref: "https://wa.me/919876543211?text=Hi%20Robopilot%20AI%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  description:
    "Robopilot AI builds intelligent digital solutions — custom software, applications, cloud systems, and connected business platforms.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "ai-automation",
    icon: "Sparkles",
    title: "AI & Intelligent Automation",
    short:
      "AI-powered applications, assistants, and automated workflows that cut manual effort and accelerate operations.",
    long: "We design and ship production-grade AI systems — from intelligent assistants and document automation to decision support and process orchestration. Every solution is grounded in your data, governance needs, and real operational workflows.",
    outcomes: [
      "Reduce repetitive manual work across teams",
      "Deploy assistants that understand your business context",
      "Automate multi-step processes with human-in-the-loop controls",
      "Measure ROI with clear operational metrics",
    ],
    capabilities: [
      "LLM-powered assistants & copilots",
      "Workflow automation & RPA hybrids",
      "Document & knowledge intelligence",
      "Predictive decision support",
      "AI safety, evals & monitoring",
    ],
  },
  {
    slug: "custom-software",
    icon: "Code2",
    title: "Custom Software Development",
    short:
      "Secure, scalable software designed around your processes, users, and long-term goals.",
    long: "Off-the-shelf tools rarely match how your business actually works. We engineer custom platforms, internal tools, and customer-facing products with clean architecture, strong security, and room to grow.",
    outcomes: [
      "Software that mirrors your real workflows",
      "Modern stacks that are maintainable long-term",
      "Security and compliance built in from day one",
      "Clear ownership of IP and roadmap",
    ],
    capabilities: [
      "Enterprise web platforms",
      "Internal ops & admin tools",
      "API-first product backends",
      "Legacy modernization",
      "Quality engineering & CI",
    ],
  },
  {
    slug: "web-mobile",
    icon: "Smartphone",
    title: "Web & Mobile Applications",
    short:
      "Responsive websites, e-commerce, and mobile apps that make digital experiences simpler and more engaging.",
    long: "We craft digital products people enjoy using — performant web apps, polished marketing experiences, and native-feeling mobile applications that convert, retain, and scale.",
    outcomes: [
      "Faster load times and higher conversion",
      "Consistent brand experience across devices",
      "Accessible interfaces that meet modern standards",
      "Analytics-ready product foundations",
    ],
    capabilities: [
      "Next.js & React product frontends",
      "E-commerce & marketplace UX",
      "iOS / Android & cross-platform apps",
      "Design systems & component libraries",
      "Performance & SEO engineering",
    ],
  },
  {
    slug: "cloud-devops",
    icon: "Cloud",
    title: "Cloud & DevOps",
    short:
      "Modern infrastructure, automated delivery pipelines, and cloud environments built for reliability.",
    long: "We help teams move faster safely — cloud architecture, container platforms, CI/CD, observability, and cost-aware operations that keep production calm under pressure.",
    outcomes: [
      "Shorter release cycles with confidence",
      "Resilient multi-environment deployments",
      "Visibility into performance and spend",
      "Infrastructure that scales with demand",
    ],
    capabilities: [
      "AWS / Azure / GCP architecture",
      "Kubernetes & container platforms",
      "CI/CD & GitOps pipelines",
      "Observability & incident readiness",
      "FinOps & cost optimization",
    ],
  },
  {
    slug: "erp-integration",
    icon: "Network",
    title: "ERP & System Integration",
    short:
      "Connect applications, customize ERP platforms, and streamline workflows across your organization.",
    long: "Disconnected systems create friction. We integrate ERP, CRM, finance, and custom apps into coherent ecosystems — with reliable data sync, event-driven flows, and clear operational visibility.",
    outcomes: [
      "Single source of truth across departments",
      "Fewer manual handoffs and spreadsheet patches",
      "ERP tailored to how you actually operate",
      "Integration patterns you can extend",
    ],
    capabilities: [
      "ERP customization & modules",
      "API & event-driven integrations",
      "Data sync & middleware",
      "Master data alignment",
      "Process orchestration layers",
    ],
  },
  {
    slug: "data-consulting",
    icon: "BarChart3",
    title: "Data Analytics & IT Consulting",
    short:
      "Data integration, dashboards, and technology consulting tailored to your business decisions.",
    long: "Clarity beats complexity. We help you connect data sources, model what matters, and build dashboards and advisory roadmaps that turn technology spend into measurable outcomes.",
    outcomes: [
      "Trusted metrics leadership can act on",
      "Technology roadmaps tied to business goals",
      "Cleaner data foundations for AI readiness",
      "Reduced tool sprawl and wasted spend",
    ],
    capabilities: [
      "Data pipelines & warehousing",
      "BI dashboards & self-serve analytics",
      "Digital transformation roadmaps",
      "Architecture & vendor assessment",
      "AI readiness assessments",
    ],
  },
] as const;

export const industries = [
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare & Life Sciences",
    description:
      "Digital workflows, secure data management, integrations, and software that support clinical and operational excellence.",
    focus: [
      "Patient & ops workflow platforms",
      "Secure data exchange",
      "Compliance-aware architecture",
      "Automation for admin burden",
    ],
  },
  {
    slug: "retail",
    icon: "ShoppingBag",
    title: "Retail & E-commerce",
    description:
      "Shopping experiences, inventory systems, customer engagement, and automation that keep commerce moving.",
    focus: [
      "Conversion-focused storefronts",
      "Inventory & fulfillment sync",
      "Personalization engines",
      "Omnichannel engagement",
    ],
  },
  {
    slug: "travel",
    icon: "Plane",
    title: "Travel & Hospitality",
    description:
      "Booking experiences, operational platforms, integrations, and service automation for guest-centric brands.",
    focus: [
      "Booking & reservation flows",
      "Property operations tools",
      "Partner integrations",
      "Guest service automation",
    ],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing",
    description:
      "Connected business systems, production workflows, reporting, and process improvement for industrial teams.",
    focus: [
      "Shop-floor to ERP connectivity",
      "Production visibility",
      "Quality & compliance reporting",
      "Predictive maintenance signals",
    ],
  },
  {
    slug: "finance",
    icon: "Landmark",
    title: "Financial Services",
    description:
      "Process automation, reporting systems, application integration, and data-driven operations for regulated environments.",
    focus: [
      "Secure process automation",
      "Risk & reporting platforms",
      "Core system integrations",
      "Audit-ready data trails",
    ],
  },
  {
    slug: "professional",
    icon: "Briefcase",
    title: "Professional Services",
    description:
      "Workflow automation, client management, internal applications, and modernization for knowledge-driven firms.",
    focus: [
      "Client delivery portals",
      "Resource & project systems",
      "Knowledge automation",
      "Practice modernization",
    ],
  },
] as const;

export const projects = [
  {
    slug: "workflow-automation",
    category: "AI & Automation",
    title: "Intelligent Workflow Automation",
    summary:
      "An integrated automation layer combining system connectors and an AI assistant to support high-volume business tasks with review gates.",
    impact: ["40% fewer manual handoffs", "Unified task inbox", "Audit-ready action logs"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    stack: ["LLM copilots", "Event bus", "Workflow engine"],
  },
  {
    slug: "analytics-platform",
    category: "Analytics",
    title: "Business Analytics Platform",
    summary:
      "Operational data unified into an accessible reporting layer with role-based dashboards and scheduled insights.",
    impact: ["Single metric source", "Self-serve BI", "Faster board reporting"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stack: ["Warehouse", "ETL", "Interactive dashboards"],
  },
  {
    slug: "erp-ecosystem",
    category: "ERP",
    title: "Connected ERP Ecosystem",
    summary:
      "Business applications connected so finance, ops, and customer teams share accurate, timely information.",
    impact: ["Cross-dept visibility", "Fewer spreadsheet bridges", "Cleaner master data"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    stack: ["ERP APIs", "Middleware", "Sync jobs"],
  },
  {
    slug: "cloud-platform",
    category: "Cloud",
    title: "Elastic Product Cloud",
    summary:
      "A multi-environment cloud foundation with automated deployments, observability, and cost controls for a growing SaaS product.",
    impact: ["Daily safe releases", "99.9% uptime target", "Lower cloud waste"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    stack: ["Kubernetes", "GitOps", "Observability"],
  },
  {
    slug: "customer-portal",
    category: "Web & Mobile",
    title: "Unified Customer Portal",
    summary:
      "A branded portal where clients manage accounts, tickets, and documents across web and mobile with shared design systems.",
    impact: ["Higher self-serve rate", "Lower support load", "Consistent brand UX"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "Mobile app", "Design system"],
  },
  {
    slug: "ai-knowledge",
    category: "AI",
    title: "Enterprise Knowledge Copilot",
    summary:
      "A secure knowledge assistant grounded in internal documents, policies, and support history — with citation and access controls.",
    impact: ["Faster onboarding", "Cited answers", "Policy-aware replies"],
    image:
      "https://images.unsplash.com/photo-1677756119517-59df4d1b5e1a?auto=format&fit=crop&w=1200&q=80",
    stack: ["RAG", "Vector search", "SSO"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand",
    description:
      "We align on objectives, constraints, users, success metrics, and the systems already in play.",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Plan & Design",
    description:
      "Scope, architecture, milestones, and experience design come together into a clear delivery path.",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Build & Integrate",
    description:
      "We develop, configure, and connect the solution with regular demos and feedback loops.",
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Test & Launch",
    description:
      "Validation, hardening, and deployment preparation so go-live feels controlled — not chaotic.",
  },
  {
    step: "05",
    title: "Grow",
    subtitle: "Support & Evolve",
    description:
      "Maintenance, iteration, and roadmap planning keep the product improving after launch.",
  },
] as const;

export const benefits = [
  {
    title: "Collaborative Approach",
    description:
      "We work closely with your team so requirements stay clear and decisions stay shared.",
  },
  {
    title: "Solutions That Fit",
    description:
      "We design around your workflows and objectives — not a one-size-fits-all template.",
  },
  {
    title: "Built to Scale",
    description:
      "Growth, integration, and maintainability are planned into the architecture early.",
  },
  {
    title: "Long-Term Support",
    description:
      "We can continue to support, maintain, and improve solutions long after launch.",
  },
] as const;

export const faqs = [
  {
    q: "What services does Robopilot AI provide?",
    a: "We provide AI and automation, custom software development, web and mobile applications, cloud and DevOps, ERP customization, integrations, data analytics, and IT consulting.",
  },
  {
    q: "Can you develop software based on our specific business requirements?",
    a: "Yes. We start by understanding your objectives and requirements, then plan and develop a solution suited to your workflows and users.",
  },
  {
    q: "Do you provide AI chatbot and automation solutions?",
    a: "Yes. We plan and develop AI assistants, chatbots, and workflow automation based on your use cases, data requirements, and existing systems.",
  },
  {
    q: "Can you integrate with our existing applications?",
    a: "We assess your current systems and identify suitable integration approaches, subject to the capabilities and access those platforms provide.",
  },
  {
    q: "Do you offer support after project delivery?",
    a: "Support and maintenance options can be agreed as part of the project scope, including services, duration, and response arrangements.",
  },
  {
    q: "How do we get started?",
    a: "Contact us with a brief description of your project. We can arrange an initial discussion to understand requirements and determine next steps.",
  },
] as const;

export const insights = [
  {
    slug: "ai-that-ships",
    title: "AI That Ships: From Pilot to Production",
    excerpt:
      "Most AI pilots stall. Here’s how we design evaluation, governance, and integration so intelligent features actually reach users.",
    tag: "AI Strategy",
    read: "6 min",
  },
  {
    slug: "integration-debt",
    title: "Paying Down Integration Debt",
    excerpt:
      "Spreadsheet bridges and brittle APIs slow growth. A practical playbook for connecting systems without freezing delivery.",
    tag: "Architecture",
    read: "5 min",
  },
  {
    slug: "cloud-velocity",
    title: "Cloud Velocity Without Chaos",
    excerpt:
      "Release faster while keeping production calm — patterns for pipelines, observability, and cost-aware scaling.",
    tag: "Cloud",
    read: "7 min",
  },
  {
    slug: "product-thinking",
    title: "Why Product Thinking Beats Feature Lists",
    excerpt:
      "Custom software succeeds when outcomes lead. How we translate business goals into shippable product increments.",
    tag: "Delivery",
    read: "4 min",
  },
] as const;

export const trustTags = [
  "AI & Automation",
  "Software Engineering",
  "Cloud & DevOps",
  "Digital Transformation",
  "System Integration",
  "Data Platforms",
] as const;
