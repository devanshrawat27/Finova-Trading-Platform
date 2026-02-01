import React from "react";

function Pricing() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-5 col-12 mb-4 mb-lg-0">

          <h2 className="fw-bold mb-3">Simple & transparent pricing</h2>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            Finova believes in fair and transparent pricing. No hidden charges,
            no surprises — just simple fees designed for modern traders and
            long-term investors.
          </p>

          <a href="/" style={{ textDecoration: "none", color: "#2962ff" }}>
            See pricing →
          </a>

        </div>

        {/* Right Cards */}
        <div className="col-lg-7 col-12">

          <div className="row text-center">

            <div className="col-md-4 col-12 mb-3">
              <div className="border rounded p-4 h-100">
                <h1 className="fw-bold text-primary">₹0</h1>
                <p className="text-muted mb-0">Account opening</p>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-3">
              <div className="border rounded p-4 h-100">
                <h1 className="fw-bold text-primary">₹0</h1>
                <p className="text-muted mb-0">Equity delivery & mutual funds</p>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-3">
              <div className="border rounded p-4 h-100">
                <h1 className="fw-bold text-primary">₹20</h1>
                <p className="text-muted mb-0">Intraday & F&O per order</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Pricing;
