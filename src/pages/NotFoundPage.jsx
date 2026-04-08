import React from "react";
import './NotFoundPage.css'
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { pageTransitionVariant } from "../animations/cardsAnimations";

function NotFoundPage() {
  return (
    <>
      <motion.div
        className="container text-center py-5"
        variants={pageTransitionVariant}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <div className="col-12">
          <h1 className="display-1 fw-bold">404</h1>
          <h3 className="mb-3">Oops! Page Not Found 😅</h3>
          <img
            src="./src/assets/images/epstein.webp"
            className="img-fluid d-block mx-auto my-4"
            style={{
              maxWidth: "500px",
              width: "100%",
              maxHeight: "300px",
    objectFit: "contain"
            }}
            alt="404"
          />
          <Link to="/" className="btnn">
            Go Back Home
          </Link>{" "}
                      {/* <button className="btnn rounded-pill border px-4 py-2">Shop Now</button> */}

        </div>
      </motion.div>
    </>
  );
}

export default NotFoundPage;
