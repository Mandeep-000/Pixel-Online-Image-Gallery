import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import axios from "axios";

export default function Contact() {
  let [name1, setName] = useState();
  let [email1, setEmail] = useState();
  let [subject1, setSubject] = useState();
  let [message1, setMessage] = useState();

  function handleform(e) {
    e.preventDefault();
    const data = {
      name: name1,
      email: email1,
      subject: subject1,
      message: message1,
    };
    axios({
      method: "POST",
      url: "http://127.0.0.1/api/insert.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      alert("Data Inserted Successfully");
    });
  }

  return (
    <div>
      <>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-film mx-3" />
              <b>
                <em>Pixel</em>
              </b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link-1"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-2" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-3" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-4 active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <br />
        <br />
        <div className="BodyContent">
          <div className="container-fluid tm-mt-60">
            <div className="row mb-4">
              <h2
                className="col-6 tm-text-primary"
                style={{ textAlign: "left" }}
              >
                Contact Us
              </h2>
            </div>
            <div className="row tm-mb-50 justify-content-around">
              <div className="col-lg-5 col-12 mb-5">
                <figure>
                  <img
                    src="img/contact.png"
                    alt="Image"
                    className="img-fluid"
                    style={{ minHeight: "600px" }}
                  />
                </figure>
              </div>
              <div className="col-lg-4 col-12 mb-5">
                <h3 className="tm-text-primary mb-5">Reach Us</h3>
                <form
                  id="contact-form"
                  action=""
                  method="POST"
                  className="tm-contact-form"
                  onSubmit={handleform}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-0"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-0"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control rounded-0"
                      placeholder="Subject"
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      rows={8}
                      name="message"
                      className="form-control rounded-0"
                      placeholder="Message"
                      required
                      defaultValue={""}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="form-group tm-text-right">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-12 mb-5">
                <div className="tm-address-col text-about">
                  <h3 className="tm-text-primary mb-5">Our Address</h3>
                  <p className="tm-mb-50">
                    We provide you the best quality photos with our experience
                    and your support. We are here to help you for your queries
                    and appreciate for your precious feedback.{" "}
                  </p>
                  <p className="tm-mb-50">
                    We'd Love To Hear From You. Here's how you can reach us.
                  </p>
                  <address className="tm-text-gray tm-mb-30">
                    <b>Address:</b> 120, Pixel Ltd., Ahmedabad,
                    <br />
                    Gujarat, India - 380051
                  </address>
                  <ul className="tm-contacts">
                    <li>
                      <a href="#" className="tm-text-gray">
                        <i className="fas fa-envelope" />
                        Email: info@pixel.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-text-gray">
                        <i className="fas fa-phone" />
                        Tel: 010-020-0340
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-text-gray">
                        <i className="fas fa-globe" />
                        URL: www.pixel.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* container-fluid, tm-container-content */}
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
          <div className="container-fluid tm-container-small">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                <h3 className="tm-text-primary mb-4 tm-footer-title">
                  About Pixel
                </h3>
                <p>
                  Pixel is free photo editor and distribution website. Working
                  towards better. Here's the destination to pick high quality
                  and premium photos.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                <h3 className="tm-text-primary mb-4 tm-footer-title">
                  Our Links
                </h3>
                <ul className="tm-footer-links pl-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                  <li className="mb-2">
                    <a href="https://facebook.com">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://twitter.com">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://instagram.com">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://pinterest.com">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                </ul>
                <Link to="" className="tm-text-gray text-right d-block mb-2">
                  Terms of Use
                </Link>
                <Link to="" className="tm-text-gray text-right d-block">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                Copyright 2023 Pixel Company. All rights reserved.
              </div>
              <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                Designed by Pixel Ltd.
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
