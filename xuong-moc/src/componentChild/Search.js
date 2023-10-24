import React, { useContext, useEffect, useState } from "react";
import handleClickSearch from "../handleJs/search";
import handleOnclickInputSearch from "../handleJs/handleOnclickInputSearch";
import apiXM from "../api/apiXM";
import { Link } from "react-router-dom";
import { context } from "../context/useContext";
import slugify from "slugify";
import DataSearchUlLi from "./DataSearchUlLi";
function Search() {
  // handle design

  const [products, setproducts] = useState([]);
  let { valueSearch, setValueSearch } = useContext(context);
  useEffect(() => {
    const getAllProductsSearch = async () => {
      let respone = await apiXM.get("/products");
      setproducts(
        respone.data.filter((fil) =>
          fil.product_name
            .toLocaleLowerCase()
            .trim()
            .includes(valueSearch.toLocaleLowerCase().trim())
        )
      );
    };
    getAllProductsSearch();
  }, [valueSearch]);
  const handleGetValueSearch = (e) => {
    let value = e.target.value;
    setValueSearch(value);
  };
  const handleOnclickIconSearch = () => {
    // setDataSearch(products);
    // dataSearch = products.filter((fil) =>
    //   fil.product_name
    //     .toLocaleLowerCase()
    //     .trim()
    //     .includes(valueSearch.toLocaleLowerCase().trim())
    // );
    // setDataSearch();
    setproducts(products);
  };
  return (
    <>
      <>
        <div
          href="/#"
          className="item-icon icon-search d-flex justify-content-center align-items-center position-relative"
          onClick={handleClickSearch}
        >
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="search-form">
          <input
            onChange={handleGetValueSearch}
            id="search"
            type="text"
            className="search-box"
            onClick={handleOnclickInputSearch}
          />
          <label className="label-search" htmlFor="search">
            Bạn cần tìm sản phẩm gì?
          </label>
          <Link
            to={`/search/${slugify(valueSearch)}`}
            className="search-form__search"
            onClick={handleOnclickIconSearch}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
      </>
      {valueSearch === "" ? (
        ""
      ) : (
        <DataSearchUlLi valueSearch={valueSearch} product={products} />
      )}
    </>
  );
}

export default Search;
