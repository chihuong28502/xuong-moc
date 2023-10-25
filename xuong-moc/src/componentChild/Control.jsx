import React, { useEffect, useState } from "react";

function Control({ product, sort, setSort }) {
  const handleSort = (e) => {
    console.log(product);
    console.log(e.target.value);
    setSort(e.target.value);
    if (e.target.value !== "" || e.target.value !== undefined) {
      let arr = e.target.value.split("-");
      if (arr[0] === "price") {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            return y.price - x.price;
          });
        } else {
          product.sort((x, y) => {
            return x.price - y.price;
          });
        }
      } else {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            return y.rating - x.rating;
          });
        }
      }
    }
  };
  useEffect(() => {}, [sort]);
  return (
    <div className="box-control">
      <div className="dropdown">
        <select
          value={sort}
          onChange={handleSort}
          className="form-control px-3 py-2"
        >
          <option className="py-3 px-3 d-block">Sắp Xếp</option>
          <option className="py-3 px-3 d-block" value="price-ASC">
            Cao tới thấp
          </option>
          <option className="py-3 px-3 d-block" value="price-DESC">
            Thấp tới cao
          </option>
          <option className="py-3 px-3 d-block" value="rating-ASC">
            Nổi bật
          </option>
        </select>
      </div>
      <div className="group-filter">
        <div className="filter-item ">Dưới 5 triệu</div>
        <div className="filter-item ">Từ 5 - 10 triệu</div>
        <div className="filter-item ">Trên 10 triệu</div>
      </div>
    </div>
  );
}

export default Control;
