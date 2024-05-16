import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Gallery.css";

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://127.0.0.1/api/show.php")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }

  return (
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-1 active"
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
                <Link className="nav-link nav-link-4" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div className="tm-hero d-flex justify-content-left align-items-center">
        <div className="col-md-5 offset-md-1 ">
          <div className="detail_box">
            <h1>
              Photo <br />
              Gallery
            </h1>
            <p>Largest collection of Free high quality photos</p>
            <div className="btn-box">
              <Link to="/gallery" className="btn-1">
                Explore
              </Link>
              <Link to="/about" className="btn-2">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="BodyContent">
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary" style={{ textAlign: "left" }}>
              Latest Photos
            </h2>
          </div>
          <div className="row tm-mb-40 tm-gallery">
            {data
              .sort((a, b) => b.ID - a.ID) // Sort in descending order based on ID (you can change the property)
              .slice(0, 4) // Select the first 4 items from the sorted array
              .map((item, index) => {
                return (
                  <div className="picsHome" key={item.ID} onClick={() => {}}>
                    <div className="">
                      <figure className="effect-ming tm-video-item figureHome">
                        <img
                          src={item.url}
                          alt="Loading.."
                          className="img-fluid"
                        />
                        <figcaption className="d-flex align-items-center justify-content-center">
                          <h2>{item.category}</h2>
                          <Link to={`/gallery#${item.ID}`}>View more</Link>
                          {console.log("Item ID:", item.ID)}
                        </figcaption>
                      </figure>
                      <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">10 Sep 2020</span>
                        <span>42,700 views</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>{" "}
          {/* row */}
          <div className="row tm-mb-90">
            <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
              <Link to="/gallery" className="btn btn-primary tm-btn-next">
                Explore More
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="container-fluid tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-12 tm-text-primary justify-content-center">
              About Us
            </h2>
          </div>

          <div className="col-lg-12 col-md-12 col-12 mb-5">
            <div className="text-about">
              <p>
                Pixels lets you choose from over 2 Million photos as you need
                provided by our community.
              </p>
              <p className="mb-4">
                Photos have the power to help you relive a specific moment in
                time and recall all of the emotions and details surrounding that
                moment. Our mission is to provide an enjoyable experience in
                front of the camera as well as timeless photographs that you
                will treasure for a lifetime.{" "}
              </p>
            </div>
          </div>

          <div className="row tm-mb-50">
            <div className="col-md-4 col-12">
              <div className="tm-about-3-col">
                <div className="tm-about-icon-container mb-5 mx-auto">
                  <i className="fas fa-image fa-3x tm-text-primary" />
                </div>
                <h2 className="tm-text-primary mb-4 mx-auto justify-content-center">
                  High Quality Images
                </h2>
                <p className="mb-4 text-about">
                  Pixel is the largest collection of free images. Free download
                  high quality premium stock photos, public domain photos.
                  Preview image and download in HD qualities.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tm-about-3-col">
                <div className="tm-about-icon-container mb-5 mx-auto">
                  <i className="fas fa-list fa-3x tm-text-primary" />
                </div>
                <h2 className="tm-text-primary mb-4 justify-content-center">
                  Wide Range & Categorized
                </h2>
                <p className="tm-mb-50 text-about">
                  Pixel is the largest collection of free images. Choose from
                  wide range of photos. Find photos easily based on categories.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tm-about-3-col">
                <div className="tm-about-icon-container mb-5 mx-auto">
                  <i className="fas fa-download fa-3x tm-text-primary" />
                </div>
                <h2 className="tm-text-primary mb-4 justify-content-center">
                  Easy Download
                </h2>
                <p className="mb-4 text-about">
                  Easily download the images you need without need of login or
                  share of any information. Easily choose from available sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                towards better. Here's the destination to pick high quality and
                premium photos.
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
  );
}

export default Home;
