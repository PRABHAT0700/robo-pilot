export const site = {
  name: "RoboPylot",
  tagline: "Build. Scale. Grow. With a technology partner that starts with your problem.",
  email: "info@robopylot.com",
  salesEmail: "info@robopylot.com",
  phone: "+91 75095 55916",
  phoneTel: "tel:+917509555916",
  phoneAlt: "+91 6265856938",
  phoneAltTel: "tel:+916265856938",
  whatsapp: "+91 75095 55916",
  whatsappHref:
    "https://wa.me/917509555916?text=Hi%20RoboPylot%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  location: "India",
  address:
    "105, AB Rd, Sector C, Slice 5, Part II, Shalimar Township, Indore, Madhya Pradesh 452010",
  description:
    "RoboPylot builds AI agents, machine learning, mobile apps and AI consulting for growing businesses in India and the UK.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceNav = [
  {
    slug: "ai-agent-building",
    title: "AI Agent Building",
    short: "Custom agents that handle real work in your existing tools",
    homeBlurb:
      "Custom AI agents that answer customers, handle routine requests and complete multi-step work in your existing tools. Each agent has clear rules and a log of every action.",
    cta: "Build Your AI Agent",
  },
  {
    slug: "free-ai-agents",
    title: "Free AI Agents",
    short: "Ready-made agents you can try before a custom build",
    homeBlurb:
      "Try ready-made AI agents for common tasks like lead follow-up and support triage. No cost to start. When you need something built for your business, we’ll help you move to a custom version.",
    cta: "Explore Free Agents",
  },
  {
    slug: "ml-model-development",
    title: "ML Model Development and Data Analytics",
    short: "Forecasts, dashboards and pipelines for specific questions",
    homeBlurb:
      "Forecasts, dashboards and data pipelines that answer specific questions: which customers may leave, what stock to order, which orders are losing money.",
    cta: "Discuss Your Data Challenge",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "iOS, Android and cross-platform apps from a working first version",
    homeBlurb:
      "iOS, Android and cross-platform apps. We release a working first version quickly, then improve it based on how real users behave.",
    cta: "Start Your Mobile Project",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    short: "A ranked plan for where AI will save time or money",
    homeBlurb:
      "We review how your business runs, find where AI will save time or money, and give you a ranked plan with costs, so you know what to build first.",
    cta: "Book an AI Consultation",
  },
] as const;

export const services = serviceNav;

