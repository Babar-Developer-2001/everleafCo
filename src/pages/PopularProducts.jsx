import React from "react";
import "./PopularProducts.css";
import { motion } from "framer-motion";
import {
  parentVariant,
  childVariants,
  hoverEffects,
  tapEffects,
  hoverImgEffects,
} from "../animations/cardsAnimations";

function PopularProducts() {
  return (
    <>
      <section>
        <div className="row mt-5">
          <div className="col-12 text-center my-5">
            <h2>Popular Products</h2>
          </div>
        </div>

        <div className="container-fluid mb-5 ">
          <div className="container">
            <motion.div
              className="row g-4"
              variants={parentVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                className="products col-lg-4 col-md-4 col-sm-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="./src/assets/images/DesertBloom2.webp"
                  className="img-fluid w-100 rounded-4"
                  alt="DesertBloom2"
                  whileHover={hoverImgEffects}
                />{" "}
                <p className="fs-5 fw-semibold mb-0 mt-3">Desert Bloom</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$70.00</p>
              </motion.div>

              <motion.div
                className="products col-lg-4 col-md-4 col-sm-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="./src/assets/images/GoldenGlow.webp"
                  className="img-fluid w-100 rounded-4"
                  alt="GoldenGlow"
                  whileHover={hoverImgEffects}
                />{" "}
                <p className="fs-5 fw-semibold mb-0 mt-3">Golden Glow</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$85.00</p>
              </motion.div>

              <motion.div
                className="products col-lg-4 col-md-4 col-sm-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="./src/assets/images/SilverMist.webp"
                  className="img-fluid w-100 rounded-4"
                  alt="SilverMist"
                  whileHover={hoverImgEffects}
                />
                <p className="fs-5 fw-semibold mb-0 mt-3">Silver Mist</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$92.00</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5 clientsReview">
          <div className="container">
            <motion.div
              className="row gy-4"
              variants={parentVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="col-lg-6 col-12">
                <motion.h2
                  className="fs-1 fw-semibold"
                  variants={childVariants}
                >
                  What Our Customers Say
                </motion.h2>
                <motion.p className="mb-5" variants={childVariants}>
                  Discover the reasons why people loves us and become your go-to
                  partner.
                </motion.p>
                <motion.div
                  className="col-12 border bg-white rounded-4 p-5"
                  whileHover={hoverImgEffects}
                  variants={childVariants}
                >
                  <p className="fs-6">
                    I am absolutely thrilled with the service I received from
                    their company! They were attentive, responsive, and
                    genuinely cared about meeting my needs. I highly recommend
                    them.
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client1.jpg"
                      alt="Jeffrey Epstein"
                      className="rounded-circle me-3"
                    />

                    <p>Jeffrey Epstein</p>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6 col-12 ps-lg-4">
                <motion.div
                  className="col-12 border bg-white rounded-4 p-5"
                  whileHover={hoverImgEffects}
                  variants={childVariants}
                >
                  <p className="fs-6">
                    We are committed to delivering exceptional quality and
                    creating meaningful experiences for our customers. Your
                    satisfaction is our top priority.{" "}
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client2.jpg"
                      alt="Donald Trump"
                      className="rounded-circle me-3"
                    />

                    <p>Donald Trump</p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-12 border bg-white rounded-4 p-5 mt-4"
                  whileHover={hoverImgEffects}
                  variants={childVariants}
                >
                  <p className="fs-6">
                    Their team exceeded our expectations. Their creative
                    approach and attention to detail brought our vision to life.
                    Highly recommended!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client3.jpg"
                      alt="Diana Ross"
                      className="rounded-circle me-3"
                    />

                    <p>Diana Ross</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularProducts;
