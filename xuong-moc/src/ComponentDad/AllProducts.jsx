import React, { useEffect, useState } from "react";
import "../css/products-allproducts.css";
import slugifyText from "../format/formatText";
import listCategories from "../data/listCategoriesProducts";
import axios from "../api/apiXM";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import Product from "../componentChild/Product";
import Control from "../componentChild/Control";
function AllProducts() {
  let iconProduct = "fa-regular fa-heart";
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("");

  const { productCategory } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      let res = await axios.get("products");
      setProduct(
        res.data.filter((x) => slugifyText(x.category) === productCategory)
      );
    };
    getProduct();
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
        <Control sort={sort} setSort={setSort} product={product} />
        {listCategories.map((item, index) => {
          if (slugify(item).toLowerCase() === productCategory) {
            return (
              <div className="all-product__item--title" key={index}>
                <h4>{item}</h4>
              </div>
            );
          }
        })}
        <div className="row">
          {product.slice(0, 4).map((item) => (
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

export default AllProducts;
