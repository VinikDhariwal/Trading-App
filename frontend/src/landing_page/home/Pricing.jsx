import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container pricing-container">
      <div className="row justify-content-center align-items-center">

        {/* LEFT */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="pricing-content mt-3">
            <h1 className="mb-3">Unbeatable Pricing</h1>

            <p>
              We pioneered the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>

            <Link to="/pricing" className="stats-link">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: "520px" }}>
            <div className="row text-center align-items-stretch">

              <div className="col-6 d-flex">
                <div className="pricing-box w-100">
                  <h1>₹0</h1>
                  <p>
                    Free equity delivery and <br />
                    direct mutual funds
                  </p>
                </div>
              </div>

              <div className="col-6 d-flex">
                <div className="pricing-box w-100">
                  <h1>₹20</h1>
                  <p>Intraday and F&amp;O</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;