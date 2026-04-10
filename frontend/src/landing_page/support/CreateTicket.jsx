import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5 text-muted mt-5 mb-5">

    <div className="row">
    <div className="col-1"></div>
        {/* COLUMN 1 */}
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "500px",
          }}
        >
          <div>
            <h5 style={{ marginBottom: "15px", fontWeight: "500" }}>
              Account Opening
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Online Account Opening</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Offline Account Opening</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Company, Partnership and HUF Account Opening
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>NRI Account Opening</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Charges at Zerodha</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Zerodha IDFC FIRST Bank 3-in-1 Account
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Getting Started</li>
            </ul>
          </div>

          <div>
            <h5 style={{ marginTop: "40px", marginBottom: "15px", fontWeight: "500" }}>
              Funds
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Adding Funds</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Fund Withdrawal</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>eMandates</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Adding Bank Accounts</li>
            </ul>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "500px",
          }}
        >
          <div>
            <h5 style={{ marginBottom: "15px", fontWeight: "500" }}>
              Your Zerodha Account
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Login Credentials</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Account Modification and Segment Addition
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                DP ID and bank details
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Your Profile</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Transfer and conversion of shares
              </li>
            </ul>
          </div>

          <div>
            <h5 style={{ marginTop: "40px", marginBottom: "15px", fontWeight: "500" }}>
              Console
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Reports</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Ledger</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Portfolio</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>60 Day Challenge</li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "500px",
          }}
        >
          <div>
            <h5 style={{ marginBottom: "15px", fontWeight: "500" }}>
              Your Zerodha Account
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Margin/leverage, Product and Order types
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Kite Web and Mobile</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Trading FAQs</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Corporate Actions</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Sentinel</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Kite API</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Pi and other platforms
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>Stockreports+</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>GTT</li>
            </ul>
          </div>

          <div>
            <h5 style={{ marginTop: "40px", marginBottom: "15px", fontWeight: "500" }}>
              Coin
            </h5>

            <ul style={{ listStyle: "none", padding: 0, color: "#387ed1" }}>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Understanding Mutual Funds
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>About Coin</li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Buying and Selling through Coin
              </li>
              <li style={{ marginBottom: "8px", cursor: "pointer" }}>
                Starting an SIP
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default CreateTicket;