export const serviceMarquee = [
  "Free AI Agents",
  "ML and Data Analytics",
  "Mobile App Development",
  "AI Consulting",
  "Workflow Automation",
  "RAG Systems",
  "Product Engineering",
  "AI Agent Building",
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
    chip: "E-commerce",
    hover: "Checkout, payments and inventory that hold up during sales.",
    description:
      "We build storefronts, checkout, inventory sync and shopping apps so sales traffic does not break payments or stock.",
    focus: [
      { title: "Checkout and payments", copy: "Card, UPI and wallet flows that stay up during sales, with retries and clear failure states." },
      { title: "Inventory sync", copy: "Warehouse, marketplace and store stock in one place so you do not oversell." },
      { title: "Support agents", copy: "AI agents that answer order, shipping and return questions from your actual catalogue and policies." },
      { title: "Mobile commerce", copy: "iOS and Android shopping apps that reuse the same catalogue, cart and payment APIs." },
    ],
  },
  {
    slug: "finance",
    icon: "Landmark",
    title: "Finance",
    chip: "Finance",
    hover: "Internal finance systems with audit trails and controlled access.",
    description:
      "For banks, NBFCs and finance teams: reporting, approvals and internal tools with access control and an audit log on every change.",
    focus: [
      { title: "Approvals and ops", copy: "Loan, payout and exception queues with a named owner and a recorded decision." },
      { title: "Reporting", copy: "Dashboards and extracts your finance team can check against source systems before they act." },
      { title: "Secure integrations", copy: "Connections to core banking, GST, payment gateways and ledgers without exposing extra data." },
      { title: "Audit trails", copy: "Who changed what, when, and from which system — kept for review, not rebuilt after the fact." },
    ],
  },
  {
    slug: "fintech",
    icon: "Wallet",
    title: "FinTech",
    chip: "FinTech",
    hover: "Wallets, payment flows and onboarding for product teams.",
    description:
      "For fintech product teams: onboarding, wallets, payment APIs and risk signals that stay stable as volume grows.",
    focus: [
      { title: "Onboarding", copy: "KYC, account opening and first-transaction journeys with clear drop-off points you can fix." },
      { title: "Risk signals", copy: "Rules and models that flag unusual activity and send the case to a person, with a reason attached." },
      { title: "Payment APIs", copy: "Ledgers, webhooks and reconciliation so product, ops and finance see the same transaction state." },
      { title: "Product analytics", copy: "Funnel, conversion and failure metrics wired into the same events your app already emits." },
    ],
  },
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    chip: "Healthcare",
    hover: "Scheduling, records and staff tools that cut admin time.",
    description:
      "Clinics and hospitals: scheduling, records and staff tools that cut admin time. Access is limited by role; we do not claim medical-device or HIPAA certification.",
    focus: [
      { title: "Scheduling and intake", copy: "Appointments, reminders and intake forms so front-desk staff are not retyping the same details." },
      { title: "Staff tools", copy: "Internal apps for rostering, billing follow-up and case notes that sit next to the systems you already use." },
      { title: "Automation", copy: "Agents for appointment FAQs, document sorting and reminder follow-ups — with a person in the loop for clinical decisions." },
      { title: "Access control", copy: "Role-based access, audit logs and data minimisation. Clinical judgement stays with licensed staff." },
    ],
  },
  {
    slug: "edtech",
    icon: "GraduationCap",
    title: "Education (EdTech)",
    chip: "Education (EdTech)",
    hover: "Learning platforms that stay stable at enrolment and exam time.",
    description:
      "Course platforms, student records and admin tools that stay usable when enrolment or exams spike.",
    focus: [
      { title: "Learner portals", copy: "Courses, assignments and progress in one place for students and teachers." },
      { title: "Admin systems", copy: "Enrolment, fees, batches and staff access without a spreadsheet per campus." },
      { title: "Content workflows", copy: "Upload, review and publish lessons with a record of who approved what." },
      { title: "Progress reporting", copy: "Completion, attendance and assessment views that teachers can export." },
    ],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: "Logistics and Transportation",
    chip: "Logistics and Transportation",
    hover: "Live fleet tracking, route planning and dispatch.",
    description:
      "Fleet tracking, dispatch and partner integrations so ops can see where a vehicle is and what it is carrying.",
    focus: [
      { title: "Live tracking", copy: "Vehicle and shipment status on a map, fed from GPS and partner APIs you already pay for." },
      { title: "Dispatch", copy: "Assign trips, handle exceptions and keep a log of who changed a route and why." },
      { title: "Partner integrations", copy: "Connect courier, warehouse and billing systems so status is not copied by hand." },
      { title: "Ops dashboards", copy: "On-time rate, delays and open exceptions in one view for the shift lead." },
    ],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real Estate",
    chip: "Real Estate",
    hover: "Listings, leads and follow-ups in one place.",
    description:
      "Property portals, listing tools and CRM so leads, viewings and follow-ups are not split across chat apps.",
    focus: [
      { title: "Listing portals", copy: "Search, filters and enquiry forms that write straight into the CRM, not a mailbox." },
      { title: "CRM and follow-up", copy: "Lead status, viewing slots and next actions. Agents can use an AI helper to draft follow-ups they still send themselves." },
      { title: "Listing ops", copy: "Photos, availability and price updates with a history of changes." },
      { title: "Client apps", copy: "Buyer or tenant apps for saved searches, documents and visit schedules." },
    ],
  },
  {
    slug: "food",
    icon: "UtensilsCrossed",
    title: "Food and Restaurant",
    chip: "Food and Restaurant",
    hover: "Ordering, kitchen display and delivery tracking.",
    description:
      "Ordering, kitchen display and delivery tracking for restaurants and cloud kitchens that break down at peak hours.",
    focus: [
      { title: "Ordering", copy: "Dine-in, takeaway and aggregator orders into one ticket list, with stock deducted as you go." },
      { title: "Kitchen display", copy: "Tickets routed by station so the pass is not a pile of printed slips." },
      { title: "Delivery tracking", copy: "Rider assignment and customer status using the same order id as the kitchen." },
      { title: "Loyalty", copy: "Simple stamps, offers and repeat-order prompts tied to the customer phone number you already collect." },
    ],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing",
    chip: "Manufacturing",
    hover: "Production and stock visibility on the shop floor.",
    description:
      "Production tracking, inventory and ERP connections so delays show up on the floor, not in last week’s report.",
    focus: [
      { title: "Shop-floor visibility", copy: "Work orders, machine status and bottlenecks on screens operators will actually use." },
      { title: "ERP connections", copy: "Push completed quantities and stock moves into the ERP you already run, instead of a second ledger." },
      { title: "Quality reporting", copy: "Checks, rejects and rework logged against the batch, not a clipboard." },
      { title: "Process agents", copy: "Alerts and shift summaries from the same production data — not a separate ‘AI project’." },
    ],
  },
  {
    slug: "hrms",
    icon: "Users",
    title: "Human Resource Management (HRMS)",
    chip: "HR Management",
    hover: "Payroll, attendance, reviews and hiring in one system.",
    description:
      "HR platforms that cover attendance, leave, payroll inputs, reviews and hiring so teams stop copying data between tools.",
    focus: [
      { title: "HR workflows", copy: "Leave, attendance, letters and approvals with a named owner at each step." },
      { title: "Hiring", copy: "Requisitions, scorecards and interview notes. An agent can screen CVs; a person still decides." },
      { title: "Payroll inputs", copy: "Attendance and salary-change files your payroll vendor can import without a retype." },
      { title: "Self-serve portals", copy: "Employees update bank details, download letters and check leave without raising a ticket." },
    ],
  },
] as const;

export const workCases = [
  {
    slug: "fintech",
    title: "FinTech",
    meta: "Wallets · Onboarding · Risk",
    summary: "Product engineering for wallets, onboarding, risk signals and data-heavy financial journeys.",
    tone: "linear-gradient(160deg, #163a5c 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "4.1", suffix: "x", label: "Faster onboarding" },
      { value: "99", suffix: "%", label: "Uptime" },
      { value: "10", suffix: "wk", label: "To launch" },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    meta: "Storefronts · Checkout · Scale",
    summary: "Headless storefronts, checkout and inventory systems that stay fast when traffic spikes.",
    tone: "linear-gradient(160deg, #3b1d12 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "38", suffix: "%", label: "Conversion lift" },
      { value: "96", suffix: "%", label: "Uptime" },
      { value: "9", suffix: "wk", label: "To launch" },
    ],
  },
  {
    slug: "healthcare",
    title: "Pharma & Healthcare",
    meta: "Portals · Workflows · Compliance",
    summary: "Patient intake, ops workflows and secure data exchange for clinical and pharma teams.",
    tone: "linear-gradient(160deg, #12352f 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "3.2", suffix: "x", label: "Faster intake" },
      { value: "98", suffix: "%", label: "Uptime" },
      { value: "12", suffix: "wk", label: "To launch" },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    meta: "Tracking · Dispatch · Visibility",
    summary: "Tracking, dispatch and operations dashboards built around real-time movement of work.",
    tone: "linear-gradient(160deg, #1b2a4a 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "2.4", suffix: "x", label: "Ops visibility" },
      { value: "97", suffix: "%", label: "Uptime" },
      { value: "11", suffix: "wk", label: "To launch" },
    ],
  },
  {
    slug: "edtech",
    title: "EdTech",
    meta: "Learning · Portals · Reporting",
    summary: "Learning platforms, admin systems and content workflows that help teaching teams scale.",
    tone: "linear-gradient(160deg, #2a1848 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "5.0", suffix: "x", label: "Course throughput" },
      { value: "99", suffix: "%", label: "Uptime" },
      { value: "8", suffix: "wk", label: "To launch" },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    meta: "Shop-floor · ERP · Quality",
    summary: "Connected systems, production workflows and reporting for industrial operations teams.",
    tone: "linear-gradient(160deg, #1f2430 0%, #0b0d19 72%)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "31", suffix: "%", label: "Less downtime" },
      { value: "98", suffix: "%", label: "Uptime" },
      { value: "14", suffix: "wk", label: "To launch" },
    ],
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
    title: "Understand",
    subtitle: "Understand",
    description:
      "We look at how your work runs today, which tools you use and where the time or money goes. You receive a short written summary of the problem and your priorities.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Design",
    description:
      "We design the solution before writing code. You receive a clickable prototype or architecture document, and a fixed quote or clear rate.",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Build",
    description:
      "We build in weekly cycles. You receive a working build every week and a short progress note.",
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Test",
    description:
      "We check functionality, performance, security and accessibility before anything goes live. You receive a test summary and a list of anything that still needs your decision.",
  },
  {
    step: "05",
    title: "Launch and support",
    subtitle: "Launch and support",
    description:
      "We release the product, watch how it performs and keep improving it. You receive a live product, handover documents and a support plan.",
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
    title: "Tested before release",
    description:
      "Every release is reviewed and tested before you see it. We don’t plan to fix quality later.",
  },
  {
    n: "02",
    title: "Clear pricing",
    description:
      "You see the scope, timeline and cost in writing. If the plan changes, we explain the impact before anything moves.",
  },
  {
    n: "03",
    title: "Experienced leads",
    description:
      "Senior engineers make the architecture and security decisions on your project.",
  },
  {
    n: "04",
    title: "Realistic timelines",
    description:
      "We scope the work before we promise a date, so the date we give is one we can keep.",
  },
  {
    n: "05",
    title: "Flexible engagement",
    description:
      "Hire a dedicated developer for your team, hand us a full project, or start with a fixed-scope build.",
  },
] as const;

