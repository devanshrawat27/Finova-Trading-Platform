import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">

        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxWidth: "720px", width: "100%" }}
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="fw-bold display-5">
            Invest in <span style={{ color: "#2962ff" }}>everything</span>
          </h1>
        </div>

        {/* Sub text */}
        <div className="col-12">
          <p
            className="text-muted mt-3 fs-5 px-2"
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>
        </div>

        {/* Button */}
        <div className="col-12 d-flex justify-content-center">
          <button
            className="btn mt-4 px-4 py-2 fs-6 shadow"
            style={{
              background: "linear-gradient(135deg,#2962ff,#00c6ff)",
              color: "white",
              borderRadius: "15px",
              border: "none",
              letterSpacing: "0.5px",
              minWidth: "180px",
            }}
          >
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
