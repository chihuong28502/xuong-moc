import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/useContext";
import Product from "./Product";
import axios from "../api/apiXM";
import Control from "./Control";

function ShowAllWishList() {
  let iconProduct = "fa-solid fa-heart-crack";
  const { local } = useContext(context);
  const [sort, setSort] = useState("");

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("wishlist")
  //     .then((response) => {
  //       // Xử lý dữ liệu từ phản hồi
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi (nếu có)
  //       console.error(error);
  //     });
  // }, []);
  return (
    <div className="box-content all-product">
      {/* <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="http://cutuananh.devmaster.vn/images/AnhCatTC/trai-nghiem1.jpg"
              alt=""
              width={1100}
              height={500}
            />
            <div className="carousel-btn">
              <button className="btn-buy">Mua ngay</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="all-product__item container">
        <Control product={local} sort={sort} setSort={setSort} />
        <div className="all-product__item--title">
          <h4>Danh sách yêu thích ({local.length}sản phẩm) </h4>
        </div>
        <div className="row">
          {local.map((item) => (
            <Product iconProduct={iconProduct} product={item} key={item.id} />
          ))}
        </div>
        <div className="load-more">
          <button type="button" className="load-more__btn">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowAllWishList;
