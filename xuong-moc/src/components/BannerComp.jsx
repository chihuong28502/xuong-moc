import React from "react";

function BannerComp() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner carousel-edit">
        <div className="carousel-item active">
          <img
            src="http://cutuananh.devmaster.vn/images/AnhCatTC/banner.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://cutuananh.devmaster.vn/images/AnhCatTC/trai-nghiem1.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BannerComp;
