import React from "react";
import yaz from "./yaz.jpeg";
import "./Slider.css";

function Slider() {
  return (
    <div id="sld">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={yaz} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2098_20230911092416.jpeg/format:webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.log.com.tr/wp-content/uploads/2020/09/apple-dan-gizlilik-odakli-eglenceli-reklam-filmi-izle-1280x720.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
