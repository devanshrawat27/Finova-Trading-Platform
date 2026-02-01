import React from "react";

function LeftSection({
  imageurl,
  proName,
  prodesc,
  trydemo,
  learn,
  gPlay,
  appStore,
}) {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Image */}
        <div className="col-lg-5 col-12 mb-4 mb-lg-0 text-center">
          <img src={imageurl} className="img-fluid" alt={proName} />
        </div>

        <div className="col-1"></div>

        {/* Content */}
        <div className="col-lg-6 col-12">

          <h3 className="fw-semibold mb-3">{proName}</h3>

          <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
            {prodesc}
          </p>

          {/* Links */}
          <div className="mb-4">

            <a
              href={trydemo}
              className="me-4"
              style={{ textDecoration: "none", color: "#2962ff" }}
            >
              Try demo →
            </a>

            <a
              href={learn}
              style={{ textDecoration: "none", color: "#2962ff" }}
            >
              Learn more →
            </a>

          </div>

          {/* Store badges */}
          <div className="d-flex gap-3 flex-wrap">

            <a href={gPlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "42px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
                style={{ height: "42px" }}
              />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LeftSection;
