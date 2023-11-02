import React, { useEffect, useState } from "react";
import "../css/products-allproducts.css";
import slugifyText from "../format/formatText";
import axios from "../api/apiXMSwaggerUI";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import Product from "../componentChild/Product";
import Control from "../componentChild/Control";
function AllProducts() {
  let iconProduct = "fa-regular fa-heart";
  let [numberLoad, setNumberLoad] = useState(4);
  const [product, setProduct] = useState([]);
  const { slug } = useParams();
  const [listCategories, setListCategories] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      let res = await axios.get("categories");
      setListCategories(res.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      let res = await axios.get("products");
      setProduct(
        listCategories.map((category) => {
          if (category.slug === slug) {
            res.data.filter((x) => x.cid === category.id);
          }
        })
      );
    };
    getProduct();
  }, []);
  const [filters, setFilter] = useState();
  const handleFilter = (filter) => {
    console.log(filter);
    setFilter(filter);
  };
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + 4);
  };
  useEffect(() => {}, [numberLoad]);
  return (
    <div className="box-content all-product ">
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
        <Control
          onFilter={handleFilter}
          sort={sort}
          setSort={setSort}
          product={product}
        />
        {listCategories.map((item, index) => {
          if (item.slug === slug) {
            return (
              <div className="all-product__item--title" key={index}>
                <h4>{item.title}</h4>
              </div>
            );
          }
        })}
        <div className="row">
          {filters === undefined
            ? product
                .slice(0, numberLoad)
                .map((item, index) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={index}
                  />
                ))
            : filters
                .slice(0, numberLoad)
                .map((item, index) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={index}
                  />
                ))}
        </div>
        <div className="load-more">
          <button
            type="button"
            className="load-more__btn"
            onClick={handleShowAllProducts}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
