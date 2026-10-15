import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceDetailFaqs, serviceNav } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import {
  CapabilityGrid,
  ConversionBand,
  ServiceHero,
  TechChips,
} from "@/components/services/ServiceBlocks";
import { AgentWorkflow, MlLifecycle } from "@/components/services/Workflows";
import { FreeAgentsMarket } from "@/components/services/FreeAgentsMarket";
import { WorkStats } from "@/components/sections/WorkHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { IMG } from "@/lib/media";

type Props = { params: Promise<{ slug: string }> };

const seo: Record<string, { title: string; description: string }> = {
  "ai-agent-building": {
    title: "AI Agent Development & Automation Services",
    description:
      "Build production-ready AI agents that connect to your systems, automate workflows and support real business operations with RoboPylot.",
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
      "Build scalable iOS, Android and cross-platform mobile applications from MVP through production with RoboPylot.",
  },
  "ai-consulting": {
    title: "AI Consulting & Strategy Services",
    description:
      "Identify high-value AI opportunities, define your roadmap and move from experimentation to practical AI adoption with RoboPylot.",
  },
};

export function generateStaticParams() {
  return serviceNav.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = seo[slug];
  if (!meta) return { title: "Service" };
  return pageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${slug}`,
    keywords: [meta.title, "RoboPylot", "AI services India"],
  });
}

function Visual({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="service-hero-img" />
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!serviceNav.some((s) => s.slug === slug)) notFound();

  const meta = seo[slug];
  const nav = serviceNav.find((s) => s.slug === slug);

  return (
    <>
      {meta && nav ? (
        <JsonLd
          data={[
            webPageSchema({
              path: `/services/${slug}`,
              title: meta.title,
              description: meta.description,
            }),
            serviceSchema({ slug, name: nav.title, description: meta.description }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: nav.title, path: `/services/${slug}` },
            ]),
          ]}
        />
      ) : null}
      {slug === "ai-agent-building" && <AiAgentPage />}
      {slug === "free-ai-agents" && <FreeAgentsPage />}
      {slug === "ml-model-development" && <MlPage />}
      {slug === "mobile-app-development" && <MobilePage />}
      {slug === "ai-consulting" && <ConsultingPage />}
      <FaqSection items={serviceDetailFaqs[slug]} />
      <ContactSection />
    </>
  );
}

function AiAgentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="AI AGENTS • AUTOMATION • INTELLIGENCE"
        title={
          <>
            Build AI agents that{" "}
            <span className="gradient-text-3 italic">use your tools.</span>
          </>
        }
        description="Agents that connect to the systems you already run — CRM, helpdesk, email, databases — complete a defined task, and leave a log. Support, sales, reporting or ops. A person still approves writes unless we agree otherwise."
        primary={{ href: "/contact", label: "Build Your AI Agent" }}
        secondary={{ href: "/services", label: "All services" }}
        visual={
          <Visual src={IMG.robot} alt="AI agent workflow visualization" />
        }
      />
      <WorkStats />
      <CapabilityGrid
        heading="What a RoboPylot agent actually does"
        items={[
          { title: "Talks with your context", copy: "Answers from your docs, tickets and product data — not a generic model with no sources." },
          { title: "Uses your tools", copy: "CRM, ERP, email, chat, databases and APIs you already pay for. New tools only when needed." },
          { title: "Stops for a person", copy: "Flags the cases that need a decision. It does not invent refunds, medical advice or legal positions." },
          { title: "Leaves a log", copy: "Every action is recorded so you can see what ran, on which record, and who approved it." },
          { title: "Repeats the same job", copy: "Research, classification, reporting, follow-ups and data entry — scoped to one workflow first." },
          { title: "Access you control", copy: "The agent only sees the systems and fields you grant. Secrets stay in your environment." },
        ]}
      />
      <AgentWorkflow />
      <section className="py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">How we wire the workflow</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["n8n", "When you want self-hosted automation and API steps you can see and edit."],
              ["Make", "When visual scenarios across SaaS tools are enough."],
              ["Custom code", "When the steps, security or volume do not fit a generic automation tool."],
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
        heading="Typical first workflows"
        items={[
          { title: "Customer support", copy: "Answers from your help content, tags the ticket, and packs a brief when a person must take over." },
          { title: "Sales follow-up", copy: "Scores inbound leads, drafts the next email, and writes a CRM note only after you approve." },
          { title: "Reporting", copy: "Pulls the metrics you define and writes a weekly summary. The numbers stay in the recap." },
          { title: "Ops hand-offs", copy: "Moves a case across tools and approvals, stopping when a rule says a person must sign off." },
        ]}
      />
      <ConversionBand
        heading="Have a workflow that is still done by hand?"
        copy="Tell us the steps, the tools and where it fails. We will say if an agent is the right first build, or if the process needs a simpler fix."
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
        title={
          <>
            Try an agent{" "}
            <span className="gradient-text-3 italic">before you buy.</span>
          </>
        }
        description="Ready-made agents for lead follow-up, support, documents, reporting and similar tasks. No fee to try. If you need it inside your CRM or helpdesk, that is a custom project."
        primary={{ href: "#marketplace", label: "Explore Free Agents" }}
        visual={
          <Visual src={IMG.cyber} alt="Collection of AI assistants for everyday business tasks" />
        }
      />
      <WorkStats />
      <div id="marketplace">
        <FreeAgentsMarket />
      </div>
      <ConversionBand
        heading="Need an agent built for your business?"
        copy="If none of these match the workflow, we can build one against your tools. That work is quoted after a free discovery call."
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
        title={
          <>
            Turn data into{" "}
            <span className="gradient-text-3 italic">a number you can check.</span>
          </>
        }
        description="Forecasts, models and dashboards for a question you already have — which customers may leave, what to stock, which orders lose money. You see how the number was produced."
        primary={{ href: "/contact", label: "Discuss Your Data Challenge" }}
        secondary={{ href: "/services", label: "All services" }}
        visual={
          <Visual src={IMG.analytics} alt="Machine learning and code on a laptop" />
        }
      />
      <WorkStats />
      <CapabilityGrid
        heading="Models, when a model is the right tool"
        items={[
          { title: "Custom models", copy: "Frame the question, train, test and deploy. If a spreadsheet or a simple rule is enough, we say so." },
          { title: "Forecasts", copy: "Demand, churn, risk or stock — from your history, with a date range and an error band, not a single magic number." },
          { title: "Text", copy: "Classify tickets, extract fields from documents, search your own files. Not an open-ended chatbot unless that is the brief." },
          { title: "Images", copy: "Classify photos, find objects, read print (OCR). Factory and document use cases only if you have labelled examples." },
          { title: "Language APIs", copy: "When an existing model plus your documents (RAG) is enough, we use that instead of training from scratch." },
          { title: "Scoring APIs", copy: "A prediction your other systems can call. The payload includes the inputs that produced it." },
        ]}
      />
      <CapabilityGrid
        heading="Dashboards and pipelines"
        items={[
          { title: "Metric definitions", copy: "Agree what a number means before we chart it. Different teams often use the same word for different sums." },
          { title: "Power BI and similar", copy: "Reports your managers already know how to open, fed from a pipeline they can trust." },
          { title: "Pipelines", copy: "Extract, clean and load on a schedule. Broken jobs are visible; we do not hide them in a notebook." },
          { title: "Handover", copy: "Your team gets the queries, the warehouse objects and how to change a metric without calling us first." },
        ]}
      />
      <MlLifecycle />
      <TechChips
        heading="Technology stack"
        items={["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "MLflow", "Databricks", "Power BI", "Tableau", "Spark", "Azure", "AWS", "Docker", "FastAPI"]}
      />
      <ConversionBand
        heading="Have the data, not the answer?"
        copy="Bring the question, the files or the warehouse access. We will tell you whether a dashboard, a model or neither is the next step."
        cta="Talk about your data"
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
        title={
          <>
            Apps your users{" "}
            <span className="gradient-text-3 italic">will open again.</span>
          </>
        }
        description="iOS, Android and cross-platform apps. We ship a working first version, then change it from real use — customer apps, staff apps or partner apps."
        primary={{ href: "/contact", label: "Start Your Mobile Project" }}
        visual={
          <Visual src={IMG.mobile} alt="Mobile product interface on a phone" />
        }
      />
      <WorkStats />
      <section className="py-8">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["iOS and Android", "Working first version", "Your APIs behind the app", "Store submit and support"].map((t) => (
            <div key={t} className="mv-card mission-card" style={{ padding: 24, textAlign: "center" }}>
              <h3 className="mv-title" style={{ margin: 0, fontSize: "1rem" }}>{t}</h3>
            </div>
          ))}
        </div>
      </section>
      <CapabilityGrid
        heading="What we use, and when"
        items={[
          { title: "React Native", copy: "One codebase for iOS and Android when the screens and APIs are shared." },
          { title: "Flutter", copy: "Same idea, when you want Flutter’s UI kit or already have Flutter in-house." },
          { title: "Swift / SwiftUI", copy: "Native iOS when you need Apple-only features or an existing Swift team." },
          { title: "Kotlin / Android", copy: "Native Android when Play-only features or an existing Kotlin team matter." },
          { title: "Firebase and APIs", copy: "Login, push, analytics and the backends the app already needs to call." },
        ]}
      />
      <CapabilityGrid
        heading="How we deliver a mobile app"
        items={[
          { title: "One codebase when it fits", copy: "iOS and Android from the same project unless a native feature forces a split." },
          { title: "Code you can keep", copy: "Structure your own developers can extend. We do not leave a black box." },
          { title: "Store launch", copy: "We submit to App Store and Play, fix review issues, and hand over the accounts." },
          { title: "Login and data", copy: "Auth, payments and APIs using the same patterns as the rest of your stack." },
          { title: "Languages", copy: "English plus the locales you name. We do not claim every market out of the box." },
          { title: "After launch", copy: "A written support plan for crashes, OS updates and small feature work." },
        ]}
      />
      <ConversionBand
        heading="Ready to build the first version?"
        copy="Bring the user, the must-have screens and the systems the app must talk to. You get a quote before we write code."
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
        title={
          <>
            Know what to build{" "}
            <span className="gradient-text-3 italic">first.</span>
          </>
        }
        description="We look at how work runs, list where AI would save time or money, and rank the list with cost and effort. You can implement with us or with your own team."
        primary={{ href: "/contact", label: "Book an AI Consultation" }}
        visual={
          <Visual src={IMG.consulting} alt="AI consulting discussion" />
        }
      />
      <WorkStats />
      <CapabilityGrid
        heading="What the consulting engagement covers"
        items={[
          { title: "Where AI fits", copy: "We map products and ops, then drop ideas that do not have data, a owner or a real cost to save." },
          { title: "Ranked use cases", copy: "Impact vs effort, written down. You see why item one is first." },
          { title: "Stack choice", copy: "Which APIs, models and systems to use for that first build — not a catalogue of every vendor." },
          { title: "Data you have", copy: "Whether the files and systems can support the use case, and what is missing." },
          { title: "Rules and access", copy: "Who can see what, when a person must approve, and how you will check quality." },
          { title: "A sequenced plan", copy: "Phases, owners and a first milestone you can put in a calendar." },
        ]}
      />
      <section className="py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Consulting process</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["01", "Discovery", "Goals, workflows, data and constraints — written back to you."],
              ["02", "Ranked plan", "What to build first, what it needs, and a rough cost."],
              ["03", "Short proof", "If the top idea is uncertain, a small technical check before a build."],
              ["04", "Build (optional)", "We can implement, or your team can, using the same plan."],
              ["05", "Review", "Did the first workflow save the time or money we expected."],
            ].map(([n, t, d]) => (
              <article key={n} className="mv-card mission-card" style={{ padding: 24 }}>
                <div className="mv-subtitle mission-text">{n}</div>
                <h3 className="mv-title" style={{ fontSize: "1.05rem", marginBottom: 8 }}>{t}</h3>
                <p className="mv-desc" style={{ fontSize: "0.9rem", fontStyle: "normal" }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ConversionBand
        heading="Want a ranked plan, not a slide deck of ideas?"
        copy="Book a discovery call. You leave with what to build first, what it needs, and whether we or your team should do the work."
        cta="Book an AI Consultation"
        href="/contact"
      />
    </>
  );
}

