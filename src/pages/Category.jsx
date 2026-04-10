import React from "react";
import "./Catagory.css";
import housePlant from '../assets/images/house-plant.webp'
import outdoorPlant from '../assets/images/outdoor-plant.webp'
import succulents from '../assets/images/succulents.webp'
import dessertBloom from '../assets/images/dessert-bloom.webp'
import statsCount from '../assets/images/stats count.webp'


import { motion } from "framer-motion";
import {
  parentVariant,
  childVariants,
  hoverEffects,
  tapEffects,
  hoverImgEffects,
} from "../animations/cardsAnimations";

function Category() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 text-center my-5">
              <h2>Our Categories</h2>
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
                className="col-lg-3 col-md-6 col-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={housePlant}
                  className="img-fluid w-100 rounded-4"
                  alt="house-plant"
                  whileHover={hoverImgEffects}
                />
                <p className="fs-5 fw-semibold text-center mt-3">
                  House Plants
                </p>
              </motion.div>
              <motion.div
                className="col-lg-3 col-md-6 col-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <motion.img
                    src={outdoorPlant}
                    className="img-fluid w-100 rounded-4"
                    alt="outdoor-plant"
                    whileHover={hoverImgEffects}
                  />
                  <p className="fs-5 fw-semibold text-center mt-3">
                    Outdoor Plants
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-3 col-md-6 col-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <motion.img
                    src={succulents}
                    className="img-fluid w-100 rounded-4"
                    alt="succulents"
                    whileHover={hoverImgEffects}
                  />
                  <p className="fs-5 fw-semibold text-center mt-3">
                    Succulents
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-3 col-md-6 col-12"
                variants={childVariants}
                whileHover={hoverEffects}
                whileTap={tapEffects}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <motion.img
                    src={dessertBloom}
                    className="img-fluid w-100 rounded-4"
                    alt="desert-bloom"
                    whileHover={hoverImgEffects}
                  />
                  <p className="fs-5 fw-semibold text-center mt-3">
                    Desert Bloom
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid PlantSold py-5">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-md-6 col-12">
                <motion.img
                  src={statsCount}
                  className="img-fluid w-100 object-fit-cover rounded-4 "
                  alt="Plants Sold"
                  whileHover={hoverImgEffects}
                  whileTap={tapEffects}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="col-md-6 col-12 ps-md-4">
                <h1>Your Premier Destination for All Green.</h1>
                <p className="my-4 text-muted">
                  At Urban Jungle Co., we believe in the transformative power of
                  plants. Whether you’re a seasoned gardener or just starting
                  your green journey, our curated selection of plants will
                  inspire and enrich your living space.
                </p>
                <hr />

                <div className="row mt-4">
                  <div className="col-6">
                    <p className="fs-4 fw-semibold mb-0">98%</p>
                    <p className="text-muted">Customer Satisfaction</p>
                  </div>
                  <div className="col-6">
                    <p className="fs-4 fw-semibold mb-0">100k</p>
                    <p className="text-muted">Plants Sold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
