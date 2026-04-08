import React from "react";
import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";
import { pageTransitionVariant } from "../animations/cardsAnimations";

function Contact() {
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
          <div className="container-fluid contact d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center text-white">
                  <h3>Contact Us</h3>
                  <p className="contactPara">Let’s Connect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid my-5">
            <div className="container ps-md-5">
              <div className="row pb-5">
                <div className="col-12">
                  <h1>Send us Message</h1>
                </div>
              </div>

              <div className="row gy-4">
                <div className="col-12">
                  <div className="d-flex align-items-center mb-4">
                    <span className="contactIcon d-inline-flex rounded-circle p-3 fs-4 me-2 ">
                      <FaPhone />
                    </span>
                    <div>
                      <h5>Phone</h5>
                      <p className="mb-0 text-muted">+923097313526</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <span className="contactIcon d-inline-flex rounded-circle p-3 fs-4 me-2 ">
                      <IoMdMail />
                    </span>
                    <div>
                      <h5>Email</h5>
                      <p className="mb-0 text-muted text-break">
                        babarbinyamin2001@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <span className="contactIcon d-inline-flex rounded-circle p-3 fs-4 me-2 ">
                      <FaLinkedin />
                    </span>
                    <div>
                      <h5>Linkedin</h5>
                      <p className="mb-0 text-muted text-break">
                        https://www.linkedin.com/m/in/babarbinyamin/
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <span className="contactIcon d-inline-flex rounded-circle p-3 fs-4 me-2 ">
                      <FaGithub />
                    </span>
                    <div>
                      <h5>GitHub</h5>
                      <p className="mb-0 text-muted v">
                        https://github.com/Babar-Developer-2001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid contactIcon py-5">
            <div className="container">
              <div className="row py-4">
                <div className="col-12 text-center">
                  <h4>Follow us @Everleaf Co.</h4>
                  <div className="socialLinks d-flex justify-content-center gap-4 mt-4">
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutube />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <FaXTwitter />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Contact;
