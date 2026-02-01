import React, { useState } from "react";

function Brokerage() {
  const [tab, setTab] = useState("equity");

  return (
    <div className="container py-5 brokerage-page">

      {/* TABS */}
      <div className="d-flex gap-4 border-bottom mb-4">
        {["equity", "currency", "commodity"].map((t) => (
          <span
            key={t}
            onClick={() => setTab(t)}
            className={`pricing-tab ${tab === t && "active"}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </span>
        ))}
      </div>

      {/* TABLES */}

      {tab === "equity" && (
        <Table
          headers={["", "Delivery", "Intraday", "F&O"]}
          rows={[
            ["Brokerage", "Zero", "0.03% / ₹20", "₹20"],
            ["GST", "18%", "18%", "18%"],
            ["SEBI", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
            ["Stamp", "0.015%", "0.003%", "0.002%"],
          ]}
        />
      )}

      {tab === "currency" && (
        <Table
          headers={["", "Futures", "Options"]}
          rows={[
            ["Brokerage", "0.03% / ₹20", "₹20"],
            ["GST", "18%", "18%"],
            ["SEBI", "₹10 / crore", "₹10 / crore"],
            ["Stamp", "₹10 / crore", "₹10 / crore"],
          ]}
        />
      )}

      {tab === "commodity" && (
        <Table
          headers={["", "Futures", "Options"]}
          rows={[
            ["Brokerage", "0.03% / ₹20", "₹20"],
            ["GST", "18%", "18%"],
            ["SEBI", "₹10 / crore", "₹10 / crore"],
            ["Stamp", "₹200 / crore", "₹300 / crore"],
          ]}
        />
      )}

      <p className="calc-link">Calculate your costs upfront using our brokerage calculator</p>

      {/* ACCOUNT OPENING */}
      <Section title="Charges for account opening" style={{ lineHeight: "1.7" }}>
        <SimpleTable
          headers={["Type", "Charges"]}
          rows={[
            ["Online account", <Free />],
            ["Offline account", <Free />],
            ["NRI account", "₹500"],
            ["Corporate account", "₹500"],
          ]}
        />
      </Section>

      {/* AMC */}
      <Section title="Demat AMC" style={{ lineHeight: "1.7" }}>
        <SimpleTable
          headers={["Holdings", "AMC"]}
          rows={[
            ["Up to ₹4 lakh", <Free />],
            ["₹4–₹10 lakh", "₹100 / year"],
            ["Above ₹10 lakh", "₹300 / year"],
          ]}
        />
      </Section>

      {/* SERVICES */}
      <Section title="Optional services " style={{ lineHeight: "1.7" }}>
        <SimpleTable
          headers={["Service", "Billing", "Charges"]}
          rows={[
            ["Tickertape", "Monthly / Annual", "Free / 249"],
            ["Smallcase", "Per txn", "100 / SIP 10"],
            ["Kite Connect", "Monthly", "500"],
          ]}
        />
      </Section>

      {/* EXPLAINED */}

      <div className="charges-explained mt-5">

        <h3>Charges explained</h3>

        <div className="row mt-4">

          <div className="col-lg-6 pe-lg-5">

            <h6>Securities / Commodities transaction tax</h6>
            <p>Tax by the government when transacting on exchanges.</p>

            <h6>Transaction charges</h6>
            <p>Charged by NSE, BSE & MCX.</p>

            <ul>
              <li>XC/XD/Z: ₹10,000 per crore</li>
              <li>SS/ST: ₹1,00,000 per crore</li>
              <li>Group A/B: ₹375 per crore</li>
            </ul>

            <h6>Call & Trade</h6>
            <p>₹50 per order.</p>

            <h6>NRI Brokerage</h6>
            <ul>
              <li>Non-PIS: 0.5% or ₹50</li>
              <li>PIS: 0.5% or ₹200</li>
            </ul>

          </div>

          <div className="col-lg-6 ps-lg-5">

            <h6>GST</h6>
            <p>18% on brokerage + SEBI + transaction.</p>

            <h6>SEBI</h6>
            <p>₹10 per crore.</p>

            <h6>DP Charges</h6>
            <p>₹15.34 per scrip.</p>

            <h6>AMC</h6>
            <ul>
              <li>BSDA: Free under ₹4L</li>
              <li>Normal: ₹300/year</li>
            </ul>

            <h6>Other</h6>
            <ul>
              <li>Pledge: ₹30</li>
              <li>Off market: ₹25</li>
              <li>Gateway: ₹9</li>
            </ul>

          </div>

        </div>

      </div>

      {/* DISCLAIMER */}

<div className="mt-5">

  <h5>Disclaimer</h5>

  <p className="text-muted small" style={{ lineHeight: "1.7" }}>
    For delivery based trades, a minimum of ₹0.01 will be charged per contract note.
    Clients who opt to receive physical contract notes will be charged ₹20 per contract
    note plus courier charges.
  </p>

  <p className="text-muted small" style={{ lineHeight: "1.7" }}>
    Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory
    and regulatory charges will be levied at actuals. Brokerage is also charged on expired,
    exercised, and assigned options contracts.
  </p>

  <p className="text-muted small" style={{ lineHeight: "1.7" }}>
    Free investments are available only for retail individual clients. Companies,
    Partnerships, Trusts, and HUFs are charged 0.1% or ₹20 (whichever is less) as delivery
    brokerage.
  </p>

  <p className="text-muted small" style={{ lineHeight: "1.7" }}>
    A brokerage of 0.25% of the contract value will be charged for contracts where physical
    delivery happens. For netted off positions in physically settled contracts, brokerage
    of 0.1% will be charged.
  </p>

</div>


    </div>
  );
}

/* COMPONENTS */

const Free = () => <span className="free-badge">FREE</span>;

const Section = ({ title, children }) => (
  <div className="mt-5">
    <h4>{title}</h4>
    {children}
  </div>
);

const Table = ({ headers, rows }) => (
  <table className="table border mt-3 "style={{ lineHeight: "1.7" }}>
    <thead className="table-light">
      <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
    </thead>
    <tbody>
      {rows.map((r, i) => (
        <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
      ))}
    </tbody>
  </table>
);

const SimpleTable = ({ headers, rows }) => (
  <table className="table border mt-3 " style={{ lineHeight: "1.7" }}>
    <thead className="table-light">
      <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
    </thead>
    <tbody>
      {rows.map((r, i) => (
        <tr key={i}>
          {r.map((c, j) => <td key={j}>{c}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Brokerage;
