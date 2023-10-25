import React, { useEffect, useState } from "react";
import axios from "../api/apiXM";
import "../css/boxWishList.css";
function BoxWishList({ wishlist }) {
  useEffect(() => {
    
  }, [wishlist]);
  return (
    <div className="box__content">
      <div>
        <a href="/">
          <div className="box__content--data">
            <div className="details">
              <img
                src={`http://cutuananh.devmaster.vn/${wishlist.image}`}
                alt=""
              />
              <div>
                <h5>{wishlist.product_name}</h5>
                <h5>
                  &nbsp;
                  <i className="fa-solid fa-star" />
                </h5>
              </div>
            </div>
            <h5>
              <span className="new-price">
                {Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(wishlist.price)}
              </span>
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BoxWishList;
