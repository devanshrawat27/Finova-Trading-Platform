import React,{useState , useEffect} from "react";
import { holdings as sampleHoldings } from "../data/data";

import "./Holdings.css";
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {

  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/allholdings")
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          // fallback to local sample data when backend isn't available
          setHoldings(sampleHoldings);
        } else {
          setHoldings(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setHoldings(sampleHoldings);
      });
  }, []);

  

  // Safely parse numeric values from the holding object
  const currentValue = (h) => {
    const price = Number(h.price) || 0;
    const qty = Number(h.qty) || 0;
    return Number((price * qty).toFixed(2)); // return a Number for charts
  };

  const profitLoss = (h) => {
    const price = Number(h.price) || 0;
    const avg = Number(h.avg) || 0;
    const qty = Number(h.qty) || 0;
    return Number(((price - avg) * qty).toFixed(2)); // return a Number
  };

  return (
    <div className="holdings-wrapper">

      <h3 className="title fade-in">Holdings ({holdings.length})</h3>

      <div className="order-table slide-up">

        <table className="table responsive-table">

          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((h, i) => {

              const pl = profitLoss(h);

              // helper to determine negative values for strings like '-1.23%' or numbers
              const isNegative = (v) => {
                if (v == null) return false;
                if (typeof v === 'number') return v < 0;
                // Remove percent sign and plus sign, then parse
                const cleaned = String(v).replace(/%/g, '').replace(/,/g, '').replace(/\+/g, '');
                const n = Number(cleaned);
                return !Number.isNaN(n) && n < 0;
              };

              const netNegative = isNegative(h.net);
              const dayNegative = isNegative(h.day);

              return (
                <tr key={i} className="row-animate">

                  <td data-label="Instrument">
                    <strong>{h.name}</strong>
                  </td>

                  <td data-label="Qty">{h.qty}</td>
                  <td data-label="Avg">{h.avg}</td>
                  <td data-label="LTP">{h.price}</td>
                  <td data-label="Value">{currentValue(h).toFixed ? currentValue(h).toFixed(2) : currentValue(h)}</td>

                  <td
                    data-label="P&L"
                    className={pl >= 0 ? "profit" : "loss"}
                  >
                    {pl.toFixed(2)}
                  </td>

                  <td
                    data-label="Net"
                    className={netNegative ? "loss" : "profit"}
                  >
                    {h.net}
                  </td>

                  <td
                    data-label="Day"
                    className={dayNegative ? "loss" : "profit"}
                  >
                    {h.day}
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>

      </div>
      <div className="vertical-chart">
       <VerticalGraph data={{
        labels: holdings.map(h => h.name),
        datasets: [
          {
            label: 'Current Value',
            data: holdings.map(h => currentValue(h)),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      }} />
      </div>

    </div>
  );
};

export default Holdings;
