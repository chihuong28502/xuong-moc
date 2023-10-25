import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/useContext";
import Product from "./Product";
import axios from "../api/apiXM";

function ShowAllWishList() {
  let iconProduct = "fa-solid fa-heart-crack";
  const { responseData } = useContext(context);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("wishlist")
      .then((response) => {
        // Xử lý dữ liệu từ phản hồi
        setData(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  }, []);
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
        <div className="box-control">
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sắp xếp
            </button>
            <div
              className="dropdown-menu dropdown-menu-left"
              aria-labelledby="dropdownMenuButton"
            >
              <button className="dropdown-item" title="Giá cao đến thấp">
                <span />
                Giá cao đến thấp
              </button>
              <button className="dropdown-item" title="Giá thấp đến cao">
                <span />
                Giá thấp đến cao
              </button>
              <button className="dropdown-item" title="Độ nổi bật">
                <span />
                Độ nổi bật
              </button>
            </div>
          </div>
          <div className="group-filter">
            <div className="filter-item ">Dưới 5 triệu</div>
            <div className="filter-item ">Từ 5 - 10 triệu</div>
            <div className="filter-item ">Trên 10 triệu</div>
          </div>
        </div>
        <div className="all-product__item--title">
          <h4>Danh sách yêu thích ({responseData.length}sản phẩm) </h4>
        </div>
        <div className="row">
          {responseData.map((item) => (
            <Product
              iconProduct={iconProduct}
              setProduct={setData}
              product={item}
              key={item.id}
            />
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
