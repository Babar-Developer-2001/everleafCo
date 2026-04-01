import React from "react";
import'./Products.css'

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
          <div className="row g-4">
           <div className="products col-lg-4 col-md-4 col-12">
              <img src="./src/assets/images/ZenBamboo.webp" className="img-fluid w-100 rounded-4 shadow-sm" alt="ZenBamboo" />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Zen Bamboo Grove</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$90.00</p>
            </div>

            <div className="products col-lg-4 col-md-4 col-12">
              <img src="./src/assets/images/Succulent.webp" className="img-fluid w-100 rounded-4 shadow-sm" alt="Succulent" />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Starlight Succulent</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$95.00</p>
            </div>

            <div className="products col-lg-4 col-md-4 col-12">
              <img src="./src/assets/images/silverMist.webp" className="img-fluid w-100 rounded-4 shadow-sm" alt="silverMist" />{" "}
              <p className="fs-5 fw-semibold mb-0 mt-3">Silver Mist</p>
              <span className="text-muted">Indoor Plants</span>
              <p className="fs-5 fw-semibold">$92.00</p>
            </div>
          </div>
        </div>
      </div>



<div className="container-fluid">
    <div className="row middle-img ">
        <div className="col-12 text-center text-light">
            <h1>Flash Sale: Up to 50% Off <br /> On Select Items! </h1> 
            <p className="my-4 fs-5">Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% <br /> off on a selection of our best-selling products.</p>
            <button className="btn btn-outline-light rounded-pill border px-4">Shop Now</button>
        </div>
    </div>
</div>

    </>
  );
}

export default Products;
