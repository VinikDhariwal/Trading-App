import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Account created!");
  };

  return (
    <div className="trading-signup-page">
      <div className="trading-signup-card">

        {/* LEFT */}
        <div className="trading-left">
          <div className="trading-logo">
            <div className="trading-logo-mark">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 14L9 4L16 14H2Z" fill="#387ed1" />
              </svg>
            </div>
            <span className="trading-logo-name">Trading App</span>
          </div>

          <img
            className="trading-banner-img"
            src="https://zerodha.com/static/images/landing.png"
            alt="Invest in everything"
            onError={(e) => (e.target.style.display = "none")}
          />

          <h2>Invest in everything</h2>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <div className="trading-badges">
            {["Stocks", "Mutual Funds", "Derivatives", "ETFs"].map((b) => (
              <span key={b} className="trading-badge">{b}</span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="trading-right">
          <h1>Signup now</h1>
          <p className="trading-subtitle">Or track your existing application</p>

          <div className="trading-field">
            <label>Full name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="trading-field">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="trading-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button className="trading-signup-btn" onClick={handleSubmit}>
            Create Account
          </button>

          <div className="trading-divider">
            <span>or</span>
          </div>

          <p className="trading-login-text">
            Already have an account? <span>Login</span>
          </p>
        </div>

      </div>
    </div>
  );
}