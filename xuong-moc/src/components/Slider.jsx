import React, { useEffect, useState } from "react";
import axios from "../api/apiXM";
import { NavLink } from "react-router-dom";
function Slider() {
  const [slider, setSlider] = useState({});
  useEffect(() => {
    const getDataSlider = async () => {
      let respone = await axios.get("data-banner-home");
      setSlider(respone.data);
    };
    getDataSlider();
  }, []);
  useEffect(() => {}, [slider]);
  return (
    <div className="slider position-relative">
      <div className="slider-img container-fluid gx-0">
        <img className="w-100" src={slider.image} alt="" />
      </div>
      <div className="slider-content position-absolute container ">
        <h1 className="text-uppercase">
          {slider.title}
          <br />
          <span>{slider.subTitle}</span>
        </h1>
        <p>{slider.description}</p>
        <NavLink to={slider.link}>
          <button className="" type="submit">
            LIÊN HỆ NGAY
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Slider;
