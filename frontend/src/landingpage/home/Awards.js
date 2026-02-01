import React from "react";

function Awards() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/lBrokrage.png"
            alt="Finova Platform"
            className="img-fluid"
            style={{ maxWidth: "620px", width: "100%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-12">

          <h2 className="fw-bold mb-3">
            Powering the next generation of investors
          </h2>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            Finova is built for modern traders and long-term investors. Our
            platform combines speed, simplicity, and smart tools to help you
            grow your wealth with confidence — whether you are just starting or
            scaling your portfolio.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            Users rely on Finova to manage their investments across multiple
            asset classes:
          </p>

          <div className="row mt-3">

            <div className="col-sm-6 col-12">
              <ul className="text-muted">
                <li>Equity trading</li>
                <li>Futures & options</li>
                <li>Currency markets</li>
              </ul>
            </div>

            <div className="col-sm-6 col-12">
              <ul className="text-muted">
                <li>Stocks & IPO access</li>
                <li>Direct mutual funds</li>
                <li>Bonds & government securities</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;

