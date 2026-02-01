import React from "react";

function RightSection({ imageurl, proName, prodesc, learn }) {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Content */}
        <div className="col-lg-5 col-12 mb-4 mb-lg-0">

          <h3 className="fw-semibold mb-3">{proName}</h3>

          <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
            {prodesc}
          </p>

          <a
            href={learn}
            style={{ textDecoration: "none", color: "#2962ff" }}
          >
            Learn more →
          </a>

        </div>

        {/* Spacer (optional) */}
        <div className="col-lg-1 d-none d-lg-block"></div>

        {/* Image */}
        <div className="col-lg-6 col-12 text-center">
          <img src={imageurl} className="img-fluid" alt={proName} />
        </div>

      </div>

    </div>
  );
}

export default RightSection;
