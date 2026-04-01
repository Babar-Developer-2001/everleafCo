import React from "react";
import "./PopularProducts.css";

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
            <div className="row g-4">
              <div className="products col-lg-4 col-md-4 col-sm-12">
                <img
                  src="./src/assets/images/DesertBloom2.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="DesertBloom2"
                />{" "}
                <p className="fs-5 fw-semibold mb-0 mt-3">Desert Bloom</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$70.00</p>
              </div>

              <div className="products col-lg-4 col-md-4 col-sm-12">
                <img
                  src="./src/assets/images/GoldenGlow.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="GoldenGlow"
                />{" "}
                <p className="fs-5 fw-semibold mb-0 mt-3">Golden Glow</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$85.00</p>
              </div>

              <div className="products col-lg-4 col-md-4 col-sm-12">
                <img
                  src="./src/assets/images/SilverMist.webp"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  alt="SilverMist"
                />{" "}
                <p className="fs-5 fw-semibold mb-0 mt-3">Silver Mist</p>
                <span className="text-muted">Indoor Plants</span>
                <p className="fs-5 fw-semibold">$92.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5 clientsReview">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 col-12">
                <h2 className="fs-1 fw-semibold">What Our Customers Say</h2>
                <p className="mb-5">
                  Discover the reasons why people loves us and become your go-to
                  partner.
                </p>
                <div className="col-12 border bg-white rounded-4 p-5">
                  <p className="fs-6">
                    I am absolutely thrilled with the service I received from
                    their company! They were attentive, responsive, and
                    genuinely cared about meeting my needs. I highly recommend
                    them.
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client1.jpg"
                      alt="client1"
                      className="rounded-circle me-3"
                    />

                    <p>Client 1 </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ps-lg-4">
                <div className="col-12 border bg-white rounded-4 p-5">
                  <p className="fs-6">
                    We are committed to delivering exceptional quality and
                    creating meaningful experiences for our customers. Your
                    satisfaction is our top priority.{" "}
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client2.jpg"
                      alt="client2"
                      className="rounded-circle me-3"
                    />

                    <p>Client 2 </p>
                  </div>
                </div>
                <div className="col-12 border bg-white rounded-4 p-5 mt-4">
                  <p className="fs-6">
                    Their team exceeded our expectations. Their creative
                    approach and attention to detail brought our vision to life.
                    Highly recommended!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img
                      src="./src/assets/images/client3.jpg"
                      alt="client3"
                      className="rounded-circle me-3"
                    />

                    <p>Client 3 </p>
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

export default PopularProducts;
