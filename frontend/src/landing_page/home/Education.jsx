import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="container education-container">
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-6 text-center">
          <img
            src="/Assets/education.svg"
            alt="Education"
            className="education-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-6 education-content">

          <h2 className="education-title">
            Free and open market education
          </h2>

          <p className="education-text">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="stats-link">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="education-text mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#" className="stats-link">
            Trading Q&amp;A <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;