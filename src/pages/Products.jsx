import React from "react";
import "./Products.css";
import { motion } from "framer-motion";
import {
  parentVariant,
  childVariants,
  hoverEffects,
  tapEffects,
  hoverImgEffects,
} from "../animations/cardsAnimations";

function Products() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center my-5">
            <h2>Trending Products</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="container">
          <motion.div
            className="row g-4"
            variants={parentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="productsCards col-lg-4 col-md-4 col-12"
              variants={childVariants}
              whileHover={hoverEffects}
              whileTap={tapEffects}
              transition={{ type: "spring", stiffness: 320 }}
            >
              <motion.img
                src="./src/assets/images/ZenBamboo.webp"
                className="img-fluid w-100 rounded-4"
                alt="ZenBamboo"
                whileHover={hoverImgEffects}
              />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Zen Bamboo Grove</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$90.00</p>
            </motion.div>

            <motion.div
              className="productsCards col-lg-4 col-md-4 col-12"
              variants={childVariants}
              whileHover={hoverEffects}
              whileTap={tapEffects}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="./src/assets/images/Succulent.webp"
                className="img-fluid w-100 rounded-4"
                alt="Succulent"
                whileHover={hoverImgEffects}
              />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Starlight Succulent</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$95.00</p>
            </motion.div>

            <motion.div
              className="productsCards col-lg-4 col-md-4 col-12"
              variants={childVariants}
              whileHover={hoverEffects}
              whileTap={tapEffects}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="./src/assets/images/silverMist.webp"
                className="img-fluid w-100 rounded-4"
                alt="silverMist"
                whileHover={hoverImgEffects}
              />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Silver Mist</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$92.00</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container-fluid  middle-img">
        <div className="row ">
          <div className="col-12 text-center text-light">
            <h1>
              Flash Sale: Up to 50% Off <br /> On Select Items!{" "}
            </h1>
            <p className="my-4 fs-5">
              Don’t miss out on our flash sale event! For a limited time, enjoy
              up to 50% <br /> off on a selection of our best-selling products.
            </p>
            <button className="btn btn-outline-light rounded-pill border px-4">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
