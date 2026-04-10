import React from "react";

function Hero() {
  return (
    <div className="container text-muted text-center py-5">
      <h2 className="fw-semibold mb-3">
        Support Portal
      </h2>

      <p className="text-muted fs-5 mb-3">
        Search for an answer or browse help topics to create a ticket
      </p>

      {/* SEARCH BAR */}
      <div className="d-flex justify-content-center mt-4">
        <input
          type="text"
          placeholder="Eg: How do I activate F&O, why is my order getting rejected..."
          className="form-control w-50"
          style={{ padding: "12px" }}
        />
      </div>
    </div>
  );
}

export default Hero;