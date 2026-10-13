const topRow = [
  { letter: "R", value: "Reliability", tone: "cyan" as const },
  { letter: "O", value: "Ownership", tone: "cyan" as const },
  { letter: "B", value: "Boldness", tone: "cyan" as const },
  { letter: "O", value: "Obsession", tone: "cyan" as const },
];

const bottomRow = [
  { letter: "P", value: "Partnership", tone: "purple" as const },
  { letter: "I", value: "Integrity", tone: "purple" as const },
  { letter: "L", value: "Leadership", tone: "purple" as const },
  { letter: "O", value: "Outcomes", tone: "purple" as const },
  { letter: "T", value: "Trust", tone: "purple" as const },
];

function FlipCard({
  letter,
  value,
  tone,
}: {
  letter: string;
  value: string;
  tone: "cyan" | "purple";
}) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">{letter}</div>
        <div className="flip-card-back">
          <span className={tone === "cyan" ? "gradient-text-cyan" : "gradient-text-purple"}>{value}</span>
        </div>
      </div>
    </div>
  );
}

export function CoreValues() {
  return (
    <section className="core-values-section" id="core-values">
      <div className="container-x">
        <div className="values-header text-center">
          <div className="badge badge-outline">OUR CORE VALUES</div>
          <h2 className="section-title">
            The principles that powers
            <br />
            <span className="gradient-text-cyan italic">Robo</span>
            <span className="gradient-text-purple italic">Pilot</span>
          </h2>
          <p className="values-subtitle">
            Every letter in ROBOPILOT represents a value that defines how we think, collaborate, and
            deliver exceptional digital solutions.
          </p>
        </div>

        <div className="values-letters-container">
          <div className="letters-row letters-row-top">
            {topRow.map((item, i) => (
              <FlipCard key={`${item.letter}-${item.value}-${i}`} {...item} />
            ))}
          </div>
          <div className="letters-row letters-row-bottom">
            {bottomRow.map((item, i) => (
              <FlipCard key={`${item.letter}-${item.value}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
