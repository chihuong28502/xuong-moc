import React, { useContext, useState } from "react";
import "../css/products-allproducts.css";
import { context } from "../context/useContext";
import Product from "./Product";
import BannerComp from "../components/BannerComp";
function ListSearch() {
  const { dataSearch, valueSearch } = useContext(context);
  const [numberItem, setNumberItem] = useState(4);
  const handleClickNumber = () => {
    setNumberItem(numberItem + 4);
  };
  return (
    <>
      <BannerComp />
      <div className="all-product__item container py-5">
        {dataSearch.length === 0 ? (
          <div className="all-product__item--title">
            <h4>Không tìm thấy kết quả nào</h4>
          </div>
        ) : (
          <div className="all-product__item--title">
            <h4>Kết quả tìm kiếm cho từ khóa "{valueSearch}"</h4>
          </div>
        )}

        <div className="row">
          {dataSearch.slice(0, numberItem).map((item) => (
            <Product
              iconProduct={"fa-regular fa-heart"}
              product={item}
              key={item.id}
            />
          ))}
        </div>
        <div className="load-more">
          <button
            type="button"
            className="load-more__btn"
            onClick={handleClickNumber}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </>
  );
}

export default ListSearch;
