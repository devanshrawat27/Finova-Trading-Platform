import React from "react";

function Universe() {
  return (
    <div className="container py-5 text-center">

      {/* Heading */}
      <h2 className="fw-semibold mb-2">The Finova Universe</h2>

      <p className="text-muted mb-5">
        Extend your investing experience with Finova’s growing ecosystem of
        smart financial products.
      </p>

      {/* Grid */}
      <div className="row gy-5">

        {/* Card */}
        <div className="col-lg-4 col-md-6">
          <img src="media/images/finovafunds.png" className="universe-icon" />
          <h5 className="mt-3">Finova Funds</h5>
          <p className="text-muted small px-4">
            Simple and transparent mutual fund investments to help you grow your wealth steadily.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img src="media/images/optionlab.png" className="universe-icon" />
          <h5 className="mt-3">Options Lab</h5>
          <p className="text-muted small px-4">
            Build option strategies, analyze positions, and explore derivatives data visually.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img src="media/images/market.png" className="universe-icon" />
          <h5 className="mt-3">Market Research</h5>
          <p className="text-muted small px-4">
            Deep insights into stocks, sectors, fundamentals, and market trends.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img src="media/images/strategy.png" className="universe-icon" />
          <h5 className="mt-3">Strategy Builder</h5>
          <p className="text-muted small px-4">
            Create, test, and automate trading strategies — no coding required.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img src="media/images/smart.png" className="universe-icon" />
          <h5 className="mt-3">Smart Baskets</h5>
          <p className="text-muted small px-4">
            Invest in curated baskets of stocks and ETFs based on themes.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img src="media/images/advisory.png" className="universe-icon" />
          <h5 className="mt-3">Personal Advisory</h5>
          <p className="text-muted small px-4">
            Personalized financial guidance — simple, unbiased, and spam-free.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-5">
        <a
          href="#"
          className="btn px-4 py-2"
          style={{
            background: "#2962ff",
            color: "white",
            borderRadius: "6px",
          }}
        >
          Sign up for free
        </a>
      </div>

    </div>
  );
}

export default Universe;
