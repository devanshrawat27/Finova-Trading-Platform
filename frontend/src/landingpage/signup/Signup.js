import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:3002/auth/signup", {
        name,
        email,
        password,
      });

      const { token } = res.data;

      try {
        localStorage.setItem("token", token);
        window.dispatchEvent(new Event("auth-change"));
      } catch {}

      const known = localStorage.getItem("dashboard_url");

      if (known) {
        window.location.href = `${known}/holdings`;
        setFinished(true);
      } else {
        const ports = [3000, 3001, 3002, 3003, 3004];

        for (const p of ports) {
          const base = `http://localhost:${p}`;
          const url = `${base}/holdings`;

          try {
            await fetch(url, { mode: "no-cors" });
            localStorage.setItem("dashboard_url", base);
            window.location.href = url;
            return;
          } catch {}
        }

        window.location.href = "http://localhost:3000/holdings";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-auth container" style={{ paddingTop: 80 }}>

      <div style={glowWrap} className={error ? "shake" : ""}>

        <h2 className="text-center mb-3">Create Account</h2>

        <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "auto" }}>

          <div className="mb-3 glow-input">
            <label>Name</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 glow-input">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 glow-input">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="btn btn-primary w-100 pulse"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          {error && (
            <div className="text-danger text-center mt-3">{error}</div>
          )}

          {finished && (
            <div className="text-success text-center mt-3">
              Signup succeeded — redirecting...
            </div>
          )}

        </form>
      </div>

      {/* Effects */}
      <style>{`
        .glow-input input:focus {
          box-shadow: 0 0 12px rgba(41,121,255,.6);
          border-color:#2979ff;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow:0 0 0 0 rgba(41,121,255,.6); }
          70% { box-shadow:0 0 0 12px rgba(41,121,255,0); }
          100% { box-shadow:0 0 0 0 rgba(41,121,255,0); }
        }

        .shake {
          animation: shake .4s;
        }

        @keyframes shake {
          0% { transform:translateX(0); }
          25% { transform:translateX(-6px); }
          50% { transform:translateX(6px); }
          75% { transform:translateX(-6px); }
          100% { transform:translateX(0); }
        }
      `}</style>

    </div>
  );
}

const glowWrap = {
  padding: 30,
  borderRadius: 14,
  background: "#fff",
  boxShadow: "0 0 40px rgba(41,121,255,.15)",
};

export default Signup;
