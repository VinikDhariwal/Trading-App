import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* CENTER WRAPPER */}
        <div className="footer-content">
          <div className="row justify-content-center text-center">

            {/* LEFT SECTION */}
            <div className="col-12 col-md-3 footer-brand">
              <img src="/Assets/logo.svg" alt="logo" className="footer-logo" />

              <p className="footer-copy">
                © 2010 - 2026, Zerodha Broking Ltd. <br />
                All rights reserved.
              </p>
              {/* SOCIAL ICONS */}
              <div className="footer-icons">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>

              <div className="footer-icons mt-3">
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </div>

              {/* APP BUTTONS */}
              <div className="footer-apps">
                <img src="/Assets/googlePlayBadge.svg" alt="Google Play" />
                <img src="/Assets/appstoreBadge.svg" alt="App Store" />
              </div>
            </div>

            {/* COLUMN 1 */}
            <div className="col-6 col-md-2 footer-col">
              <h6>Account</h6>
              <a href="#">Open demat account</a>
              <a href="#">Minor demat account</a>
              <a href="#">NRI demat account</a>
              <a href="#">HUF demat account</a>
              <a href="#">Commodity</a>
              <a href="#">Dematerialisation</a>
              <a href="#">Fund transfer</a>
              <a href="#">MTF</a>
            </div>

            {/* COLUMN 2 */}
            <div className="col-6 col-md-2 footer-col">
              <h6>Support</h6>
              <a href="#">Contact us</a>
              <a href="#">Support portal</a>
              <a href="#">How to file a complaint?</a>
              <a href="#">Status of complaints</a>
              <a href="#">Bulletin</a>
              <a href="#">Circular</a>
              <a href="#">Z-Connect blog</a>
              <a href="#">Downloads</a>
            </div>

            {/* COLUMN 3 */}
            <div className="col-6 col-md-2 footer-col">
              <h6>Company</h6>
              <a href="#">About</a>
              <a href="#">Philosophy</a>
              <a href="#">Press & media</a>
              <a href="#">Careers</a>
              <a href="#">Zerodha Cares (CSR)</a>
              <a href="#">Zerodha.tech</a>
              <a href="#">Open source</a>
              <a href="#">Referral program</a>
            </div>

            {/* COLUMN 4 */}
            <div className="col-6 col-md-3 footer-col">
              <h6>Quick links</h6>
              <a href="#">Upcoming IPOs</a>
              <a href="#">Brokerage charges</a>
              <a href="#">Market holidays</a>
              <a href="#">Economic calendar</a>
              <a href="#">Calculators</a>
              <a href="#">Markets</a>
              <a href="#">Sectors</a>
              <a href="#">Gift Nifty</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;