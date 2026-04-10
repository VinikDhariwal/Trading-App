import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container  text-center">
      {/* TOP LINK */}
      <h5 className="text-muted mb-5 p-5" style={{ lineHeight: "1.6" }}>
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="https://zerodha.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#387ed1",
            fontWeight: "500",
          }}
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>

      {/* HEADING */}
      <h4 className="fw-semibold mt-5 p-3 text-muted">The Zerodha Universe</h4>

      <p className="text-muted pb-5 mb-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* GRID */}
      <div className="row justify-content-center p-4">
        <div className="col-10">
          <div className="row text-center gy-5">
            {/* ROW 1 */}

            <div className="col-md-4">
              <img
                src="/Assets/zerodhaFundhouse.png"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/Assets/sensibullLogo.svg"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/Assets/goldenpiLogo.png"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>

            {/* ROW 2 */}

            <div className="col-md-4">
              <img
                src="/Assets/streakLogo.png"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/Assets/smallcaseLogo.png"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/Assets/dittoLogo.png"
                className="mb-3"
                style={{ height: "40px" }}
              />
              <p className="text-muted small px-4">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/signup">
      <button
          style={{
            marginBottom:"5rem",
            width: "20%",
            backgroundColor: "#387ed1",
            color: "#fff",
            padding: "10px 28px",
            fontSize: "1.05rem",
            fontWeight: "500",
            border: "none",
            borderRadius: "3px",
            letterSpacing: "0.3px",
            cursor: "pointer",
          }}
        >
          Sign up for free
        </button>
        </Link>
    </div>
  );
}

export default Universe;
