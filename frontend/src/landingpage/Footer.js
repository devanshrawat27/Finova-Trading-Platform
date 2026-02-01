import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-top pt-5 mt-5 bg-white">
      <div className="container">

        {/* TOP */}
        <div className="row">

          {/* Brand */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="media/images/logo.png" alt="Finova" style={{ height: "40px"}} />

            <p className="text-muted small mt-3">
              © {new Date().getFullYear()} Finova Technologies Pvt Ltd.
              <br />All rights reserved.
            </p>

            {/* Social */}
            <div className="d-flex gap-3 mt-3 text-muted">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Account</h6>
            <a href="#" className="footer-link">Open account</a>
            <a href="/login" className="footer-link">Login</a>
            <a href="#" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">Referral program</a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Support</h6>
            <a href="#" className="footer-link">Contact us</a>
            <a href="#" className="footer-link">Help center</a>
            <a href="#" className="footer-link">Downloads</a>
            <a href="#" className="footer-link">Community</a>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Company</h6>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Press</a>
            <a href="#" className="footer-link">Privacy policy</a>
          </div>

        </div>

        <hr />

        {/* LEGAL */}
        <div className="text-muted small">

          <p>
            Investments in securities market are subject to market risks. Please read all related
            documents carefully before investing.
          </p>

          <div className="d-flex flex-wrap gap-4 mt-3 mb-3">
            <a href="#" className="footer-mini">NSE</a>
            <a href="#" className="footer-mini">BSE</a>
            <a href="#" className="footer-mini">MCX</a>
            <a href="#" className="footer-mini">Terms</a>
            <a href="#" className="footer-mini">Policies</a>
            <a href="#" className="footer-mini">Disclosure</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
