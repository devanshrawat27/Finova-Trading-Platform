import React from "react";

function Stats() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">

          <h2 className="fw-bold mb-4">Built on trust. Powered by technology.</h2>

          <h5 className="fw-semibold">User-first experience</h5>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Finova is designed with simplicity and transparency at its core.
            Every feature is built to help you trade and invest with confidence.
          </p>

          <h5 className="fw-semibold mt-3">Reliable & secure platform</h5>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            We focus on performance, data security, and uptime so you can stay
            connected to markets without interruptions.
          </p>

          <h5 className="fw-semibold mt-3">Built for growth</h5>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Whether you’re a beginner or an active trader, Finova provides the
            tools you need to grow your portfolio over time.
          </p>

        </div>

        {/* Right Image + Links */}
        <div className="col-lg-6 col-12 text-center">

          <img
            src="media/images/ecosystem.png"
            alt="Finova ecosystem"
            className="img-fluid"
            style={{ maxWidth: "480px", width: "100%" }}
          />

          {/* Links inside same column */}
          <div className="mt-4">

            <a href="#" style={{ textDecoration: "none", color: "#2962ff" }}>
              Explore our products →
            </a>

            <span className="mx-4"></span>

            <a href="#" style={{ textDecoration: "none", color: "#2962ff" }}>
              Try Finova →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Stats;
