import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoxWishList from "./BoxWishList";
import { context } from "../context/useContext";
function ProductsHeart() {
  const { responseData } = useContext(context);
  const [local, setLocal] = useState(() => {
    const list = JSON.parse(localStorage.getItem("wishlistItems"));
    if (list === null || list.length === 0) {
      return responseData;
    }
    return list;
  });
  useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("wishlistItems")));
    // // Thực hiện yêu cầu GET đến một API hoặc tài nguyên khác
    // axios
    //   .get("wishlist")
    //   .then((response) => {
    //     // Xử lý dữ liệu từ phản hồi
    //     // setWishList(response.data);
    //   })
    //   .catch((error) => {
    //     // Xử lý lỗi (nếu có)
    //     console.error(error);
    //   });
  }, [responseData]);
  console.log(local);
  return (
    <div
      href="/#"
      className="item-icon icon-heart  d-flex justify-content-center align-items-center position-relative"
    >
      <Link to={"/danh-sach-yeu-thich"}>
        <i className="fa-regular fa-heart" />
      </Link>
      <div className=" box-heart">
        {local === null || (local !== null && local.length === 0) ? (
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
            <div className="box__title">Danh sách yêu thích</div>
            {local.map((item) => (
              <BoxWishList wishlist={item} key={item.id} />
            ))}
            <div className="check">
              <p>có {local.length} sản phẩm</p>
              <Link className="check__btn" to={"/danh-sach-yeu-thich"}>
                Xem chi tiết
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="number-productWishlist">{local?.length}</div>
    </div>
  );
}

export default ProductsHeart;
