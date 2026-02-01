import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      {/* Top Statement */}
      <div className="row mb-5">
        <div className="col text-center">

          <h3 className="fw-semibold mb-3">
            Building a smarter way to invest.
            <br />
            <span style={{ color: "#2962ff" }}>
              Powered by technology. Driven by trust.
            </span>
          </h3>

          <p className="text-muted" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Creating simple, transparent, and accessible financial tools for
            everyone.
          </p>

        </div>
      </div>

      {/* Content */}
        <div className="row pt-5 border-top justify-content-center">


        {/* Left */}
        <div className="col-lg-5 col-12 mb-4">

          <p className="text-muted" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Finova was founded with a simple mission — to make investing accessible,
            transparent, and affordable for everyone. We believe technology should
            remove barriers, not create them.
          </p>

          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Today, Finova is a modern trading platform designed for both beginners
            and experienced investors. Our in-house technology focuses on speed,
            reliability, and ease of use.
          </p>

          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Every feature is guided by one principle: putting users first and
            building long-term value.
          </p>

        </div>

        {/* Right */}
       <div className="col-lg-5 col-12">

          <p className="text-muted" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Alongside our platform, we invest in financial education and community
            learning — helping users understand markets and build sustainable
            investing habits.
          </p>

          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Finova supports innovation by collaborating with fintech builders and
            startups, strengthening the financial ecosystem together.
          </p>

          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            We evolve every day — improving our platform, launching tools, and
            refining experience to help users grow with confidence.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;
