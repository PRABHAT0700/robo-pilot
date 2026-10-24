export function MissionVision() {
  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="container-x">
        <div className="mv-grid">
          <div className="mv-card vision-card">
            <div className="mv-icon-wrapper vision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="mv-subtitle vision-text">OUR VISION</div>
            <h3 className="mv-title">Software people will actually use</h3>
            <p className="mv-desc">
              We want growing businesses in India and the world to have AI, data and mobile products
              they can rely on — built by a small team that stays with the work.
            </p>
          </div>

          <div className="mv-card mission-card">
            <div className="mv-icon-wrapper mission-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="mv-subtitle mission-text">OUR MISSION</div>
            <h3 className="mv-title">Understand the problem, then build the part that helps</h3>
            <p className="mv-desc">
              We look at how your business runs, agree the scope in writing, and ship working
              software every week — with senior engineers on every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
