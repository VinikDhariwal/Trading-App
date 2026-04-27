import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const [orderType, setOrderType] = useState("market");
  const [validity, setValidity] = useState("day");

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    axios.post("http://localhost:8080/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    closeSellWindow();
  };

  return (
    <div className="sell-overlay">
      <div className="sell-header">
        <div className="sell-header-top">
          <div>
            <p className="sell-header-label">NSE</p>
            <p className="sell-header-value">{uid}</p>
          </div>
          <button onClick={closeSellWindow} style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            padding: "0",
            lineHeight: 1,
          }}>✕</button>
        </div>
        <div className="sell-radio-group">
          {["market", "limit", "sl"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="sellordertype"
                checked={orderType === type}
                onChange={() => setOrderType(type)}
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="sell-tabs">
        {["Regular", "Cover", "AMO"].map((tab) => (
          <button key={tab} className={tab === "Regular" ? "active" : ""}>
            {tab}
          </button>
        ))}
      </div>

      <div className="sell-body">
        <div className="sell-input-row">
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

        <div className="sell-validity-row">
          <span>Order validity</span>
          <div className="sell-validity-options">
            {["day", "ioc"].map((v) => (
              <label key={v}>
                <input
                  type="radio"
                  name="sellvalidity"
                  checked={validity === v}
                  onChange={() => setValidity(v)}
                />
                {v.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        <div className="sell-margin-box">
          <span>Margin required</span>
          <span>₹140.65</span>
        </div>
      </div>

      <div className="sell-footer">
        <button className="sell-btn" onClick={handleSellClick}>Sell</button>
        <button className="cancel-btn" onClick={closeSellWindow}>Cancel</button>
      </div>
    </div>
  );
};

export default SellActionWindow;