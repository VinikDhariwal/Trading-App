import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="container awards-container">
      <div className="row align-items-center">

        <div className="col-12 col-md-6 text-center">
          <img
            src="/Assets/largestBroker.svg"
            alt="largest-broker"
            className="awards-image"
          />
        </div>

        <div className="col-12 col-md-6 awards-content">
          <h1 className="awards-title">Largest stock broker in India</h1>
          <p className="awards-subtitle">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-12 col-sm-6 p-3">
              <ul className="awards-list">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 p-3">
              <ul className="awards-list">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government securities</li>
              </ul>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12">
              <img
                src="/Assets/pressLogos.png"
                alt="press-logos"
                className="press-logo"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Awards;