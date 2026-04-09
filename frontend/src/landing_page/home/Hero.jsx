import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container hero-container">
      <div className="row justify-content-center">

        <div className="col-12 text-center mb-5">
          <img
            src="Assets/homeHero.png"
            alt="hero-image"
            className="hero-image"
          />
        </div>

        <div className="col-12 col-md-8 text-center">
          <h1 className="hero-title">Invest in everything</h1>
        </div>

        <div className="col-12 col-md-6 text-center">
          <p className="hero-subtitle">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
        </div>

        <div className="col-12 text-center">
          <button className="btn hero-btn">Signup Now</button>
        </div>

      </div>
    </div>
  );
}

export default Hero;