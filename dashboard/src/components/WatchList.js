import React from "react";
import { watchlist } from "../data/data";
import WatchListItem from "./WatchListItem";
import "./WatchList.css";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = ({ onClose, open }) => {
  return (
    <div className={`watchlist-container ${open ? "open" : ""}`}>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search">
          <svg
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21l-4.35-4.35"
              stroke="#6b7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="#6b7280"
              strokeWidth="1.5"
            />
          </svg>

          <input placeholder="Search e.g. INFY, NIFTY, GOLD" />
        </div>

        <span className="count">{watchlist.length} / 50</span>

        {onClose && (
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        )}
      </div>

      {/* Stocks */}
      <ul>
        {watchlist.map((stock, i) => (
          <WatchListItem stock={stock} key={i} />
        ))}
      </ul>

      {/* Chart */}
      <div className="chart-wrap">
        <DoughnutChart
          data={{
            labels: watchlist.map((w) => w.name),
            datasets: [
              {
                label: "Watchlist price share",
                data: watchlist.map((w) => Number(w.price) || 0),
                backgroundColor: [
                  "#00a86b",
                  "#2979ff",
                  "#ffb703",
                  "#06b6d4",
                  "#8b5cf6",
                  "#fb7185",
                  "#94a3b8",
                  "#22c55e",
                ],
              },
            ],
          }}
        />
      </div>

    </div>
  );
};

export default WatchList;