export const faqs = [
  {
    q: "What services does RoboPylot offer?",
    a: "We build AI agents, machine learning and data analytics systems, mobile apps and AI consulting. We also offer a free library of AI agents for trying common tasks before you commit to a custom build.",
  },
  {
    q: "How much does it cost to build a website or mobile app in India?",
    a: "It depends on features, integrations and platform. A custom business website typically starts at ₹60,000, a custom web app at ₹2,00,000, and a mobile app at ₹4,00,000. Your exact quote comes from a free discovery call. Prices exclude GST (18%).",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A business website usually takes 4 to 8 weeks. A mobile app usually takes 3 to 6 months, depending on features. An AI agent pilot for one workflow is often 2 to 4 weeks.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "Both. Startups usually begin with a focused first version. Established companies often begin with one workflow, one system or a modernisation plan.",
  },
  {
    q: "What is staff augmentation and how is it different from outsourcing?",
    a: "Staff augmentation means one of our developers works in your team, full-time or part-time, under your direction. Outsourcing means we take responsibility for the whole project, from planning to delivery.",
  },
  {
    q: "How do I hire a dedicated developer from RoboPylot?",
    a: "Book a free call and tell us your tech stack and requirements. We shortlist developers, you interview them, and once you choose one, they join your daily workflow.",
  },
  {
    q: "Can RoboPylot help with my search visibility?",
    a: "Every site we build follows the technical basics of search: clean code, fast loading, proper page titles and mobile-friendly design. We can’t guarantee specific Google rankings, because those depend on many factors. If you want ongoing SEO work, we can scope it separately.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. We offer maintenance plans that keep your product secure, updated and working as your business changes. Plans are priced monthly and agreed in writing.",
  },
  {
    q: "Where is RoboPylot based and do you work outside India?",
    a: "We are based in Indore, Madhya Pradesh, and work with clients in India, the UK and the US. We schedule calls to suit your time zone.",
  },
  {
    q: "Which technologies does RoboPylot specialise in?",
    a: "For web we use React, Next.js, Node.js, Python and Laravel. For mobile we use Flutter, React Native, Swift and Kotlin. For AI and data we work with Python, machine learning frameworks and LLM APIs. We choose the stack based on your project.",
  },
] as const;

export type FaqItem = (typeof faqs)[number];

const faqByQ = (questions: string[]) =>
  questions
    .map((q) => faqs.find((item) => item.q === q))
    .filter((item): item is FaqItem => Boolean(item));

