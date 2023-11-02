import React, { useEffect, useState } from "react";
import "../css/products-style.css";
import Slider from "../components/Slider";
import axios from "../api/apiXMSwaggerUI";
import slugify from "../format/formatText";
import Product from "../componentChild/Product";
import { Link } from "react-router-dom";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  let iconProduct = "fa-regular fa-heart";
  useEffect(() => {
    // Thực hiện yêu cầu GET đến một API hoặc tài nguyên khác
    axios
      .get("products")
      .then((response) => {
        // Xử lý dữ liệu từ phản hồi
        setListProducts(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  }, []);
  useEffect(() => {
    // Thực hiện yêu cầu GET đến một API hoặc tài nguyên khác
    axios
      .get("categories")
      .then((response) => {
        // Xử lý dữ liệu từ phản hồi
        setListCategories(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  }, []);
  const elementAllproducts = listCategories.map((item, index) => {
    return (
      <div className="all-product__item" key={index}>
        <div className="all-product__item--title">
          <h4>{item.title}</h4>
          <Link className="see-all" to={item.slug}>
            Xem tất cả
          </Link>
        </div>
        <div className="row">
          {/* .filter((x) => x.category === Object.keys(item))
            . */}
          {listProducts
            .filter((x) => x.cid === item.id)
            .slice(0, 4)
            .map((product) => (
              <Product
                iconProduct={iconProduct}
                product={product}
                key={product.id}
              />
            ))}
        </div>
      </div>
    );
  });
  return (
    <>
      <Slider />
      <div className="wrap-all-products">
        <div className="box-content all-product container">
          {elementAllproducts}
        </div>
      </div>
    </>
  );
}

export default Products;
