import React, { useState } from "react";
import "./Shop.css";
import ZenBamboo from '../assets/images/ZenBamboo.webp'
import Succulent from '../assets/images/Succulent.webp'
import silverMist from '../assets/images/silverMist.webp'
import DesertBloom2 from '../assets/images/DesertBloom2.webp'
import GoldenGlow from '../assets/images/GoldenGlow.webp'
import Category from "./Category";
import { easeInOut, motion } from "framer-motion";
import {
  pageTransitionVariant,
  parentVariant,
  childVariants,
  hoverEffects,
  tapEffects,
  hoverImgEffects,
} from "../animations/cardsAnimations";

// STEP 1 — Store Products in Array (IMPORTANT) (not hardcoded JSX)
const products = [
  {
    id: 1,
    name: "Desert Bloom",
    category: "Indoor Plants",
    price: 70,
    img: DesertBloom2,
  },
  {
    id: 2,
    name: "Golden Glow",
    category: "Indoor Plants",
    price: 85,
    img: GoldenGlow,
  },
  {
    id: 3,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: 92,
    img: silverMist,
  },
  {
    id: 4,
    name: "Zen Bamboo Grove",
    category: "Indoor Plants",
    price: 90,
    img: ZenBamboo,
  },
  {
    id: 5,
    name: "Starlight Succulent",
    category: "Indoor Plants",
    price: 95,
    img: Succulent,
  },
  {
    id: 6,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: 92,
    img: silverMist,
  },
];

function Shop() {
  // STEP 2 — Use useState for Sorting
  const [sortOption, setSortOption] = useState("default");

  // Step 3: sort a COPY of the array (never mutate the original!)

  const copySortedProducts = [...products]; // spread creates a new array
  if (sortOption === "price-asc") {
    copySortedProducts.sort((a, b) => a.price - b.price);
  } //low to high price
  else if (sortOption === "price-desc") {
    copySortedProducts.sort((a, b) => b.price - a.price);
  } //high to low price
  else if (sortOption === "name-alphabatically") {
    copySortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } //alphabatically sorted

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
        <section>
          <div className="container-fluid shop">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center text-white">Shop</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid my-5">
            <div className="container">
              {/* Sort dropdown */}
              <div className="row mb-4">
                <div className="col-12">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="form-select w-auto"
                  >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-alphabatically">Name: A to Z</option>
                  </select>
                </div>
              </div>

              {/* Products rendered from sorted array */}
              <motion.div
                className="row g-4"
                variants={parentVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {copySortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="products col-lg-4 col-md-4 col-sm-12"
                    variants={childVariants}
                    whileHover={hoverEffects}
                    whileTap={tapEffects}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src={product.img}
                      className="img-fluid w-100 rounded-4"
                      alt={product.name}
                      whileHover={hoverImgEffects}
                    />
                    <p className="fs-5 fw-semibold mb-0 mt-3">{product.name}</p>
                    <span className="text-muted">{product.category}</span>
                    <p className="fs-5 fw-semibold">${product.price}.00</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
                   BANNER HERE
==================================================== */}
        <div className="container-fluid  banner-img">
          <div className="row ">
            <div className="col-12 text-center text-light">
              <h1>
                Flash Sale: Up to 50% Off <br /> On Select Items!{" "}
              </h1>
              <p className="my-4 fs-5">
                Don’t miss out on our flash sale event! For a limited time,
                enjoy up to 50% <br /> off on a selection of our best-selling
                products.
              </p>
              <button className="btn btn-outline-light rounded-pill border px-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <Category />
      </motion.div>
    </>
  );
}

export default Shop;
