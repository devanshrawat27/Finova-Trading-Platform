import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "60vh" }}
    >
      <div className="text-center">

        {/* 404 */}
        <h1 className="fw-bold mb-2" style={{ fontSize: "72px", color: "#2962ff" }}>
          404
        </h1>

        {/* Message */}
        <h4 className="fw-semibold mb-2">Page not found</h4>

        <p
          className="text-muted mb-3"
          style={{ maxWidth: "380px", margin: "0 auto" }}
        >
          Sorry, we couldn’t find the page you were looking for.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="btn px-3 py-1"
          style={{
            background: "linear-gradient(135deg,#2962ff,#00c6ff)",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Go back home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
