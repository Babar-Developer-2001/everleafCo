import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row footerBanner-img">
            <div className="col-12 text-center text-light">
              <h1>Ready to Find your Perfect Plant?</h1>
              <p className="my-4 fs-5">
                Browse our online store or visit us in person to <br />{" "}
                experience the beauty of nature.
              </p>
              <button className="btnn">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="footer py-5">
          <div className="container">
            {/* Brand */}
            <div className="text-center mb-4">
              <Link className="navbar-brand fw-bold fs-4" to="/">
                🌿EVERLEAF CO.
              </Link>
            </div>

            {/* Nav Links - always visible */}
            <ul className="d-flex flex-wrap justify-content-center align-items-center gap-3 list-unstyled mb-4">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Links - always visible */}
            <ul className="d-flex justify-content-center gap-3 list-unstyled mb-4">
              <li>
                <a
                  className="nav-link fs-4"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="nav-link fs-4"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  className="nav-link fs-4"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  className="nav-link fs-4"
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>

            <hr />
          </div>

          <p className="text-center text-muted pt-3">
            Designed & Developed by{" "}
            <span className="footerName">Babar Binyamin</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
