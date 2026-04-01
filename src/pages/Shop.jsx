import React, { useState } from 'react'
import './Shop.css'

// STEP 1 — Store Products in Array (IMPORTANT) (not hardcoded JSX)
const products = [
  { id: 1, name: "Desert Bloom",       category: "Indoor Plants", price: 70, img: "./src/assets/images/DesertBloom2.webp" },
  { id: 2, name: "Golden Glow",        category: "Indoor Plants", price: 85, img: "./src/assets/images/GoldenGlow.webp" },
  { id: 3, name: "Silver Mist",        category: "Indoor Plants", price: 92, img: "./src/assets/images/SilverMist.webp" },
  { id: 4, name: "Zen Bamboo Grove",   category: "Indoor Plants", price: 90, img: "./src/assets/images/ZenBamboo.webp" },
  { id: 5, name: "Starlight Succulent",category: "Indoor Plants", price: 95, img: "./src/assets/images/Succulent.webp" },
  { id: 6, name: "Silver Mist",        category: "Indoor Plants", price: 92, img: "./src/assets/images/silverMist.webp" },
]

function Shop() {
  // STEP 2 — Use useState for Sorting
  const [sortOption, setSortOption] = useState("default")

  // Step 3: sort a COPY of the array (never mutate the original!)

    const copySortedProducts  = [...products]; // spread creates a new array  
if (sortOption==='price-asc') {
  copySortedProducts.sort((a,b)=>a.price-b.price)} //low to high price
else if (sortOption==='price-desc') {
  copySortedProducts.sort((a,b)=>b.price-a.price)} //high to low price
else if (sortOption==='name-alphabatically') {
  copySortedProducts.sort((a,b)=>a.name.localeCompare(b.name))} //alphabatically sorted



  
  return (
    <>
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
            <div className="row g-4">
              {copySortedProducts.map((product) => (
                <div key={product.id} className="products col-lg-4 col-md-4 col-sm-12">
                  <img src={product.img} className="img-fluid w-100 rounded-4 shadow-sm" alt={product.name} />
                  <p className="fs-5 fw-semibold mb-0 mt-3">{product.name}</p>
                  <span className="text-muted">{product.category}</span>
                  <p className="fs-5 fw-semibold">${product.price}.00</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Shop