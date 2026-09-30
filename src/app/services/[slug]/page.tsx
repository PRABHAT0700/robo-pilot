import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceNav, projects } from "@/lib/content";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  CapabilityGrid,
  ConversionBand,
  ServiceHero,
  TechChips,
} from "@/components/services/ServiceBlocks";
import { AgentWorkflow, MlLifecycle } from "@/components/services/Workflows";
import { FreeAgentsMarket } from "@/components/services/FreeAgentsMarket";
import { CoverImage } from "@/components/ui/CoverImage";
import { IMG } from "@/lib/media";

type Props = { params: Promise<{ slug: string }> };

const seo: Record<string, { title: string; description: string }> = {
  "ai-agent-building": {
    title: "AI Agent Development & Automation Services",
    description:
      "Build production-ready AI agents that connect to your systems, automate workflows and support real business operations with RoboPilot.",
  },
  "free-ai-agents": {
    title: "Free AI Agents for Business",
    description:
      "Explore practical AI agents for research, support, reporting, content, data and everyday business workflows.",
  },
  "ml-model-development": {
    title: "ML Model Development & Data Analytics",
    description:
      "Build machine learning models, predictive analytics, BI dashboards and data solutions that turn business data into actionable insight.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Services",
    description:
      "Build scalable iOS, Android and cross-platform mobile applications from MVP through production with RoboPilot.",
  },
  "ai-consulting": {
    title: "AI Consulting & Strategy Services",
    description:
      "Identify high-value AI opportunities, define your roadmap and move from experimentation to practical AI adoption with RoboPilot.",
  },
};

export function generateStaticParams() {
  return serviceNav.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = seo[slug];
  if (!meta) return { title: "Service" };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: meta.title, description: meta.description },
  };
}

function Visual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-white/10 md:h-[400px]">
      <CoverImage src={src} alt={alt} className="h-full w-full" fallbackLabel={alt} />
    </div>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!serviceNav.some((s) => s.slug === slug)) notFound();

  return (
    <>
      {slug === "ai-agent-building" && <AiAgentPage />}
      {slug === "free-ai-agents" && <FreeAgentsPage />}
      {slug === "ml-model-development" && <MlPage />}
      {slug === "mobile-app-development" && <MobilePage />}
      {slug === "ai-consulting" && <ConsultingPage />}
      <LeadForm defaultService={serviceNav.find((s) => s.slug === slug)?.title} />
    </>
  );
}

function CaseCards({ titles }: { titles: string[] }) {
  return (
    <section className="py-16">
      <div className="container-x">
        <h2 className="mb-8 text-center font-display text-3xl font-bold">Our work in action</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {titles.map((title, i) => {
            const p = projects[i];
            return (
              <article key={title} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-elevated)]">
                <div className="relative h-40">
                  <CoverImage src={p.image} alt={title} className="h-full w-full" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">Problem: teams lose time in manual, disconnected workflows.</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Solution: a governed system that automates the repeatable steps.</p>
                  <span className="mt-4 inline-block text-sm font-bold text-[var(--brand)]">View Case Study →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AiAgentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="AI AGENTS • AUTOMATION • INTELLIGENCE"
        title="Build AI Agents That Actually Work."
        description="Design and deploy intelligent AI agents that understand your business, connect with your systems, and execute real workflows — from customer support and sales to operations and knowledge management."
        primary={{ href: "/contact", label: "Build Your AI Agent" }}
        secondary={{ href: "/services", label: "Explore AI Solutions" }}
        visual={
          <Visual src={IMG.robot} alt="AI agent workflow visualization" />
        }
      />
      <CapabilityGrid
        heading="AI agents built around your business, not generic prompts."
        items={[
          { title: "Intelligent Conversations", copy: "Context-aware AI assistants that understand user intent and respond naturally across business workflows." },
          { title: "Multi-Platform Integration", copy: "Connect agents with CRM, ERP, email, messaging, databases, APIs and business applications." },
          { title: "Autonomous Decision Support", copy: "Enable agents to evaluate information, select actions and escalate decisions when human approval is required." },
          { title: "Continuous Improvement", copy: "Use feedback, evaluation and usage signals to improve agent quality and workflow performance over time." },
          { title: "Task Automation", copy: "Automate repetitive, multi-step processes such as research, classification, reporting, follow-ups and data entry." },
          { title: "Enterprise Security", copy: "Design with access controls, auditability, data protection, guardrails and human-in-the-loop controls." },
        ]}
      />
      <AgentWorkflow />
      <section className="py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Build with the right orchestration layer.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["n8n", "Workflow orchestration, API integrations and self-hosted automation."],
              ["Make", "Visual automation for connected business workflows."],
              ["Custom orchestration", "When the workflow requires application-specific logic, security or scale."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6">
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TechChips
        heading="Technology stack"
        items={["OpenAI", "Anthropic", "Google Gemini", "Python", "Node.js", "FastAPI", "LangChain", "LlamaIndex", "RAG", "Vector Databases", "PostgreSQL", "AWS", "Azure", "Docker"]}
      />
      <CapabilityGrid
        heading="AI agent use cases"
        items={[
          { title: "Customer Support Agent", copy: "Answer questions, retrieve knowledge, classify requests and escalate complex cases to humans." },
          { title: "Sales Assistant", copy: "Qualify leads, research prospects, prepare follow-ups and update CRM records." },
          { title: "Data & Reporting Agent", copy: "Retrieve business data, generate recurring reports and explain trends in natural language." },
          { title: "Process Automation Agent", copy: "Coordinate multi-step operational tasks across tools, approvals and business systems." },
        ]}
      />
      <CaseCards titles={["AI-Powered Customer Operations", "Intelligent Document & Knowledge Automation", "AI Sales & Lead Qualification", "AI-Driven Operations & Reporting"]} />
      <section className="py-10">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Faster Response", "Reduced Manual Work", "Higher Process Consistency", "Better Decision Visibility"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 p-5 text-center font-display font-bold">
              {t}
            </div>
          ))}
        </div>
      </section>
      <ConversionBand
        heading="Have a workflow worth automating?"
        copy="Tell us what your team does manually today. We’ll help identify where an AI agent can safely create leverage."
        cta="Book an AI Discovery Call"
        href="/contact"
      />
    </>
  );
}

function FreeAgentsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="FREE AI AGENTS"
        title="Try AI Agents. Start Free."
        description="Explore practical AI agents designed for everyday business tasks. Discover an agent, try it, and see how intelligent automation can fit into your workflow."
        primary={{ href: "#marketplace", label: "Explore Free Agents" }}
        visual={
          <Visual src={IMG.cyber} alt="Collection of AI assistants for everyday business tasks" />
        }
      />
      <div id="marketplace">
        <FreeAgentsMarket />
      </div>
      <ConversionBand
        heading="Need an agent built for your business?"
        copy="If an off-the-shelf agent does not fit your workflow, RoboPilot can design and integrate a custom agent around your systems."
        cta="Request a Custom Agent"
        href="/contact"
      />
    </>
  );
}

function MlPage() {
  return (
    <>
      <ServiceHero
        eyebrow="MACHINE LEARNING • DATA • ANALYTICS"
        title="Turn Data Into Decisions."
        description="Build reliable machine learning models, analytics solutions and decision-support systems that turn complex data into measurable business insight."
        primary={{ href: "/contact", label: "Discuss Your Data Challenge" }}
        secondary={{ href: "/services", label: "Explore Our Capabilities" }}
        visual={
          <Visual src={IMG.analytics} alt="Analytics dashboards and machine learning visuals" />
        }
      />
      <CapabilityGrid
        heading="Core ML development services"
        items={[
          { title: "Custom ML Model Development", copy: "Problem framing, feature engineering, model training, evaluation and production-ready deployment." },
          { title: "Predictive Analytics", copy: "Forecast demand, risk, customer behavior and operational outcomes using historical and real-time data." },
          { title: "Natural Language Processing", copy: "Classify, extract and understand text using NLP and modern language models." },
          { title: "Computer Vision", copy: "Image classification, object detection, OCR and visual inspection solutions." },
          { title: "Generative AI", copy: "Build domain-specific generative applications using LLMs, RAG and structured workflows." },
          { title: "Real-Time ML & Scoring", copy: "Serve model predictions through APIs and event-driven systems for operational use cases." },
        ]}
      />
      <CapabilityGrid
        heading="Data analytics & business intelligence"
        items={[
          { title: "Advanced Data Analytics", copy: "Transform raw data into actionable insights using statistical analysis and machine learning." },
          { title: "Power BI & Dashboarding", copy: "Build interactive dashboards and management reports for data-driven decisions." },
          { title: "Data Visualization", copy: "Create clear visual stories that communicate trends, exceptions and performance." },
          { title: "Data Engineering", copy: "Build pipelines, transformations and data foundations that make analytics reliable and scalable." },
        ]}
      />
      <MlLifecycle />
      <TechChips
        heading="Technology stack"
        items={["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "MLflow", "Databricks", "Power BI", "Tableau", "Spark", "Azure", "AWS", "Docker", "FastAPI"]}
      />
      <section className="py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Specialized AI solutions</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Predictive Modeling", "Computer Vision", "NLP & Document Intelligence", "Generative AI", "Forecasting & Anomaly Detection", "AI-Powered Decision Support"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
      <ConversionBand
        heading="Have data but need clarity?"
        copy="Bring us your data challenge, reporting bottleneck or ML opportunity. We’ll help define the right path from data to production."
        cta="Talk to a Data & AI Expert"
        href="/contact"
      />
    </>
  );
}

function MobilePage() {
  return (
    <>
      <ServiceHero
        eyebrow="MOBILE • PRODUCT • ENGINEERING"
        title="Apps People Love to Use."
        description="Design and build fast, secure and scalable mobile experiences for customers, employees and partners — from MVP to enterprise-grade applications."
        primary={{ href: "/contact", label: "Start Your Mobile Project" }}
        visual={
          <Visual src={IMG.mobile} alt="Mobile product interface on a phone" />
        }
      />
      <section className="py-8">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Cross-Platform Delivery", "Production-Ready Architecture", "Secure Integrations", "Post-Launch Support"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 p-5 text-center text-sm font-bold">
              {t}
            </div>
          ))}
        </div>
      </section>
      <CapabilityGrid
        heading="Technology stack"
        items={[
          { title: "React Native", copy: "Cross-platform mobile applications with a shared codebase." },
          { title: "Flutter", copy: "High-quality cross-platform applications and rapid product delivery." },
          { title: "Swift / SwiftUI", copy: "Native iOS applications and Apple-platform experiences." },
          { title: "Kotlin / Android", copy: "Native Android applications with full platform capabilities." },
          { title: "Firebase / Cloud Services", copy: "Authentication, notifications, analytics and scalable backend services." },
        ]}
      />
      <CapabilityGrid
        heading="Why RoboPilot mobile"
        items={[
          { title: "Cross-Platform Excellence", copy: "Deliver iOS and Android experiences efficiently while maintaining product quality." },
          { title: "Clean Architecture", copy: "Modular, maintainable code designed for long-term evolution." },
          { title: "Performance Optimized", copy: "Fast startup, responsive interfaces and efficient data handling." },
          { title: "Security First", copy: "Secure authentication, data protection and API integration patterns." },
          { title: "Global Ready", copy: "Localization, scalable APIs and deployment support for multiple markets." },
          { title: "User-Centric Design", copy: "Mobile experiences shaped around real user journeys and business goals." },
        ]}
      />
      <CaseCards titles={["E-commerce Mobile App", "Healthcare / Patient Platform", "FinTech Application", "On-Demand / Operations App"]} />
      <ConversionBand
        heading="Ready to turn your idea into a mobile product?"
        copy="From MVP to scale, we’ll help you choose the right architecture, build the product and take it to production."
        cta="Start Your Mobile Project"
        href="/contact"
      />
    </>
  );
}

function ConsultingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="AI STRATEGY • DISCOVERY • TRANSFORMATION"
        title="Turn AI Ambition Into Action."
        description="Move from AI experimentation to a practical roadmap. RoboPilot helps identify high-value opportunities, define the right solution architecture and build a path to measurable adoption."
        primary={{ href: "/contact", label: "Book an AI Consultation" }}
        visual={
          <Visual src={IMG.people} alt="Strategy workshop for AI opportunity discovery" />
        }
      />
      <CapabilityGrid
        heading="Why RoboPilot consulting"
        items={[
          { title: "AI Strategy & Vision", copy: "Define where AI can create value across products, processes and operations." },
          { title: "Opportunity Discovery", copy: "Identify, prioritize and validate AI use cases against business impact and feasibility." },
          { title: "Technology & Architecture", copy: "Select models, platforms, data architecture and integration patterns for the target solution." },
          { title: "Data Readiness", copy: "Assess data quality, access, governance and readiness for AI adoption." },
          { title: "Responsible AI", copy: "Plan security, privacy, human oversight, evaluation and governance requirements." },
          { title: "Transformation Roadmap", copy: "Turn priorities into an actionable roadmap with phases, owners, dependencies and success measures." },
        ]}
      />
      <section className="py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Consulting process</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["01", "Discovery & Assessment", "Understand goals, workflows, data and constraints."],
              ["02", "Strategy & Roadmap", "Define priorities, architecture direction and a phased roadmap."],
              ["03", "Solution Design & PoC", "Validate the highest-value ideas quickly."],
              ["04", "Implementation", "Move validated solutions into production workflows."],
              ["05", "Adoption & Optimization", "Measure outcomes, improve usage and expand what works."],
            ].map(([n, t, d]) => (
              <article key={n} className="rounded-2xl border border-white/10 p-5">
                <div className="text-xs font-bold text-[var(--brand)]">{n}</div>
                <h3 className="mt-2 font-display font-bold">{t}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CaseCards titles={["AI automation", "Intelligent operations", "Data transformation", "Document intelligence"]} />
      <section className="py-10">
        <div className="container-x flex flex-wrap justify-center gap-3">
          {["Business-first thinking", "Practical AI engineering", "Domain-aware solution design", "Transparent delivery", "Security and governance by design", "Long-term optimization"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold">
              {t}
            </span>
          ))}
        </div>
      </section>
      <ConversionBand
        heading="Ready to find your highest-value AI opportunities?"
        copy="Book a focused discovery session and leave with a clearer view of where AI can fit, what to build first and what it will take to scale."
        cta="Book an AI Consultation"
        href="/contact"
      />
    </>
  );
}

