import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const [orderType, setOrderType] = useState("market");
  const [validity, setValidity] = useState("day");

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    axios.post("http://localhost:8080/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  return (
    <div className="buy-overlay">
      <div className="buy-header">
        <div className="buy-header-top">
          <div>
            <p className="buy-header-label">NSE</p>
            <p className="buy-header-value">{uid}</p>
          </div>
          <button onClick={closeBuyWindow} style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            padding: "0",
            lineHeight: 1,
          }}>✕</button>
        </div>
        <div className="buy-radio-group">
          {["market", "limit", "sl"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="ordertype"
                checked={orderType === type}
                onChange={() => setOrderType(type)}
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="buy-tabs">
        {["Regular", "Cover", "AMO"].map((tab) => (
          <button key={tab} className={tab === "Regular" ? "active" : ""}>
            {tab}
          </button>
        ))}
      </div>

      <div className="buy-body">
        <div className="buy-input-row">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>

        <div className="buy-validity-row">
          <span>Order validity</span>
          <div className="buy-validity-options">
            {["day", "ioc"].map((v) => (
              <label key={v}>
                <input
                  type="radio"
                  name="validity"
                  checked={validity === v}
                  onChange={() => setValidity(v)}
                />
                {v.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        <div className="buy-margin-box">
          <span>Margin required</span>
          <span>₹140.65</span>
        </div>
      </div>

      <div className="buy-footer">
        <button className="buy-btn" onClick={handleBuyClick}>Buy</button>
        <button className="cancel-btn" onClick={closeBuyWindow}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyActionWindow;