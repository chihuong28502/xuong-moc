import React, { useContext, useEffect } from "react";
import "../css/products-style.css";
import axios from "../api/apiXMSwaggerUI";
import Product from "../componentChild/Product";
import { Link } from "react-router-dom";
import { context } from "../context/useContext";
import BannerComp from "../components/BannerComp";
function Products() {
  const { listProducts, setListProducts, listCategories, setListCategories } =
    useContext(context);
  let iconProduct = "fa-regular fa-heart";
  useEffect(() => {
    axios
      .get("products")
      .then((response) => {
        setListProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("categories")
      .then((response) => {
        setListCategories(response.data);
      })
      .catch((error) => {
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
      <BannerComp />
      <div className="wrap-all-products">
        <div className="box-content all-product container">
          {elementAllproducts}
        </div>
      </div>
    </>
  );
}

export default Products;
