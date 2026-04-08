import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom"; // ← ADD useLocation
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // ← ADD THIS
  const isHome = location.pathname === "/"; // ← ADD THIS

  return (
    <>
      {/* // ← THIS LINE IS THE KEY FIX — dynamic class */}
      <nav
        className={`navbar navbar-expand-lg ${isHome ? "navbar-transparent" : "navbar-solid"}`}
      >
        <div className="container">
          <NavLink className="navbar-brand Logo fw-bold text-white" to="/">
            🌿EVERLEAF CO.
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link " : "nav-link"
                  }
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="socialLinks ms-4">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* // OFFCANVAS MOBILE HERE */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="navbarMenu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <NavLink
            className="navbar-brand offcanvas-logo text-white fs-4"
            to="/"
            id="offcanvasExampleLabel"
          >
            {" "}
            🌿EVERLEAF CO.
          </NavLink>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto align-items-start pb-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="socialLinks">
            <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
