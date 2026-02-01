import React, { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiUser,
  FiSettings,
  FiTrendingUp,
  FiDollarSign,
  FiPieChart,
} from "react-icons/fi";

function SupportSection() {
  const [open, setOpen] = useState(0);

  const data = [
    {
      title: "Account Opening",
      icon: <FiUser />,
      links: [
        "Resident individual",
        "Minor account",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF & LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Finova Account",
      icon: <FiSettings />,
      links: ["Your profile", "Account modification", "CMR & DP"],
    },
    {
      title: "Trading Platform",
      icon: <FiTrendingUp />,
      links: ["Orders", "Holdings", "Positions"],
    },
    {
      title: "Funds",
      icon: <FiDollarSign />,
      links: ["Add funds", "Withdraw funds", "Margins"],
    },
    {
      title: "Investments",
      icon: <FiPieChart />,
      links: ["Mutual funds", "SIP", "Portfolio"],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">

        {/* LEFT */}
        <div className="col-lg-8">

          {data.map((item, i) => (
            <div key={i} className="accordion-card">

              <div
                className="accordion-header"
                onClick={() => setOpen(open === i ? -1 : i)}
              >

                <div className="d-flex align-items-center gap-3">
                  <span className="icon-circle">{item.icon}</span>
                  <h6 className="mb-0">{item.title}</h6>
                </div>

                {open === i ? <FiMinus /> : <FiPlus />}

              </div>

              <div className={`accordion-body ${open === i ? "show" : ""}`}>
                {item.links.map((l, idx) => (
                  <a key={idx} href="#" className="inner-link">
                    {l}
                  </a>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="col-lg-4">

          <div className="alert-box">
            <ul>
              <li><a href="#">Adjustment of contracts</a></li>
              <li><a href="#">Orders rejected [Resolved]</a></li>
            </ul>
          </div>

          <div className="quick-card">

            <h6>Quick links</h6>

            {[
              "Track account opening",
              "Track segment activation",
              "Intraday margins",
              "User manual",
              "Create a ticket",
            ].map((q, i) => (
              <a key={i} href="#" className="quick-link">
                {i + 1}. {q}
              </a>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default SupportSection;
