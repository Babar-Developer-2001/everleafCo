import React from "react";
import "./Catagory.css";

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
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 col-12">
                <img
                  src="./src/assets/images/house-plant.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="house-plant"
                />
                <p className="fs-5 fw-semibold text-center mt-3">House Plants</p>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div>
                  <img
                  src="./src/assets/images/outdoor-plant.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="outdoor-plant"
                />
                <p className="fs-5 fw-semibold text-center mt-3">Outdoor Plants</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
               <div>
                 <img
                  src="./src/assets/images/succulents.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="succulents"
                />
                <p className="fs-5 fw-semibold text-center mt-3">Succulents</p>
               </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div>
                  <img
                  src="./src/assets/images/dessert-bloom.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="desert-bloom"
                />
                <p className="fs-5 fw-semibold text-center mt-3">Desert Bloom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid PlantSold py-5">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-md-6 col-12">
                <img
                  src="./src/assets/images/stats count.webp"
                  className="img-fluid w-100 object-fit-cover rounded-4 shadow-sm"
                  alt="Plants Sold"
                />
              </div>
              <div className="col-md-6 col-12 ps-md-4">
                <h1>
                  Your Premier Destination for All Green.
                </h1>
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
