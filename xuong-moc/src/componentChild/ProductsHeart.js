import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/apiXM";
import BoxWishList from "./BoxWishList";
function ProductsHeart() {
  const [wishList, setWishList] = useState([]);

  let list = JSON.parse(localStorage.getItem("wishlistItems"));
  useEffect(() => {
    // Thực hiện yêu cầu GET đến một API hoặc tài nguyên khác
    axios
      .get("wishlist")
      .then((response) => {
        // Xử lý dữ liệu từ phản hồi
        setWishList(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  }, [list]);
  return (
    <div
      href="/#"
      className="item-icon icon-heart  d-flex justify-content-center align-items-center position-relative"
    >
      <a href="/danh-sach-yeu-thich">
        <i className="fa-regular fa-heart" />
      </a>
      <div className=" box-heart">
        {list === null || (list !== null && list.length === 0) ? (
          // /products
          <div className="box__empty">
            <p className="box__title">Danh sách của bạn đang trống !</p>
            <a href="/san-pham">
              <Link to={"/products"} className="check__btn">
                xem sản phẩm ngay
              </Link>
            </a>
          </div>
        ) : (
          <div className=" box-wishlist">
            <div class="box__title">Danh sách yêu thích</div>
            {wishList.map((item) => (
              <BoxWishList wishlist={item} key={item.id} />
            ))}
            <div className="check">
              <p>có {list.length} sản phẩm</p>
              <a className="check__btn" href="/danh-sach-yeu-thich">
                Xem chi tiết
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="number-productWishlist">{wishList.length}</div>
    </div>
  );
}

export default ProductsHeart;
