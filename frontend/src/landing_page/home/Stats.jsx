import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container stats-container">
      <div className="row stats-row justify-content-center">
        {/* LEFT CONTENT */}
        <div className="col-12 col-md-6 stats-content mt-5">
          <h2 className="stats-title">Trust with confidence</h2>

          <h3 className="stats-subtitle">Customer-first always</h3>
          <p className="stats-text">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h3 className="stats-subtitle">No spam or gimmicks</h3>
          <p className="stats-text">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="stats-subtitle">The Zerodha universe</h3>
          <p className="stats-text">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="stats-subtitle">Do better with money</h3>
          <p className="stats-text">
            With initiatives like Nudge and Kill Switch, we don’t just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* RIGHT IMAGE + LINKS */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="/Assets/ecosystem.png"
            alt="Ecosystem"
            className="stats-image"
          />

          {/* LINKS */}
          <div className="stats-links">
            <a href="#" className="stats-link">
              Explore products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="stats-link">
              Try Kite <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
