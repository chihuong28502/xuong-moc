import React, { useEffect, useState } from "react";

function Control({ onFilter, product, sort, setSort }) {
  const handleSort = (e) => {
    setSort(e.target.value);
    if (e.target.value !== "" || e.target.value !== undefined) {
      let arr = e.target.value.split("-");
      if (arr[0] === "price") {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            return y.priceNew - x.priceNew;
          });
        } else {
          product.sort((x, y) => {
            return x.priceNew - y.priceNew;
          });
        }
      } else {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            return y.likes - x.likes;
          });
        }
      }
    }
  };
  const [filter, setFilter] = useState();
  useEffect(() => {}, [sort]);
  const handleFilter = (e) => {
    let arrFill = product;
    let className = e.target.className;
    if (className.includes("min")) {
      setFilter(arrFill.filter((item) => item.priceNew < 5000000));
    } else if (className.includes("medium")) {
      setFilter(
        arrFill.filter(
          (item) => item.priceNew > 5000000 && item.priceNew < 10000000
        )
      );
    } else {
      setFilter(arrFill.filter((item) => item.priceNew > 10000000));
    }
  };
  onFilter(filter);

  return (
    <div className="box-control control-form">
      <div className="dropdown ">
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
        <div className="filter-item min" onClick={handleFilter}>
          Dưới 5 triệu
        </div>
        <div className="filter-item medium" onClick={handleFilter}>
          Từ 5 - 10 triệu
        </div>
        <div className="filter-item max" onClick={handleFilter}>
          Trên 10 triệu
        </div>
      </div>
    </div>
  );
}

export default Control;
