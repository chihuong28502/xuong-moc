import React, { useEffect, useState } from "react";
import "../css/products-style.css";
import Slider from "../components/Slider";
import axios from "../api/apiXM";
import listCategories from "../data/listCategoriesProducts";
import slugify from "../format/formatText";
import Product from "../componentChild/Product";
import { Link } from "react-router-dom";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  let tempProducts = listProducts;
  useEffect(() => {
    // Thực hiện yêu cầu GET đến một API hoặc tài nguyên khác
    axios
      .get("Products")
      .then((response) => {
        // Xử lý dữ liệu từ phản hồi
        setListProducts(response.data);
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
          <h4>{Object.values(item)}</h4>
          <Link className="see-all" to={`/products/${slugify(item)}`}>
            Xem tất cả
          </Link>
        </div>
        <div className="row">
          {/* .filter((x) => x.category === Object.keys(item))
            . */}
          {listProducts
            .filter((x) => x.category === item)
            .slice(0, 4)
            .map((product) => (
              <Product product={product} key={product.id} />
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
