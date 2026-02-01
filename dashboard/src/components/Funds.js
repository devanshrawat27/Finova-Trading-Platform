import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div style={{ padding: 30, background: "#f6f8fb", minHeight: "100vh" }}>

      {/* Top Bar */}
      <div style={topBar}>
        <p style={{ margin: 0 }}>Instant zero-cost UPI fund transfers</p>

        <div>
          <Link style={btnGreen}>Add Funds</Link>
          <Link style={btnBlue}>Withdraw</Link>
        </div>
      </div>

      <div style={grid}>

        {/* Equity */}
        <div style={card}>
          <h3>Equity</h3>

          <div style={statsGrid}>
            <Stat title="Available Margin" value="₹4,043.10" highlight />
            <Stat title="Used Margin" value="₹3,757.30" />
            <Stat title="Available Cash" value="₹4,043.10" />
            <Stat title="Opening Balance" value="₹3,736.40" />
          </div>

          <hr />

          <Row label="Payin" value="4064" />
          <Row label="SPAN" value="0" />
          <Row label="Delivery Margin" value="0" />
          <Row label="Exposure" value="0" />
          <Row label="Options Premium" value="0" />

          <hr />

          <Row label="Total Collateral" value="0" bold />
        </div>

        

      </div>
    </div>
  );
};

/* Components */

const Stat = ({ title, value, highlight }) => (
  <div style={statBox}>
    <p style={{ fontSize: 13, color: "#777" }}>{title}</p>
    <h3 style={{ color: highlight ? "#00a86b" : "#111" }}>{value}</h3>
  </div>
);

const Row = ({ label, value, bold }) => (
  <div style={{ display: "flex", justifyContent: "space-between", margin: "6px 0", fontWeight: bold && 600 }}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

/* Styles */

const topBar = {
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,.06)"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 20,
  marginTop: 25
};

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,.06)"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 15,
  marginBottom: 10
};

const statBox = {
  background: "#f4f6fa",
  padding: 15,
  borderRadius: 10
};

const btnGreen = {
  background: "#00c853",
  color: "#fff",
  padding: "8px 18px",
  borderRadius: 8,
  textDecoration: "none",
  marginRight: 10,
  fontWeight: 600
};

const btnBlue = {
  background: "#2979ff",
  color: "#fff",
  padding: "8px 18px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600
};

export default Funds;
