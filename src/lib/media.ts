export const IMG = {
  laptopDash:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80",
  circuit:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  cyber:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  team:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  work:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
  code:
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80",
  analytics: "/images/machine-learning.jpg",
  consulting: "/images/ai-consulting.jpg",
  partner: "/images/why-choose-partner.jpg",
  charts:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  mobile: "/images/mobile-app.jpg",
  robot:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  space:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  health:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
  school:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  house:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  factory:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  people:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  shop:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  stocks:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
};

export const industryDetails: Record<
  string,
  { image: string; long: string; outcomes: string[] }
> = {
  ecommerce: {
    image: IMG.shop,
    long: "We build storefronts, checkout, inventory sync and shopping apps so sales traffic does not break payments or stock. Support questions can go to an agent grounded in your catalogue and policies.",
    outcomes: ["Checkout that holds during sales", "Stock that matches the warehouse", "Shopping apps on the same APIs", "Order-status answers from your own data"],
  },
  finance: {
    image: IMG.stocks,
    long: "For banks, NBFCs and finance operations teams we build reporting, approvals and internal tools with access control and an audit log. This is not a consumer wallet product — see FinTech for that.",
    outcomes: ["Named approvals", "Reports tied to source systems", "Controlled integrations", "Change history you can show an auditor"],
  },
  fintech: {
    image: IMG.charts,
    long: "For fintech product teams we build onboarding, wallets, payment APIs and risk queues that stay stable as volume grows. Internal bank ops work lives on the Finance page.",
    outcomes: ["Onboarding you can measure", "Payments with a single status", "Risk cases with a reason", "Product metrics from real events"],
  },
  healthcare: {
    image: IMG.health,
    long: "We build scheduling, records and staff tools for clinics and hospitals. Access is limited by role. We do not sell medical devices and we do not claim HIPAA or clinical certification.",
    outcomes: ["Less retyping at the front desk", "Staff tools next to existing systems", "Admin automation with a human in the loop", "Role-based access and logs"],
  },
  edtech: {
    image: IMG.school,
    long: "Course platforms, student records and admin tools that stay usable when enrolment or exams spike — for schools, coaching centres and learning products.",
    outcomes: ["Courses and progress in one place", "Enrolment without a per-campus spreadsheet", "Lesson publish with an approval trail", "Reports teachers can export"],
  },
  logistics: {
    image: IMG.warehouse,
    long: "Fleet tracking, dispatch and partner integrations so ops can see where a vehicle is and what it is carrying — without copying status between tools.",
    outcomes: ["Live vehicle and shipment status", "Dispatch with a change log", "Courier and warehouse APIs", "Shift-lead exception view"],
  },
  "real-estate": {
    image: IMG.house,
    long: "Property portals, listing tools and CRM so leads, viewings and follow-ups are not split across chat apps and spreadsheets.",
    outcomes: ["Enquiries that land in the CRM", "Viewing follow-ups you can audit", "Listing changes with history", "Buyer or tenant app if you need one"],
  },
  food: {
    image: IMG.dining,
    long: "Ordering, kitchen display and delivery tracking for restaurants and cloud kitchens — one ticket list at peak, not three apps.",
    outcomes: ["One ticket list for every channel", "Kitchen routing by station", "Rider status on the same order id", "Repeat-order prompts from real visits"],
  },
  manufacturing: {
    image: IMG.factory,
    long: "Production tracking, inventory and ERP connections so delays show up on the floor, not in last week’s report.",
    outcomes: ["Work orders on the floor", "Quantities posted to your ERP", "Quality checks on the batch", "Shift alerts from production data"],
  },
  hrms: {
    image: IMG.people,
    long: "Attendance, leave, payroll inputs, reviews and hiring in one system so HR stops copying data between tools.",
    outcomes: ["Leave and attendance with an owner", "Hiring notes in one place", "Payroll files your vendor can import", "Employee self-serve for letters and leave"],
  },
};

export const pillars = [
  {
    slug: "ai-agent-building",
    n: "01",
    title: "AI Agent Building",
    copy: "We build agents that connect to your systems and handle real work: answering customers, checking records, routing requests and completing steps that today need a person. Each agent runs within rules you define, and every action is logged.",
    cta: "Explore AI agent building",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ml-model-development",
    n: "02",
    title: "ML and Data Analytics",
    copy: "We turn your operational data into forecasts, models and dashboards. Each one is built so your team can see how a number was produced and check it before acting on it.",
    cta: "Explore ML and analytics",
    image: "/images/machine-learning.jpg",
  },
  {
    slug: "mobile-app-development",
    n: "03",
    title: "Mobile App Development",
    copy: "We build iOS, Android and cross-platform apps. We release a working first version early, then improve it based on how people use it, so the app can grow without a rebuild.",
    cta: "Explore mobile apps",
    image: "/images/mobile-app.jpg",
  },
  {
    slug: "ai-consulting",
    n: "04",
    title: "AI Consulting",
    copy: "We review how your business works, find the AI opportunities worth pursuing and rank them by expected return. You leave with a plan your team can carry out, with or without us.",
    cta: "Explore AI consulting",
    image: "/images/ai-consulting.jpg",
  },
] as const;
