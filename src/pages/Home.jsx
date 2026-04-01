import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Products from "./Products";
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaBox } from "react-icons/fa";

import "./Home.css";
function Home() {
  const { scrollYProgress } = useScroll();

  const yHero = useTransform(scrollYProgress, [0, 1], [0, -200]); // hero moves up
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // text fades
  return (
    <>
      <motion.div className="heroWrapper pt-5" style={{ y: yHero }}>
      <motion.div className="heroSection text-center text-light" style={{ opacity: opacityText }}>
        <p>WELCOME TO EVERLEAF CO.</p>
        <h1>
          Discover the Beauty of <br />
          Nature at Your <br />
          Fingertips
        </h1>
        <button>Shop Now</button>
      </motion.div>
    </motion.div>

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
    </>
  );
}

export default Home;
