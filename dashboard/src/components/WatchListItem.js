import React, { useContext } from "react";
import { FaArrowUp, FaArrowDown, FaChartBar } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import GeneralContext from "./GeneralContext";

const WatchListItem = ({ stock }) => {

  return (
    <li className="watch-item">

      <div className="item">

        <span className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </span>

        <div className="itemInfo">

          <span className="percent">{stock.percent}</span>

          {stock.isDown ? <FaArrowDown className="down arrow"/> : <FaArrowUp className="up arrow"/>}

          <span className="price">{stock.price}</span>

        </div>

      </div>

      <WatchActions stock={stock} />

    </li>
  );
};

export default WatchListItem;

/* ================= ACTIONS ================= */

const WatchActions = ({ stock }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div className="actions">

      <Tooltip label="Buy (B)">
        <button className="buy" onClick={() => openBuyWindow(stock.name, "BUY")}>B</button>
      </Tooltip>

      <Tooltip label="Sell (S)">
        <button className="sell" onClick={() => openBuyWindow(stock.name, "SELL")}>S</button>
      </Tooltip>

      <Tooltip label="Analytics">
        <button className="icon"><FaChartBar/></button>
      </Tooltip>

      <Tooltip label="More">
        <button className="icon"><FiMoreHorizontal/></button>
      </Tooltip>

    </div>
  );
};

/* ================= TOOLTIP ================= */

const Tooltip = ({ children, label }) => {

  return (
    <div className="tooltip-wrap">
      {children}
      <span className="tooltip">{label}</span>
    </div>
  );
};
