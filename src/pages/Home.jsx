import React from "react";
import Products from "./Products";
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { pageTransitionVariant } from "../animations/cardsAnimations";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";

function Home() {
  // 🔥 SCROLL ANIMATIONS HERE
  // 🔑 Key fix: track scroll inside the page, not the window
  const { scrollYProgress } = useScroll();

  // 🔥 STEP 1 — Image zooms in from scale 1 → 1.8 as user scrolls 0–30%
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.8]);

  // 🔥 STEP 2 — Image blurs from 0px → 8px simultaneously with zoom
  const blur = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(8px)"],
  );

  // 🔥 STEP 3 — Text fades out as user scrolls 0–20%
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  // 🔥 STEP 4 — Text moves upward slightly while fading (parallax feel)
  const textParallex = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  // 🔥 STEP 5 — Whole hero wrapper slides up after zoom completes (0.3 → 1)
  const wrapperParallex = useTransform(scrollYProgress, [0.3, 1], [0, -120]);

  return (
    <>
      <motion.div
        className="pageTransition"
        variants={pageTransitionVariant}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <section className="mainHeroSection">
          {/* heroWrapper: handles zoom + blur + parallax slide */}
          <motion.div
            className="heroWrapper pt-5"
            style={{
              scale,
              filter: blur,
              y: wrapperParallex,
            }}
          >
            {/* heroSection: handles text fade + text upward movement */}
            <motion.div
              className="heroSection text-center text-light"
              style={{
                opacity: textOpacity,
                y: textParallex,
              }}
            >
              <p>WELCOME TO EVERLEAF CO.</p>
              <h1>
                Discover the Beauty of <br />
                Nature at Your <br />
                Fingertips
              </h1>
              <button>Shop Now</button>
            </motion.div>
          </motion.div>
        </section>

        {/* ✅ Rest of your page content below */}
        <div className="container-fluid mt-4">
          <div className="container">
            <div className="row py-4 gy-4">
              <div className="box col-md-3 col-12 text-center">
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center fs-1 p-3 mb-2">
                  <MdOutlinePayment />
                </span>
                <h3>Secure Payment</h3>
                <p className="text-muted fs-5">Elementum feugiat diam</p>
              </div>
              <div className="box col-md-3 col-12 text-center">
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center fs-1 p-3 mb-2">
                  <FaRegHeart />
                </span>
                <h3>Excellent Service</h3>
                <p className="text-muted fs-5">Blandit gravida viverra</p>
              </div>
              <div className="box col-md-3 col-12 text-center">
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center fs-1 p-3 mb-2">
                  <MdLocalShipping />
                </span>
                <h3>Free Shipping</h3>
                <p className="text-muted fs-5">For $50 order</p>
              </div>
              <div className="box col-md-3 col-12 text-center">
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center fs-1 p-3 mb-2">
                  <FaBox />
                </span>
                <h3>Delivered with Care</h3>
                <p className="text-muted fs-5">Lacinia pellentesque leo</p>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <Products />
        <Category />
        <PopularProducts />
      </motion.div>
    </>
  );
}

export default Home;
