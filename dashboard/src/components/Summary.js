import React from "react";

const Summary = () => {
  return (
    <div style={{ padding: 20 }}>

      {/* Header */}
      <div style={header}>
        <h4 style={{ margin: 0 }}>Hi, User 👋</h4>
      </div>

      {/* Equity */}
      <div style={card}>
        <div style={title}>Equity</div>

        <div style={mainGrid}>
          <div>
            <h2 style={bigNumber}>₹3.74k</h2>
            <p style={muted}>Margin available</p>
          </div>

          <div style={dividerV} />

          <div>
            <Row label="Margins used" value="0" />
            <Row label="Opening balance" value="₹3.74k" />
          </div>
        </div>
      </div>

      {/* Holdings */}
      <div style={{ ...card, marginTop: 20 }}>
        <div style={title}>Holdings (13)</div>

        <div style={mainGrid}>
          <div>
            <h2 style={{ ...bigNumber, color: "#00a86b" }}>
              ₹1.55k <small style={{ fontSize: 14 }}>+5.20%</small>
            </h2>
            <p style={muted}>Total P&L</p>
          </div>

          <div style={dividerV} />

          <div>
            <Row label="Current Value" value="₹31.43k" />
            <Row label="Investment" value="₹29.88k" />
          </div>
        </div>
      </div>

    </div>
  );
};

/* Row */

const Row = ({ label, value }) => (
  <div style={row}>
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);

/* Styles */

const header = {
  marginBottom: 20,
  animation: "fadeIn .6s ease"
};

const card = {
  background: "#fff",
  borderRadius: 14,
  padding: 20,
  boxShadow: "0 4px 12px rgba(0,0,0,.06)",
  transition: ".3s",
  animation: "slideUp .5s ease",
};

const title = {
  fontWeight: 600,
  marginBottom: 15
};

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center"
};

const bigNumber = {
  margin: 0,
  animation: "pop .5s ease"
};

const muted = {
  color: "#777",
  fontSize: 13
};

const dividerV = {
  width: 1,
  height: 60,
  background: "#ddd",
  margin: "0 20px"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8
};

export default Summary;