export const serviceListingFaqs = faqByQ([
  "What services does RoboPylot offer?",
  "How much does it cost to build a website or mobile app in India?",
  "How long does it take to build a website or app?",
  "Do you work with startups or only established businesses?",
  "Do you provide post-launch support and maintenance?",
  "Where is RoboPylot based and do you work outside India?",
  "Which technologies does RoboPylot specialise in?",
]);

export const industryListingFaqs = faqByQ([
  "What services does RoboPylot offer?",
  "How long does it take to build a website or app?",
  "Do you work with startups or only established businesses?",
  "Do you provide post-launch support and maintenance?",
  "Where is RoboPylot based and do you work outside India?",
]);

export const agentFaqs = [
  {
    q: "Are these agents actually free?",
    a: "Yes. You can try the listed agents at no cost. If you later need the same idea wired into your CRM, helpdesk or data, that custom work is quoted separately.",
  },
  {
    q: "Will the agent send emails or change records on its own?",
    a: "No. Drafts, scores and summaries wait for a person unless we agree a specific write-back in a custom build.",
  },
  {
    q: "How do I try an agent?",
    a: "Open the agent page and use the contact form. Tell us which agent and which tool you use (CRM, helpdesk, email). We reply on working days with the next step.",
  },
] as const;

export const serviceDetailFaqs: Record<string, { q: string; a: string }[]> = {
  "ai-agent-building": [
    {
      q: "What is an AI agent in this context?",
      a: "Software that reads a request, uses your tools or documents, and completes a defined task — with a log of what it did. It is not an unrestricted chatbot.",
    },
    {
      q: "How long does a first agent take?",
      a: "A pilot for one workflow is often 2 to 4 weeks after we agree the tools, rules and success check.",
    },
    {
      q: "Will it write to our CRM or send email on its own?",
      a: "Only if we agree that write-back in the spec. The default is drafts and suggestions that a person approves.",
    },
    {
      q: "What do you need from us to start?",
      a: "Access to the workflow owner, the tools in use, and examples of good and bad outcomes. Discovery is free.",
    },
  ],
  "free-ai-agents": [
    {
      q: "Are these agents actually free?",
      a: "Yes, to try. Connecting the same idea to your live CRM, helpdesk or data is custom work and is quoted separately.",
    },
    {
      q: "Can I white-label them?",
      a: "The listed agents are for evaluation. A branded, integrated version is a custom project.",
    },
    {
      q: "How do I start?",
      a: "Open an agent and send the contact form with the tool you use. We reply on working days.",
    },
  ],
  "ml-model-development": [
    {
      q: "Do we need a data warehouse first?",
      a: "Not always. We start from the question and the data you already have. If the data cannot support the question, we say so before modelling.",
    },
    {
      q: "Can you connect Power BI or Tableau?",
      a: "Yes. Dashboards are part of this service when the metric definitions are agreed.",
    },
    {
      q: "Do you train custom models or only use APIs?",
      a: "Either. We use an API when it is enough, and a custom model when your data and the question need it.",
    },
    {
      q: "How do we know a number is trustworthy?",
      a: "You get the definition, the source and a way to spot-check a sample. We do not ship a score with no explanation.",
    },
  ],
  "mobile-app-development": [
    {
      q: "iOS, Android or both?",
      a: "Both, unless you only need one store. We recommend Flutter or React Native when one codebase is enough, and native Swift or Kotlin when the platform features require it.",
    },
    {
      q: "How long does a first version take?",
      a: "A focused first version is typically 3 to 6 months, depending on features and integrations. You see a working build every week.",
    },
    {
      q: "How is pricing set?",
      a: "A custom mobile app in India typically starts at ₹4,00,000 excluding GST (18%). Your quote follows a free discovery call.",
    },
    {
      q: "Do you submit to the App Store and Play Store?",
      a: "Yes. Store listing, review fixes and the first release are part of launch. Ongoing updates are a support plan.",
    },
  ],
  "ai-consulting": [
    {
      q: "What do we leave the engagement with?",
      a: "A written ranked list of AI uses, expected cost and effort, what data you need, and what to build first. You can implement with us or with your team.",
    },
    {
      q: "Is this only a slide deck?",
      a: "No. If a use case is worth proving, we can run a short technical check as part of the same engagement.",
    },
    {
      q: "Who should be in the room?",
      a: "Someone who owns the workflow and someone who owns the systems. We do not need a full steering committee to start.",
    },
  ],
};

