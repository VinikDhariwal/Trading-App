import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center mt-5 mb-5 p-5 text-muted">
          <h3>We pioneered the discount broking model in India.</h3>
          <h3>Now, we are breaking ground with our technology.</h3>
        </div>
        <hr className="text-muted"/>
        <div className="col-2"></div>
        {/* LEFT COLUMN */}
        <div className="col-4 about-text text-muted mt-5 mb-5">
          <p className="p-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="p-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="p-2">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-4 about-text text-muted mt-5 mb-5">
          <p className="p-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="p-2">
            <a href="#" className="about-link" style={{textDecoration:"none"}}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="p-2" >
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="about-link" style={{textDecoration:"none"}}>
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="#" className="about-link" style={{textDecoration:"none"}}>
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="#" className="about-link" style={{textDecoration:"none"}}>
              philosophies
            </a>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Hero;
