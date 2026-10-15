"use client";

const nodes = [
  "User",
  "Agent",
  "Knowledge",
  "Tools / APIs",
  "Business systems",
  "Human approval",
  "Outcome",
];

export function AgentWorkflow() {
  return (
    <section className="core-values-section" style={{ padding: "80px 0" }}>
      <div className="container-x">
        <div className="values-header">
          <div className="badge badge-outline">HOW IT RUNS</div>
          <h2 className="section-title">
            From request to action — an{" "}
            <span className="gradient-text-3 italic">intelligent</span> workflow.
          </h2>
        </div>
        <div className="letters-row" style={{ flexWrap: "wrap" }}>
          {nodes.map((n) => (
            <div key={n} className="flip-card-front svc-chip">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MlLifecycle() {
  const steps = ["Discover", "Prepare Data", "Experiment", "Validate", "Deploy", "Monitor", "Improve"];
  return (
    <section className="core-values-section" style={{ padding: "80px 0" }}>
      <div className="container-x">
        <div className="values-header">
          <div className="badge badge-outline">LIFECYCLE</div>
          <h2 className="section-title">
            ML delivery <span className="gradient-text-3 italic">lifecycle</span>
          </h2>
        </div>
        <div className="letters-row" style={{ flexWrap: "wrap" }}>
          {steps.map((s, i) => (
            <article key={s} className="mv-card mission-card" style={{ padding: 20, minWidth: 140, flex: "1 1 140px" }}>
              <div className="mv-subtitle mission-text">0{i + 1}</div>
              <h3 className="mv-title" style={{ fontSize: "1rem", margin: 0 }}>
                {s}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
