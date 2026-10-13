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
            <h3 className="mv-title">Engineering the Future of Digital Innovation</h3>
            <p className="mv-desc">
              We envision a world where technology empowers every business to innovate faster, scale
              smarter, and create meaningful digital experiences that drive lasting success.
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
            <h3 className="mv-title">Building Technology That Creates Real Business Value</h3>
            <p className="mv-desc">
              We deliver scalable software, intelligent digital solutions, and trusted technology
              partnerships that help businesses solve challenges, accelerate growth, and stay ahead
              in a rapidly evolving world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
