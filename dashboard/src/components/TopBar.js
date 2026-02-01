import React from "react";
import Menu from "./Menu";
import "./Topbar.css";

const TopBar = ({onToggleSidebar}) => {
  return (
    <div className="topbar">

      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle watchlist">☰</button>
        <div className="indices">

          <div className="index-card">
            <span className="index-name">NIFTY 50</span>
            <span className="index-value green">+100.2</span>
            <span className="index-percent green">(+0.45%)</span>
          </div>

          <div className="index-card">
            <span className="index-name">SENSEX</span>
            <span className="index-value red">-85.6</span>
            <span className="index-percent red">(-0.21%)</span>
          </div>

        </div>
      </div>

      <Menu />

    </div>
  );
};

export default TopBar;
