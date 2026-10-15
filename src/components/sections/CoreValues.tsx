const topRow = [
  { letter: "R", value: "Reliability", tone: "cyan" as const },
  { letter: "O", value: "Openness", tone: "cyan" as const },
  { letter: "B", value: "Built to last", tone: "cyan" as const },
  { letter: "O", value: "Ownership", tone: "cyan" as const },
];

const bottomRow = [
  { letter: "P", value: "Precision", tone: "purple" as const },
  { letter: "Y", value: "Yield", tone: "purple" as const },
  { letter: "L", value: "Listening", tone: "purple" as const },
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
            The principles behind
            <br />
            <span className="gradient-text-cyan italic">Robo</span>
            <span className="gradient-text-purple italic">Pylot</span>
          </h2>
          <p className="values-subtitle">
            Each letter in RoboPylot stands for something we try to do on every project.
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
