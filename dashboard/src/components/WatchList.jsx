import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import "./WatchList.css";

/* ── Main component ──────────────────────────────────────── */
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchlistItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

/* ── List item ───────────────────────────────────────────── */
const WatchlistItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p>{stock.name}</p>
      </div>

      <div className="itemInfo">
        <span className={`percent ${stock.isDown ? "down" : "up"}`}>
          {stock.percent}
        </span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down" />
        ) : (
          <KeyboardArrowUp className="up" />
        )}
      </div>

      {showActions && <WatchlistActions />}
    </li>
  );
};

/* ── Action buttons ──────────────────────────────────────── */
const WatchlistActions = () => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="Delete"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <Delete className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
