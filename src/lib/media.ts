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
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  charts:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  mobile:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
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
    long: "We help commerce teams ship storefronts, checkout, inventory sync and customer apps that stay fast when traffic spikes — with room to add agents for support and merchandising later.",
    outcomes: ["Seamless checkout", "Inventory visibility", "Mobile-ready catalog", "Support automation hooks"],
  },
  finance: {
    image: IMG.stocks,
    long: "For finance operations we focus on secure reporting, process automation and integrations that leave an audit trail — without inventing unverified claims.",
    outcomes: ["Secure integrations", "Operational reporting", "Approval workflows", "Clear data lineage"],
  },
  fintech: {
    image: IMG.charts,
    long: "FinTech products need careful onboarding, risk-aware flows and API platforms. We engineer the product layer so data, identity and operations stay connected.",
    outcomes: ["Onboarding journeys", "API-first backends", "Risk-aware UX", "Analytics ready"],
  },
  healthcare: {
    image: IMG.health,
    long: "Healthcare work is operationally dense. We design workflows, data exchange and automation that respect access control and keep humans in the loop.",
    outcomes: ["Ops workflow software", "Secure data exchange", "Staff-facing apps", "Governed automation"],
  },
  edtech: {
    image: IMG.school,
    long: "Learning products succeed when admin, content and learners share one system. We build portals and reporting that teaching teams can actually run.",
    outcomes: ["Learner portals", "Admin tools", "Content workflows", "Progress reporting"],
  },
  logistics: {
    image: IMG.warehouse,
    long: "Logistics software is about visibility. We connect tracking, dispatch and ops dashboards so movement of work is not trapped in spreadsheets.",
    outcomes: ["Live tracking views", "Dispatch tools", "Partner integrations", "Ops dashboards"],
  },
  "real-estate": {
    image: IMG.house,
    long: "Property businesses need listing, CRM and client apps that stay coherent. We connect those surfaces so teams are not re-entering the same data.",
    outcomes: ["Listing portals", "CRM connections", "Client apps", "Internal ops tools"],
  },
  food: {
    image: IMG.dining,
    long: "Restaurants and cloud kitchens live in ordering, kitchen and delivery loops. We build the software that keeps those loops in sync.",
    outcomes: ["Ordering flows", "Kitchen display logic", "Delivery tracking", "Loyalty hooks"],
  },
  manufacturing: {
    image: IMG.factory,
    long: "Industrial teams need shop-floor visibility connected to ERP and quality reporting. We integrate those systems instead of adding another isolated dashboard.",
    outcomes: ["Production visibility", "ERP connections", "Quality reporting", "Process automation"],
  },
  hrms: {
    image: IMG.people,
    long: "People operations work across attendance, internal tools and self-serve portals. We build internal products that employees will actually use.",
    outcomes: ["HR workflows", "Self-serve portals", "Integrations", "Manager tools"],
  },
};

export const pillars = [
  {
    slug: "ai-agent-building",
    n: "01",
    title: "AI Agent Building",
    copy: "Production-ready agents that connect to your systems, follow guardrails and execute real workflows — not demo chat windows.",
    cta: "Explore AI Agent Building",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ml-model-development",
    n: "02",
    title: "ML & Data Analytics",
    copy: "Models, pipelines and dashboards that turn operational data into decisions you can inspect and improve.",
    cta: "Explore ML & Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "mobile-app-development",
    n: "03",
    title: "Mobile App Development",
    copy: "iOS, Android and cross-platform products with architecture that can grow from MVP to production scale.",
    cta: "Explore Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ai-consulting",
    n: "04",
    title: "AI Consulting",
    copy: "Find the highest-value opportunities, pick the architecture, and leave with a roadmap your team can actually execute.",
    cta: "Explore AI Consulting",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
  },
] as const;
