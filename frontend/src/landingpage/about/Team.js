import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Team() {
  return (
    <div className="container py-5 border-top">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold">Meet the team behind Finova</h2>
        <p className="text-muted">People building the future of investing</p>
      </div>

      {/* Founder Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="row align-items-center p-4 founder-card">

            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img
                src="media/images/devv.png"
                alt="Devansh"
                className="founder-img"
              />

              <h5 className="mt-3 mb-1">Devansh Rawat</h5>
              <p className="text-muted small">Founder & CEO</p>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <span className="social"><FaLinkedinIn /></span>
                <span className="social"><FaXTwitter /></span>
                <span className="social"><FaInstagram /></span>
              </div>
            </div>

            <div className="col-lg-8">
              <p>
                Devansh founded Finova with a mission to simplify investing and bring
                institutional-grade technology to everyday users.
              </p>

              <p>
                With a strong engineering background, he focuses on building fast,
                reliable, and elegant financial platforms.
              </p>

              <p>
                Outside work, he enjoys exploring emerging technologies and
                designing scalable digital products.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="row justify-content-center text-center g-5 mt-5">

        <div className="col-lg-3 col-md-4 col-6">
          <img src="media/images/varun.png" className="team-img" />
          <h6 className="mt-3 mb-1">Varun Rana</h6>
          <p className="text-muted small">Co-founder</p>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <img src="media/images/dheeraj.png" className="team-img" />
          <h6 className="mt-3 mb-1">Dheeraj Singh</h6>
          <p className="text-muted small">CTO</p>
        </div>

      </div>

    </div>
  );
}

export default Team;
