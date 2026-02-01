import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  // State for toggle menu (open / close)
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(Boolean(localStorage.getItem('token')));

  const [userInitial, setUserInitial] = useState('U');

  useEffect(() => {
    const parseInitialFromToken = () => {
      const token = localStorage.getItem('token');
      if (!token) return setUserInitial('U');
      try {
        const payloadPart = token.split('.')[1];
        if (!payloadPart) return setUserInitial('U');
        const decoded = JSON.parse(atob(payloadPart.replace(/-/g, '+').replace(/_/g, '/')));
        const name = decoded.name || decoded.email || '';
        const initial = name ? String(name).trim().charAt(0).toUpperCase() : 'U';
        setUserInitial(initial);
      } catch (e) {
        setUserInitial('U');
      }
    };

    const onAuthChange = () => {
      setAuth(Boolean(localStorage.getItem('token')));
      parseInitialFromToken();
    };

    parseInitialFromToken();
    window.addEventListener('auth-change', onAuthChange);
    window.addEventListener('storage', onAuthChange);
    return () => {
      window.removeEventListener('auth-change', onAuthChange);
      window.removeEventListener('storage', onAuthChange);
    };
  }, []);

  const handleLogout = useCallback(() => {
    try { localStorage.removeItem('token'); } catch (e) {}
    setAuth(false);
    window.dispatchEvent(new Event('auth-change'));
    window.location.href = '/';
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky-top py-2">
      <div className="container d-flex align-items-center">

        {/* ================= Logo (Left side) ================= */}
        <Link to="/" className="me-auto d-flex align-items-center">
          <img
            src="media/images/logo.png"
            alt="Finova"
            style={{ height: "38px" }}
          />
        </Link>

        {/* ================= Main Navbar Links (Desktop only) ================= */}
        <div className="d-none d-lg-flex align-items-center gap-4 me-4">

          {/* Navigation links */}
          <Link className="text-decoration-none text-dark" to="/">Home</Link>
          <button className="text-decoration-none text-dark btn btn-link p-0" onClick={async () => {
            const ports = [3000,3001,3002,3003,3004];
            for (const p of ports) {
              const base = `http://localhost:${p}`;
              const url = `${base}/holdings`;
              try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 600);
                await fetch(url, { method: 'GET', signal: controller.signal, mode: 'no-cors' });
                clearTimeout(timeout);
                try { localStorage.setItem('dashboard_url', base); } catch (e) {}
                window.location.href = url;
                return;
              } catch (e) {
                // try next
              }
            }
            // fallback
            try { localStorage.setItem('dashboard_url', 'http://localhost:3000'); } catch (e) {}
            window.location.href = 'http://localhost:3000/holdings';
          }}>Dashboard</button>
          <Link className="text-decoration-none text-dark" to="/about">About</Link>
          <Link className="text-decoration-none text-dark" to="/product">Products</Link>
          <Link className="text-decoration-none text-dark" to="/pricing">Pricing</Link>
          <Link className="text-decoration-none text-dark" to="/support">Support</Link>

          {/* Auth actions: show Login/Signup when not authenticated, otherwise show single Logout */}
          {!auth ? (
            <>
              <Link className="text-decoration-none text-dark" to="/login">Login</Link>
              <Link
                to="/signup"
                className="btn px-3 py-1"
                style={{
                  background: "linear-gradient(135deg,#2962ff,#00c6ff)",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              <div className="user-bubble">{userInitial}</div>
            </>
          )}

        </div>

        {/* ================= Toggle Button (Always visible) ================= */}
        <div style={{ position: "relative" }}>

          {/* Hamburger icon */}
          <button
            onClick={() => setOpen(!open)} // toggle menu open/close
            className="btn border"
          >
            ☰
          </button>

          {/* ================= Toggle Dropdown Menu ================= */}
          {open && (
            <div
              className="shadow bg-white rounded p-3"
              style={{
                position: "absolute",
                right: 0,
                top: "45px",
                width: "180px",
                zIndex: 1000,
              }}
            >
              {/* Extra menu options */}
              <button className="d-block mb-2 text-decoration-none text-dark btn btn-link p-0" onClick={async () => {
                const ports = [3000,3001,3002,3003,3004];
                for (const p of ports) {
                  const base = `http://localhost:${p}`;
                  const url = `${base}/holdings`;
                  try {
                    const controller = new AbortController();
                    const timeout = setTimeout(() => controller.abort(), 600);
                    await fetch(url, { method: 'GET', signal: controller.signal, mode: 'no-cors' });
                    clearTimeout(timeout);
                    try { localStorage.setItem('dashboard_url', base); } catch (e) {}
                    window.location.href = url;
                    return;
                  } catch (e) {
                    // try next
                  }
                }
                try { localStorage.setItem('dashboard_url', 'http://localhost:3000'); } catch (e) {}
                window.location.href = 'http://localhost:3000/holdings';
              }}>Dashboard</button>

              <Link className="d-block mb-2 text-decoration-none text-dark" to="/">
                Profile
              </Link>

              <Link className="d-block mb-2 text-decoration-none text-dark" to="/">
                Settings
              </Link>

              <hr />

              {!auth ? (
                <>
                  <Link className="d-block mb-2 text-decoration-none text-dark" to="/login">Login</Link>
                  <Link className="d-block mb-2 text-decoration-none text-dark" to="/signup">Sign up</Link>
                </>
              ) : null}
            </div>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
