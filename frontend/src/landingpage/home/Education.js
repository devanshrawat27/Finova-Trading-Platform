import React from "react";

function Education() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Finova Education"
            className="img-fluid"
            style={{ maxWidth: "520px", width: "100%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-12">

          <h2 className="fw-bold mb-3">Learn. Invest. Grow.</h2>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Finova Learn is your starting point for understanding markets. From
            basic investing concepts to advanced trading strategies, our
            learning resources help you build confidence at every step.
          </p>

          <a href="/" style={{ textDecoration: "none", color: "#2962ff" }}>
            Explore learning →
          </a>

          <div className="mt-4">

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              Join our growing community where traders and investors discuss
              ideas, strategies, and market trends in real time.
            </p>

            <a href="/" style={{ textDecoration: "none", color: "#2962ff" }}>
              Community discussions →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Education;
