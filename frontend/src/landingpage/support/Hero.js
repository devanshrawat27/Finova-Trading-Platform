import React from "react";
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <div className="support-hero">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h1 className="hero-title">Support Portal</h1>

          <button className="ticket-btn">My tickets</button>

        </div>

        <div className="search-box">

          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />

        </div>

      </div>

      {/* STYLES */}
      <style>{`

        .support-hero{
          background:#fafafa;
          padding:60px 0;
          border-bottom:1px solid #eee;
        }

        .hero-title{
          font-size:38px;
          font-weight:600;
          letter-spacing:-0.5px;
        }

        .ticket-btn{
          background:#2962ff;
          color:white;
          border:none;
          padding:10px 22px;
          border-radius:6px;
          font-size:15px;
        }

        .ticket-btn:hover{
          opacity:0.9;
        }

        .search-box{
          position:relative;
          background:white;
          border:1px solid #ddd;
          border-radius:6px;
          padding:14px 16px;
          display:flex;
          align-items:center;
          gap:10px;
        }

        .search-icon{
          color:#999;
          font-size:18px;
        }

        .search-box input{
          border:none;
          outline:none;
          width:100%;
          font-size:16px;
        }

        .search-box input::placeholder{
          color:#aaa;
        }

      `}</style>

    </div>
  );
}

export default Hero;
