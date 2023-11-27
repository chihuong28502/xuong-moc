import React, { useContext } from "react";
import "../css/productDetail.css";
import { context } from "../context/useContext";
import { Link } from "react-router-dom";
import Product from "../componentChild/Product";
function ProductDetail() {
  const { productSelect, listCategories, listProducts } = useContext(context);
  const iconProduct = "fa-regular fa-heart";
  const elementAllproducts = listCategories
    .filter((item) => item.id === productSelect.cid)
    .map((item, index) => {
      return (
        <div className="all-product__item mx-0 my-0" key={index}>
          <div className="all-product__item--title px-0 d-flex align-items-center pt-0">
            <h4 className="mx-0 px-0">{item.title}</h4>
            <Link className="see-all" to={`/products/${item.slug}`}>
              Xem tất cả
            </Link>
          </div>
          <div className="row px-0">
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
    <div className="container productDetail">
      {/* ./header  */}
      <section id="product-detail">
        <div className="container">
          <div className="product-detail px-0">
            <h2>{productSelect.title}</h2>
            <div className="main-product-top row">
              <div className="col-lg-6 main-product-top-left pe-3 ps-0">
                <div className="img-main-product">
                  <img
                    className="w-100 h-100"
                    src={`http://apixm.devmaster.vn/${productSelect?.image}`}
                    alt={`http://apixm.devmaster.vn/${productSelect?.image}`}
                  />
                </div>
                <div className="img-secondary-product row my-4">
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src={`http://apixm.devmaster.vn/${productSelect?.image}`}
                      alt="sp-1.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src={`http://apixm.devmaster.vn/${productSelect?.image}`}
                      alt="sp-2.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src={`http://apixm.devmaster.vn/${productSelect?.image}`}
                      alt="sp-3.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src={`http://apixm.devmaster.vn/${productSelect?.image}`}
                      alt="sp-4.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 main-product-top-right px-0">
                <div className="chat-lieu mb-5">
                  <div>
                    <b>Chất liệu</b>
                  </div>
                  <div className="list-chat-lieu">
                    <button className="btn btn-chat-lieu ml-2">Gỗ sồi</button>
                    <button className="btn btn-chat-lieu mx-2">Gỗ lim</button>
                  </div>
                </div>
                <div className="price">
                  <div id="price-old">
                    {productSelect.priceOld} <span>VNĐ</span>
                  </div>
                  <div id="price-new">
                    {productSelect.priceNew} <span>VNĐ</span>
                  </div>
                </div>
                <label id="bao-hanh" className="mt-2">
                  <span className="baoHanhText mx-2">
                    <i class="baoHanhIcon fa-solid fa-shield me-3"></i>
                    Bảo hành sản phẩm lên tới 36 tháng
                  </span>
                </label>
                <br />
                <div className="main-product-bottom mt-5 border p-3">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item d-flex" role="presentation">
                      <button
                        className="nav-link active"
                        id="dac-trung-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#dac-trung"
                        type="button"
                        role="tab"
                        aria-controls="dac-trung"
                        aria-selected="true"
                      >
                        Đặc trưng
                      </button>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <button
                        className="nav-link"
                        id="thong-so-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#thong-so"
                        type="button"
                        role="tab"
                        aria-controls="thong-so"
                        aria-selected="false"
                      >
                        Thông số
                      </button>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <button
                        className="nav-link"
                        id="bao-quan-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#bao-quan"
                        type="button"
                        role="tab"
                        aria-controls="bao-quan"
                        aria-selected="false"
                      >
                        Bảo quản
                      </button>
                    </li>

                    <li className="nav-item d-flex" role="presentation">
                      <button
                        className="nav-link"
                        id="cam-ket-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#cam-ket"
                        type="button"
                        role="tab"
                        aria-controls="cam-ket"
                        aria-selected="false"
                      >
                        Cam kết
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-3" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="dac-trung"
                      role="tabpanel"
                      aria-labelledby="dac-trung-tab"
                    >
                      <ul>
                        <li>
                          <p>- Bàn cà phê cũng đơn giản với kệ nhở</p>
                        </li>
                        <li>
                          <p>- Phong cách hình học tối giản</p>
                        </li>
                        <li>
                          <p>
                            - Kệ bên trong có kích thước hoàn hảo cho tạp chí,
                            đế lót ly và các phụ kiện phòng khách khac
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            - Cóa thể được sử dụng như một bàn TV thấp - Kệ mỏng
                            hoàn hoản để chứa một hộp hàng đầu hoặc đầu phát
                            blu-ray
                          </p>
                        </li>
                        <li>
                          <p>- Làm bằng gỗ Sheesham cao cấp</p>
                        </li>
                        <li>
                          <p>- Không cần lắp ráp</p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="thong-so"
                      role="tabpanel"
                      aria-labelledby="thong-so-tab"
                    >
                      <h3>{productSelect.size}</h3>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="bao-quan"
                      role="tabpanel"
                      aria-labelledby="bao-quan-tab"
                    >
                      <ul>
                        <li>
                          <p>- Bàn cà phê cũng đơn giản với kệ nhở</p>
                        </li>
                        <li>
                          <p>- Phong cách hình học tối giản</p>
                        </li>
                        <li>
                          <p>
                            - Kệ bên trong có kích thước hoàn hảo cho tạp chí,
                            đế lót ly và các phụ kiện phòng khách khac
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            - Cóa thể được sử dụng như một bàn TV thấp - Kệ mỏng
                            hoàn hoản để chứa một hộp hàng đầu hoặc đầu phát
                            blu-ray
                          </p>
                        </li>
                        <li>
                          <p>- Làm bằng gỗ Sheesham cao cấp</p>
                        </li>
                        <li>
                          <p>- Không cần lắp ráp</p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="cam-ket"
                      role="tabpanel"
                      aria-labelledby="cam-ket-tab"
                    >
                      <ul>
                        <li>
                          <p>- Bàn cà phê cũng đơn giản với kệ nhở</p>
                        </li>
                        <li>
                          <p>- Phong cách hình học tối giản</p>
                        </li>
                        <li>
                          <p>
                            - Kệ bên trong có kích thước hoàn hảo cho tạp chí,
                            đế lót ly và các phụ kiện phòng khách khac
                          </p>
                        </li>
                        <li>
                          <p>
                            - Cóa thể được sử dụng như một bàn TV thấp - Kệ mỏng
                            hoàn hoản để chứa một hộp hàng đầu hoặc đầu phát
                            blu-ray
                          </p>
                        </li>
                        <li>
                          <p>- Làm bằng gỗ Sheesham cao cấp</p>
                        </li>
                        <li>
                          <p>- Không cần lắp ráp</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./banner  */}
      <div className="my-5">
        <h3 className="mb-3 sp-miror">Sản phẩm tương tự</h3>
        {elementAllproducts}
      </div>
    </div>
  );
}

export default ProductDetail;
