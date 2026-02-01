import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 text-center">

      <h2 className="fw-bold mb-3">Start investing with Finova</h2>

      <p
        className="text-muted mb-4"
        style={{ maxWidth: "620px", margin: "0 auto", lineHeight: "1.7" }}
      >
        Modern trading platform, zero account opening charges, and simple pricing
        designed to help you invest smarter — whether you’re just starting or
        actively trading.
      </p>

      <button
        className="btn px-4 py-2 fs-6 shadow"
        style={{
          background: "linear-gradient(135deg,#2962ff,#00c6ff)",
          color: "white",
          borderRadius: "12px",
          border: "none",
          minWidth: "180px",
        }}
      >
        Sign up for free
      </button>

    </div>
  );
}

export default OpenAccount;