export function industryPageFaqs(name: string) {
  return [
    {
      q: `Do you already have a product for ${name}?`,
      a: `No off-the-shelf suite. We build the piece you need — an agent, a dashboard, a mobile app or an integration — against the systems ${name} teams already run.`,
    },
    {
      q: "How do you start a project in this industry?",
      a: "A free discovery call covering the workflow, the tools in use and the outcome you want. You get a written summary and a quote before we write code.",
    },
    {
      q: "How long does a first version take?",
      a: "An AI agent for one workflow is often 2 to 4 weeks. A focused web or mobile first version is typically a few months, depending on integrations.",
    },
    {
      q: "Do you support the product after launch?",
      a: "Yes. Maintenance is a monthly plan agreed in writing — security updates, small changes and monitoring.",
    },
  ];
}

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
    capabilities: [
      { title: "Lead scoring", copy: "Ranks inbound leads from the fields you already collect, with the reasons shown." },
      { title: "CRM notes", copy: "Writes a short note back to the deal or contact — nothing is saved until you approve." },
      { title: "Handoff summaries", copy: "Packages context for the salesperson so they do not re-read the whole thread." },
      { title: "Human review gates", copy: "Qualified vs not-yet stays a person decision. The agent does not close or discard leads." },
    ],
  },
  {
    slug: "customer-support-agent",
    name: "Customer Support Agent",
    description: "Answer common questions from your knowledge base and escalate when a human is needed.",
    long: "Grounded in your help content, this agent answers routine questions, cites sources where possible, and escalates with a packaged brief when the case is too complex.",
    tags: ["Support", "Knowledge"],
    category: "Customer Support",
    featured: true,
    capabilities: [
      { title: "Knowledge answers", copy: "Replies only from the help articles and FAQs you approve." },
      { title: "Ticket classification", copy: "Tags the request (billing, bug, how-to) so it lands in the right queue." },
      { title: "Escalation pack", copy: "When it cannot answer, it hands a person the question, sources tried and customer history." },
      { title: "Tone controls", copy: "Stays within the voice you set. It does not invent policy or discounts." },
    ],
  },
  {
    slug: "meeting-summary-agent",
    name: "Meeting Summary Agent",
    description: "Turn meeting notes into action items, owners and a short recap your team can actually use.",
    long: "Paste notes or a transcript and get a recap, decisions, and owners — formatted so it can drop into Slack, email or a tracker.",
    tags: ["Productivity"],
    category: "AI",
    featured: false,
    capabilities: [
      { title: "Action items", copy: "Pulls tasks from notes or a transcript, with a suggested owner where the name is clear." },
      { title: "Decision log", copy: "Lists what was agreed, not a full transcript dump." },
      { title: "Owner extraction", copy: "Maps names already in the notes — it does not guess people who were not there." },
      { title: "Shareable recap", copy: "A short recap you can paste into Slack, email or a tracker." },
    ],
  },
  {
    slug: "document-extraction-agent",
    name: "Document Extraction Agent",
    description: "Pull structured fields from invoices, forms and PDFs instead of retyping them.",
    long: "Upload a document, map the fields you care about, and receive structured output ready for ops systems — with a human check before anything is committed.",
    tags: ["OCR", "Ops"],
    category: "Data Extraction",
    featured: true,
    capabilities: [
      { title: "Field extraction", copy: "Reads invoices, forms and PDFs for the fields you map — amount, date, vendor, and similar." },
      { title: "Document classification", copy: "Sorts files by type before extraction so the wrong template is not applied." },
      { title: "Export JSON/CSV", copy: "Gives structured output your ops tools can import." },
      { title: "Review queue", copy: "Low-confidence fields wait for a person before anything is committed." },
    ],
  },
  {
    slug: "sales-research-agent",
    name: "Sales Research Agent",
    description: "Prepare a concise brief on a prospect, company and recent public context before a call.",
    long: "Before a call, generate a one-page brief: company snapshot, likely pain, recent public signals and suggested questions — not a wall of unsorted links.",
    tags: ["Sales", "Research"],
    category: "AI",
    featured: false,
    capabilities: [
      { title: "Account briefs", copy: "One-page snapshot of the company from public sources, not a dump of search links." },
      { title: "Talking points", copy: "Likely pains and questions for the call, labelled as suggestions." },
      { title: "Source list", copy: "Every claim links back to the page it came from." },
      { title: "CRM-ready notes", copy: "A short note you can paste after you have checked it." },
    ],
  },
  {
    slug: "data-reporting-agent",
    name: "Data Reporting Agent",
    description: "Ask for a recurring operational snapshot in plain language, not another spreadsheet hunt.",
    long: "Connect a defined metric set and ask for a weekly snapshot in natural language, with the underlying numbers still visible for trust.",
    tags: ["BI", "SQL"],
    category: "Business Intelligence",
    featured: false,
    capabilities: [
      { title: "Metric recap", copy: "A plain-language snapshot of the metrics you define — the numbers stay visible." },
      { title: "Trend notes", copy: "Flags week-on-week movement without inventing a cause." },
      { title: "Scheduled summaries", copy: "Weekly or monthly recap to a mailbox you choose." },
      { title: "Drill-down questions", copy: "You can ask a follow-up; it only answers from the connected metric set." },
    ],
  },
  {
    slug: "content-brief-agent",
    name: "Content Brief Agent",
    description: "Draft a structured content brief from a topic, audience and offer — ready for a writer.",
    long: "Turn a topic into outline, audience notes, proof points and a draft brief so writers start with structure instead of a blank page.",
    tags: ["Content"],
    category: "Content Creation",
    featured: false,
    capabilities: [
      { title: "Brief outline", copy: "Turns a topic into a sectioned brief a writer can start from." },
      { title: "Audience notes", copy: "Who it is for and what they already know, from the inputs you give." },
      { title: "Proof points", copy: "Lists claims that still need a source — it does not fabricate stats." },
      { title: "SEO questions", copy: "Keyword and search-intent prompts for the writer, not auto-published copy." },
    ],
  },
  {
    slug: "email-response-agent",
    name: "Email Response Agent",
    description: "Suggest replies for common inbound emails with a human still in control of send.",
    long: "Draft a reply in your voice for common inbound threads. Nothing sends until a person approves — the agent is a copilot, not an autopilot.",
    tags: ["Email"],
    category: "Email",
    featured: false,
    capabilities: [
      { title: "Reply drafts", copy: "Suggests a reply for common inbound threads in your voice." },
      { title: "Tone matching", copy: "Follows examples you provide. It does not send mail." },
      { title: "Approval required", copy: "Nothing leaves the inbox until a person hits send." },
      { title: "Snippet library", copy: "Reuses approved answers for shipping, billing and how-to questions." },
    ],
  },
  {
    slug: "website-faq-agent",
    name: "Website FAQ Agent",
    description: "A lightweight site assistant grounded in your published FAQs and help articles.",
    long: "Embed an assistant that only answers from approved pages, so visitors get help without inventing policy.",
    tags: ["Web", "Support"],
    category: "Customer Support",
    featured: false,
    capabilities: [
      { title: "FAQ answers", copy: "Answers only from published FAQs and help pages you list." },
      { title: "Source links", copy: "Shows the page it used so visitors can read the original." },
      { title: "Fallback to contact", copy: "If the answer is not on those pages, it points to your contact form." },
      { title: "Embed snippet", copy: "A small script for your site. It does not crawl the open web." },
    ],
  },
  {
    slug: "competitive-research-agent",
    name: "Competitive Research Agent",
    description: "Collect public positioning notes so strategy conversations start from a shared brief.",
    long: "Assemble a living brief of public positioning, offers and messaging themes so strategy meetings start aligned.",
    tags: ["Research"],
    category: "AI",
    featured: false,
    capabilities: [
      { title: "Positioning notes", copy: "Public messaging and claims, grouped so a strategy meeting starts from one brief." },
      { title: "Offer comparison", copy: "Features and prices as published — gaps are labelled as unknown, not guessed." },
      { title: "Source capture", copy: "Each note keeps the URL it came from." },
      { title: "Shareable memo", copy: "A short memo you can drop into a doc. It is research, not legal advice." },
    ],
  },
] as const;
