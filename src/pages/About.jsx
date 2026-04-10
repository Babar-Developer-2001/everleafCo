import React from "react";
import "./About.css";
import ourMission from '../assets/images/our-mission.webp'
import statsCount from '../assets/images/stats count.webp'

import PopularProducts from "./PopularProducts";
import { FaBox } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
import {
  pageTransitionVariant,
  tapEffects,
  hoverImgEffects,
} from "../animations/cardsAnimations";

function About() {
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
          <div className="container-fluid about d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center text-white">
                  <h3>About</h3>
                  <p className="aboutPara">
                    We are Passionate <br /> About Our Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row align-items-center gy-4">
                <div className="col-md-6 col-12">
                  <motion.img
                    src={statsCount}
                    className="img-fluid aboutSectionBottom w-100 object-fit-cover rounded-4"
                    alt="stats count"
                    whileHover={hoverImgEffects}
                    whileTap={tapEffects}
                  />
                </div>
                <div className="col-md-6 col-12 ps-md-4 mt-sm-5">
                  <h1>
                    We strive to provide our customers with the highest quality
                  </h1>
                  <p className="text-muted my-4">
                    Everleaf Co. was founded in 1960 by a group of plant
                    enthusiasts who recognized the positive impact that plants
                    can have on our lives. Whether it’s purifying the air,
                    reducing stress, or simply adding a touch of beauty to your
                    environment, plants are more than just decoration—they’re a
                    lifestyle.
                  </p>
                  <hr />

                  <p className="text-muted my-4">
                    “We love what we do & create partnerships with our clients
                    to ensure their digital transformation is positioned for
                    long-term success.”
                  </p>
                  <div className="d-flex  align-items-center">
                    <img
                      src="./src/assets/images/client1.jpg"
                      className="rounded-circle me-3"
                      alt="Karen Lynn"
                    />
                    <div>
                      <h5>Karen Lynn</h5>
                      <p className="mb-0 text-muted">
                        CEO & Co-founder @ Company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid OurCoreValues py-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="fs-1">
                    Our Core Values that Drive <br />
                    Everything We Do
                  </h2>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Passionate About Work</h5>
                      <p className="mb-0 text-muted">
                        Passion for work is a enthusiasm and excitement for what
                        you do.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Innovation solutions</h5>
                      <p className="mb-0 text-muted">
                        Using either completely concepts finding new ways of
                        using existing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Qualitiful products</h5>
                      <p className="mb-0 text-muted">
                        Product quality refers to how well a product satisfies
                        our customer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Customer satisfaction</h5>
                      <p className="mb-0 text-muted">
                        Happy customers are delighted because of the customer
                        service
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Simplicity interface</h5>
                      <p className="mb-0 text-muted">
                        Simplicity is used loosely to refer to the need to
                        minimize a process
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="d-flex align-items-start">
                    <span className="rounded-circle  d-inline-flex align-items-center justify-content-center fs-3 p-3 bg-black text-white me-2">
                      <FaBox />
                    </span>
                    <div>
                      <h5 className="mb-1">Creative team members</h5>
                      <p className="mb-0 text-muted">
                        A creative team is to design and execute campaigns &
                        encourage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid my-5">
            <div className="container">
              <div className="row align-items-center g-4">
                <div className="col-md-6 col-12">
                  <h2>Our Mission</h2>
                  <p className="my-4 pb-4 text-muted fs-lg-5">
                    Our mission is to make the world a greener place, one plant
                    at a time. We strive to provide our customers with the
                    highest quality plants and plant care products, along with
                    the knowledge and support to help them thrive.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start ">
                        <span className="me-2 fs-5">
                          <FaCheckCircle />
                        </span>
                        <p className="text-muted fs-5">Quality and Variety</p>
                      </div>
                      <div className="d-flex align-items-start">
                        <span className="me-2 fs-5">
                          <FaCheckCircle />
                        </span>
                        <p className="text-muted fs-5">Sustainable Practices</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="me-2 fs-5">
                          <FaCheckCircle />
                        </span>
                        <p className="text-muted fs-5">Expert Guidance</p>
                      </div>
                      <div className="d-flex align-items-start">
                        <span className="me-2 fs-5">
                          <FaCheckCircle />
                        </span>
                        <p className="text-muted fs-5">Experienced Team</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <motion.img
                    src={ourMission}
                    className="img-fluid w-100 object-fit-cover rounded-4"
                    alt="our-mission"
                    whileHover={hoverImgEffects}
                    whileTap={tapEffects}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PopularProducts />
      </motion.div>
    </>
  );
}

export default About;
