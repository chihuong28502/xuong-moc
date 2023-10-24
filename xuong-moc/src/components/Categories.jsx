import React, { useEffect, useState } from "react";
import axios from "../api/apiXMSwaggerUI";
// http://cutuananh.devmaster.vn/images/AnhCatTC/loai/
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllCategories = async () => {
      let respone = await axios.get("categories");
      setCategories(respone.data);
    };
    getAllCategories();
  }, []);
  useEffect(() => {}, [categories]);

  return (
    <section id="home-category">
      <div className="list-category container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-3 my-5" key={category.id}>
              <a href="/san-pham/phong-khach">
                <img
                  src={`http://apixm.devmaster.vn/${category.icon}`}
                  alt=""
                />
                <p>{category.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="slide-product">
        <h4>sản phẩm nổi bật</h4>
        <div className="slick-slider slider slick-initialized">
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
                transition: "-webkit-transform 500ms ease 0s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
