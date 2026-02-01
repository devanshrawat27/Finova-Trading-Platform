import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Positions.css";

const Positions = () => {
     
       const [positions, setPositions] = useState([]);
     
       useEffect(() => {
         fetch("http://localhost:3002/allposition")
           .then((res) => res.json())
           .then((data) => setPositions(data))
           .catch((err) => console.error("Error fetching positions:", err));
       }, []);

  const profitLoss = (p) => ((p.price - p.avg) * p.qty).toFixed(2);

  return (
    <div className="positions-wrapper">

      <h3 className="positions-title pos-fade">
        Positions ({positions.length})
      </h3>

      <div className="positions-table">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg</th>
            </tr>
          </thead>

          <tbody>

            {positions.map((p, i) => {

              const pl = profitLoss(p);

              return (
                <tr key={i} className="pos-row">

                  <td data-label="Product">{p.product}</td>

                  <td data-label="Instrument">
                    <strong>{p.name}</strong>
                  </td>

                  <td data-label="Qty">{p.qty}</td>

                  <td data-label="Avg">{p.avg}</td>

                  <td data-label="LTP">{p.price}</td>

                  <td
                    data-label="P&L"
                    className={pl >= 0 ? "pos-profit" : "pos-loss"}
                  >
                    {pl}
                  </td>

                  <td
                    data-label="Chg"
                    className={p.day.includes("-") ? "pos-loss" : "pos-profit"}
                  >
                    {p.day}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Positions;
