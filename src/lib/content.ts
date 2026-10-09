export const site = {
  name: "RoboPilot",
  tagline: "Build. Scale. Grow. With the Right Technology Partner.",
  email: "hello@robopilot.ai",
  salesEmail: "sales@robopilot.ai",
  phone: "+91 98765 43210",
  phoneTel: "tel:+919876543210",
  whatsapp: "+91 98765 43211",
  whatsappHref:
    "https://wa.me/919876543211?text=Hi%20RoboPilot%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  location: "India",
  address: "705, B-Block, Metro Tower, Vijay Nagar,\nIndore, Madhya Pradesh 452010, India",
  description:
    "RoboPilot builds intelligent digital products — AI agents, machine learning, mobile apps, and practical AI consulting for growing businesses.",
  socials: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceNav = [
  {
    slug: "ai-agent-building",
    title: "AI Agent Building",
    short: "Enterprise AI-agent engineering and workflow automation",
    cta: "Build Your AI Agent",
  },
  {
    slug: "free-ai-agents",
    title: "Free AI Agents",
    short: "Free agent marketplace and discovery experience",
    cta: "Explore Free Agents",
  },
  {
    slug: "ml-model-development",
    title: "ML Model Development & Data Analytics",
    short: "ML engineering, analytics and BI solutions",
    cta: "Discuss Your Data Challenge",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native and cross-platform mobile product engineering",
    cta: "Start Your Mobile Project",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    short: "AI strategy, opportunity discovery and implementation roadmap",
    cta: "Book an AI Consultation",
  },
] as const;

export const services = serviceNav;

export const serviceMarquee = [
  "AI Agent Building",
  "Free AI Agents",
  "ML & Data Analytics",
  "Mobile App Development",
  "AI Consulting",
  "Workflow Automation",
  "RAG Systems",
  "Product Engineering",
];

export const techRows = [
  [
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "Java", slug: "openjdk", color: "437291" },
    { name: "Go", slug: "go", color: "00ADD8" },
    { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
    { name: "Swift", slug: "swift", color: "F05138" },
    { name: "SQL", slug: "postgresql", color: "4169E1" },
  ],
  [
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
    { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
    { name: "Angular", slug: "angular", color: "EA4335" },
    { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    { name: "Django", slug: "django", color: "44B78B" },
    { name: "Spring", slug: "spring", color: "6DB33F" },
  ],
  [
    { name: "Flutter", slug: "flutter", color: "02569B" },
    { name: "React Native", slug: "react", color: "61DAFB" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "AWS", slug: "amazonaws", color: "FF9900" },
    { name: "Azure", slug: "microsoftazure", color: "0078D4" },
    { name: "Firebase", slug: "firebase", color: "FFCA28" },
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
  ],
] as const;

export const industries = [
  {
    slug: "ecommerce",
    icon: "ShoppingBag",
    title: "E-commerce",
    description:
      "Storefronts, checkout, inventory sync and commerce platforms that stay fast when traffic spikes.",
    focus: ["Checkout & payments", "Inventory sync", "Personalization", "Mobile commerce"],
  },
  {
    slug: "finance",
    icon: "Landmark",
    title: "Finance",
    description:
      "Secure platforms, reporting systems and automation for regulated financial operations.",
    focus: ["Process automation", "Reporting", "Secure integrations", "Audit trails"],
  },
  {
    slug: "fintech",
    icon: "Wallet",
    title: "FinTech",
    description:
      "Product engineering for wallets, onboarding, risk signals and data-heavy financial journeys.",
    focus: ["Onboarding flows", "Risk signals", "API platforms", "Analytics"],
  },
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    description:
      "Digital workflows, data management and software that support clinical and operational teams.",
    focus: ["Ops workflows", "Secure data exchange", "Automation", "Compliance-aware architecture"],
  },
  {
    slug: "edtech",
    icon: "GraduationCap",
    title: "Education (EdTech)",
    description:
      "Learning platforms, portals and automation that help teaching and operations scale.",
    focus: ["Learning portals", "Admin systems", "Content workflows", "Reporting"],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: "Logistics & Transportation",
    description:
      "Visibility, dispatch and operations software built around real-time movement of work.",
    focus: ["Tracking", "Dispatch", "Integrations", "Ops dashboards"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real Estate",
    description:
      "Listing, CRM and operations tools that simplify buying, selling and managing property.",
    focus: ["Portals", "CRM", "Listings", "Client apps"],
  },
  {
    slug: "food",
    icon: "UtensilsCrossed",
    title: "Food & Restaurant",
    description:
      "Ordering, kitchen and delivery workflows for restaurants, brands and cloud kitchens.",
    focus: ["Ordering", "Kitchen ops", "Delivery tracking", "Loyalty"],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing",
    description:
      "Connected systems, production workflows and reporting for industrial teams.",
    focus: ["Shop-floor visibility", "ERP connections", "Quality reporting", "Process improvement"],
  },
  {
    slug: "hrms",
    icon: "Users",
    title: "Human Resource Management",
    description:
      "People operations platforms covering payroll-adjacent workflows, attendance and delivery.",
    focus: ["HR workflows", "Internal tools", "Integrations", "Self-serve portals"],
  },
] as const;

export const projects = [
  {
    slug: "customer-ops",
    category: "AI Agents",
    title: "AI-Powered Customer Operations",
    summary:
      "An assistant that retrieves knowledge, classifies requests and routes complex cases to humans.",
    impact: ["Faster first response", "Shared knowledge layer", "Human-in-the-loop"],
    stack: ["RAG", "CRM APIs", "Guardrails"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "document-intel",
    category: "Automation",
    title: "Intelligent Document & Knowledge Automation",
    summary:
      "Extract, classify and retrieve documents so teams stop hunting through shared drives.",
    impact: ["Less manual filing", "Cited answers", "Searchable knowledge"],
    stack: ["OCR", "Vector search", "Workflows"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sales-qualify",
    category: "AI",
    title: "AI Sales & Lead Qualification",
    summary:
      "Research prospects, prepare follow-ups and keep CRM records current without extra admin load.",
    impact: ["Cleaner pipeline", "Faster follow-up", "CRM hygiene"],
    stack: ["LLM copilots", "CRM", "Research tools"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ops-reporting",
    category: "Analytics",
    title: "AI-Driven Operations & Reporting",
    summary:
      "Recurring reports and natural-language explanations over operational data.",
    impact: ["Fewer spreadsheet cycles", "Shared metrics", "Decision visibility"],
    stack: ["Warehouse", "APIs", "Dashboards"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "mobile-commerce",
    category: "Mobile",
    title: "E-commerce Mobile App",
    summary:
      "A cross-platform shopping experience with secure checkout and post-launch iteration.",
    impact: ["Shared codebase", "Production architecture", "Secure integrations"],
    stack: ["React Native", "APIs", "Cloud"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "knowledge-copilot",
    category: "Consulting",
    title: "Enterprise Knowledge Copilot",
    summary:
      "A governed assistant grounded in internal documents, with citations and access controls.",
    impact: ["Faster onboarding", "Cited answers", "Policy-aware replies"],
    stack: ["RAG", "SSO", "Eval loops"],
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand",
    description:
      "Goals, constraints, users and systems — understood before a line of production code is written.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Plan & Design",
    description:
      "Architecture, experience and milestones reviewed so the path is clear before the build accelerates.",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Build & Integrate",
    description:
      "Modern stack, tested code, and weekly demos so you see progress instead of waiting for a big reveal.",
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Test & Harden",
    description:
      "Quality, security, performance and accessibility checks before anything goes live.",
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Launch & Scale",
    description:
      "Ship, monitor and iterate. Support continues after launch so the product can keep improving.",
  },
] as const;

export const benefits = [
  {
    title: "Business-first thinking",
    description: "We start with the operating problem, not a model or a framework.",
  },
  {
    title: "Practical AI engineering",
    description: "Agents, models and apps are built to run in real workflows with real constraints.",
  },
  {
    title: "Transparent delivery",
    description: "You see progress every week — scope, risks and next decisions stay visible.",
  },
  {
    title: "Security by design",
    description: "Access, auditability and human oversight are planned in, not bolted on later.",
  },
] as const;

export const whyChoose = [
  {
    n: "01",
    title: "Quality-first delivery",
    description:
      "We do not ship fast and fix later. Work is reviewed, tested and ready for production use.",
  },
  {
    n: "02",
    title: "Radical transparency",
    description:
      "No black-box development. You get visibility into process, progress and decisions at every stage.",
  },
  {
    n: "03",
    title: "Senior-led projects",
    description:
      "Architecture and delivery are guided by people who have shipped similar systems before.",
  },
  {
    n: "04",
    title: "Flexible engagement",
    description:
      "Discovery, a focused build, or a longer partnership — the shape of the work follows the problem.",
  },
  {
    n: "05",
    title: "Long-term optimization",
    description:
      "After launch we can keep measuring, improving and expanding what actually works.",
  },
] as const;

export const faqs = [
  {
    q: "What services does RoboPilot provide?",
    a: "AI agent building, a free-agent discovery experience, ML model development and data analytics, mobile app development, and AI consulting — from roadmap to production workflows.",
  },
  {
    q: "Can you develop software based on our specific business requirements?",
    a: "Yes. We start by understanding objectives, systems and users, then plan and build a solution suited to those workflows.",
  },
  {
    q: "Do you provide AI chatbot and automation solutions?",
    a: "Yes. We design AI assistants, agents and workflow automation based on your use cases, data requirements and existing systems.",
  },
  {
    q: "Can you integrate with our existing applications?",
    a: "We assess current systems and identify suitable integration approaches, subject to the capabilities and access those platforms provide.",
  },
  {
    q: "Do you offer support after project delivery?",
    a: "Support and maintenance options can be agreed as part of the project scope, including services, duration and response arrangements.",
  },
  {
    q: "How do we get started?",
    a: "Share a brief description of the project. We can arrange an initial discussion to understand requirements and determine next steps.",
  },
] as const;

export const insights = [
  {
    slug: "ai-that-ships",
    title: "AI That Ships: From Pilot to Production",
    excerpt:
      "Most AI pilots stall. Here’s how we design evaluation, governance and integration so intelligent features actually reach users.",
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
    title: "Build Velocity Without Chaos",
    excerpt:
      "Release faster while keeping production calm — patterns for pipelines, observability and cost-aware scaling.",
    tag: "Engineering",
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
  "AI Agents",
  "ML & Analytics",
  "Mobile Products",
  "Automation",
  "Consulting",
  "Integrations",
] as const;

export const agentCategories = [
  "All Agents",
  "AI",
  "Business Intelligence",
  "Content Creation",
  "Customer Support",
  "Data Extraction",
  "Data Management",
  "DevOps",
  "E-commerce",
  "Education",
  "Email",
] as const;

export const freeAgents = [
  {
    slug: "lead-qualification-agent",
    name: "Lead Qualification Agent",
    description: "Score inbound leads, ask the next useful question and hand off qualified conversations.",
    long: "This agent reads inbound context, asks the next useful qualifying question, and prepares a clean handoff so sales teams spend time on conversations that are actually ready.",
    tags: ["CRM", "Sales"],
    category: "AI",
    featured: true,
    capabilities: ["Lead scoring", "CRM notes", "Handoff summaries", "Human review gates"],
  },
  {
    slug: "customer-support-agent",
    name: "Customer Support Agent",
    description: "Answer common questions from your knowledge base and escalate when a human is needed.",
    long: "Grounded in your help content, this agent answers routine questions, cites sources where possible, and escalates with a packaged brief when the case is too complex.",
    tags: ["Support", "Knowledge"],
    category: "Customer Support",
    featured: true,
    capabilities: ["Knowledge answers", "Ticket classification", "Escalation pack", "Tone controls"],
  },
  {
    slug: "meeting-summary-agent",
    name: "Meeting Summary Agent",
    description: "Turn meeting notes into action items, owners and a short recap your team can actually use.",
    long: "Paste notes or a transcript and get a recap, decisions, and owners — formatted so it can drop into Slack, email or a tracker.",
    tags: ["Productivity"],
    category: "AI",
    featured: false,
    capabilities: ["Action items", "Decision log", "Owner extraction", "Shareable recap"],
  },
  {
    slug: "document-extraction-agent",
    name: "Document Extraction Agent",
    description: "Pull structured fields from invoices, forms and PDFs instead of retyping them.",
    long: "Upload a document, map the fields you care about, and receive structured output ready for ops systems — with a human check before anything is committed.",
    tags: ["OCR", "Ops"],
    category: "Data Extraction",
    featured: true,
    capabilities: ["Field extraction", "Document classification", "Export JSON/CSV", "Review queue"],
  },
  {
    slug: "sales-research-agent",
    name: "Sales Research Agent",
    description: "Prepare a concise brief on a prospect, company and recent public context before a call.",
    long: "Before a call, generate a one-page brief: company snapshot, likely pain, recent public signals and suggested questions — not a wall of unsorted links.",
    tags: ["Sales", "Research"],
    category: "AI",
    featured: false,
    capabilities: ["Account briefs", "Talking points", "Source list", "CRM-ready notes"],
  },
  {
    slug: "data-reporting-agent",
    name: "Data Reporting Agent",
    description: "Ask for a recurring operational snapshot in plain language, not another spreadsheet hunt.",
    long: "Connect a defined metric set and ask for a weekly snapshot in natural language, with the underlying numbers still visible for trust.",
    tags: ["BI", "SQL"],
    category: "Business Intelligence",
    featured: false,
    capabilities: ["Metric recap", "Trend notes", "Scheduled summaries", "Drill-down questions"],
  },
  {
    slug: "content-brief-agent",
    name: "Content Brief Agent",
    description: "Draft a structured content brief from a topic, audience and offer — ready for a writer.",
    long: "Turn a topic into outline, audience notes, proof points and a draft brief so writers start with structure instead of a blank page.",
    tags: ["Content"],
    category: "Content Creation",
    featured: false,
    capabilities: ["Brief outline", "Audience notes", "Proof points", "SEO questions"],
  },
  {
    slug: "email-response-agent",
    name: "Email Response Agent",
    description: "Suggest replies for common inbound emails with a human still in control of send.",
    long: "Draft a reply in your voice for common inbound threads. Nothing sends until a person approves — the agent is a copilot, not an autopilot.",
    tags: ["Email"],
    category: "Email",
    featured: false,
    capabilities: ["Reply drafts", "Tone matching", "Approval required", "Snippet library"],
  },
  {
    slug: "website-faq-agent",
    name: "Website FAQ Agent",
    description: "A lightweight site assistant grounded in your published FAQs and help articles.",
    long: "Embed an assistant that only answers from approved pages, so visitors get help without inventing policy.",
    tags: ["Web", "Support"],
    category: "Customer Support",
    featured: false,
    capabilities: ["FAQ answers", "Source links", "Fallback to contact", "Embed snippet"],
  },
  {
    slug: "competitive-research-agent",
    name: "Competitive Research Agent",
    description: "Collect public positioning notes so strategy conversations start from a shared brief.",
    long: "Assemble a living brief of public positioning, offers and messaging themes so strategy meetings start aligned.",
    tags: ["Research"],
    category: "AI",
    featured: false,
    capabilities: ["Positioning notes", "Offer comparison", "Source capture", "Shareable memo"],
  },
] as const;
