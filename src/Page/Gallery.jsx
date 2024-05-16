import { Link } from "react-router-dom";
import "./Gallery.css";

import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [model1, setModel1] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch("http://127.0.0.1/api/show.php")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        filterSelection("all");
        ScrollView();
      });
  }

  const ScrollView = () => {
    const targetImageId = window.location.hash.substring(1);

    if (targetImageId) {
      const targetElement = document.getElementById(`item-${targetImageId}`);

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").clientHeight; // Replace with your actual navbar class
        const targetPosition = targetElement.offsetTop - navbarHeight - 30;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        targetElement.classList.add("highlighted");
      }
    }
  };

  const getImg = (index) => {
    // setTempImgSrc(imgSrc);
    console.log("Opening preview for index:", index);
    setCurrent(index);
    setModel(true);
    setModel1(true);
  };

  const prevImg = () => {
    var a = current - 1;
    if (a >= 0) {
      console.log("Showing previous image. New index:", a);
      // setTempImgSrc(data[a].url);
      setCurrent(a);
    } else {
      console.log("Already at the beginning");
    }
  };

  const nextImg = () => {
    var b = current + 1;
    if (b < data.length) {
      console.log("Showing next image. New index:", b);
      // setTempImgSrc(data[a].url);
      setCurrent(b);
    } else {
      console.log("Already at the end");
    }
  };

  const closeImg = () => {
    console.log("Closing preview");
    setModel(false);
    setModel1(false);
  };

  const [active, setActive] = useState("all");
  useEffect(() => {
    filterSelection(active);
  }, [active]);

  const filterSelection = (c) => {
    //change
    var x, i; // delete
    x = document.getElementsByClassName("filterDiv"); //change
    if (c === "all") c = ""; //change

    for (i = 0; i < x.length; i++) {
      //change
      // const filterDiv = x[i]; //add
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i], "show");
      }
    }
  };

  const w3AddClass = (element, name) => {
    //change
    var arr1, arr2, i; // delete
    arr1 = element.className.split(" "); //change
    arr2 = name.split(" "); //change
    for (i = 0; i < arr2.length; i++) {
      //change
      if (arr1.indexOf(arr2[i]) === -1) {
        //change
        element.className += " " + arr2[i];
      }
    }
  };

  const w3RemoveClass = (element, name) => {
    //change
    var arr1, arr2, i; //delete
    arr1 = element.className.split(" "); //change
    arr2 = name.split(" "); //change
    for (i = 0; i < arr2.length; i++) {
      //change
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  const handleButtonClick = (filter) => {
    // filterSelection(filter);
    setActive(filter);
  };

  const handleDownload = async (imageId) => {
    console.log(imageId);
    const imageBlob = await fetch(
      `http://127.0.0.1/api/download.php?image_id=${imageId}`
    ).then((response) => response.blob());

    console.log(imageBlob);
    const blobUrl = URL.createObjectURL(imageBlob);
    console.log(blobUrl);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = data[current].name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  };
  return (
    <div className="BodyContent">
      <div className={model ? "model open" : "model"}>
        <div className="photoSpace">
          {current > 0 && (
            <b className="prev fa-2x" onClick={prevImg}>
              &lt;
            </b>
          )}
          <img className="img" src={data[current] && data[current].url}></img>
          {current < data.length - 1 && (
            <b className="next fa-2x" onClick={nextImg}>
              &gt;
            </b>
          )}

          <b
            className="btn btn-primary tm-btn-big down"
            onClick={() => {
              handleDownload(current + 1);
            }}
          >
            <i className="fas fa-download"></i>
            <span className="download-text">Download</span>
          </b>
          <b className="close" onClick={closeImg}>
            &#10006;
          </b>
        </div>
      </div>

      <div className={model1 ? "model1 open" : "model1"}>
        <div className="photoDetails">
          <div className="tm-bg-gray tm-video-details">
            <p className="mb-4">{data[current] && data[current].description}</p>

            <div className="text-center mb-4">
              <button
                className="btn btn-primary tm-btn-big download"
                onClick={() => {
                  handleDownload(current + 1);
                }}
              >
                <span className="text">Download</span>
              </button>
            </div>

            <div className="mb-4 d-flex flex-wrap">
              <div className="mr-4 my-3">
                <span className="tm-text-gray-dark">Dimension: </span>
                <span className="tm-text-primary">
                  {data[current] && data[current].resolution}
                </span>
              </div>
              <div className="mr-4 my-3">
                <span className="tm-text-gray-dark">Format: </span>
                <span className="tm-text-primary">
                  {data[current] && data[current].format}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="tm-text-gray-dark mb-3">License</h3>
              <p>
                Free for both personal and commercial use. No need to pay
                anything. No need to make any attribution.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                  className="nav-link nav-link-1"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-2 active" to="/gallery">
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

      <div className={`galleryComponent ${model ? "model-open" : ""}`}>
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary" style={{ textAlign: "left" }}>
              Photos
            </h2>

            <div id="myBtnContainer">
              <button
                className={`btnf ${active === "all" ? "active" : ""}`}
                onClick={() => handleButtonClick("all")}
              >
                Show all
              </button>
              {Array.from(new Set(data.map((item) => item.category)))
                .filter((category) => category !== "Other") // Exclude the "Others" category
                .map((category) => (
                  <button
                    key={category}
                    className={`btnf ${active === category ? "active" : ""}`}
                    onClick={() => handleButtonClick(category)}
                  >
                    {category}
                  </button>
                ))}

              <button
                className={`btnf ${active === "Other" ? "active" : ""}`}
                onClick={() => handleButtonClick("Other")}
              >
                Other
              </button>
            </div>

            {/* Photos */}
            <div className="gallery">
              {data.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={item.ID}
                    id={`item-${item.ID}`}
                    onClick={() => {
                      getImg(index);
                      console.log(item.ID);
                      console.log(item);
                    }}
                  >
                    <figure
                      className={`effect-ming tm-video-item filterDiv ${item.category}`}
                    >
                      <img
                        src={item.url}
                        alt="Image"
                        className="img-fluid"
                        style={{ width: "100%" }}
                      />
                      <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>{item.name}</h2>
                        <Link to="">View more</Link>
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>

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
    </div>
  );
}
