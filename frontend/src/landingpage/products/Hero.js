import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5 border-bottom">

      <div className="row justify-content-center text-center">

        <div className="col-lg-8">

          {/* Heading */}
          <h2 className="fw-bold mb-3" style={{ fontSize: "2.4rem" }}>
            Finova Products
          </h2>

          {/* Sub heading */}
          <p
            className="text-muted mb-3"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            Sleek, modern, and intuitive platforms built to help you trade and
            invest with confidence.
          </p>

          {/* CTA */}
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              color: "#2962ff",
              fontWeight: "500",
            }}
          >
            Explore our investment offerings →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Hero;
