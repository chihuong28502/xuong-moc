import React, { useEffect, useState } from "react";
import CategoriesAdmin from "./CategoriesAdmin";
import axios from "../../api/apiXM";
import { Link } from "react-router-dom";
function ControlProducts() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({});

  const fetchData = async () => {
    try {
      // Gọi API sử dụng Axios
      const response = await axios.get("products");

      // Xử lý dữ liệu khi API call thành công
      console.log("API Response:", response.data);
      setData(response.data);
    } catch (error) {
      // Xử lý lỗi khi API call thất bại
      console.error("API Error:", error);

      // Bạn có thể thêm xử lý khác tùy thuộc vào loại lỗi
      if (error.response) {
        // Lỗi từ phía server với mã trạng thái không 2xx
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // Không có phản hồi từ server
        console.error("No Response from Server");
      } else {
        // Lỗi trong quá trình thiết lập request
        console.error("Request Setup Error", error.message);
      }
    }
  };
  const deleteData = async (item) => {
    console.log(item);
    try {
      // Gọi API sử dụng Axios
      await axios.delete(`products/${item.id}`);
      // Xử lý dữ liệu khi API call thành công
      setPostData(data);
    } catch (error) {
      // Xử lý lỗi khi API call thất bại
      console.error("API Error:", error);
      // Bạn có thể thêm xử lý khác tùy thuộc vào loại lỗi
    }
  };
  useEffect(() => {
    console.log(1);
    if (postData) {
      fetchData();
    }
  }, [postData]);

  const handleDelete = (item) => {
    deleteData(item);
    console.log(item);
  };
  return (
    <div className="adminMain row container-fluid ">
      <CategoriesAdmin />
      <div className="content bg-dark col-9">
        <div className="show-table">
          <div className="container-fluid">
            <div className="row">
              <div className="utilities-top col-md-12  pl-2 pr-2 mb-2 justify-content-between d-flex">
                <div>
                  <select className="form-control" name="display">
                    <option value={5}>5</option>
                    <option value={15} selected="">
                      15
                    </option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
                <div className="search d-flex">
                  <input
                    type="text"
                    placeholder="Nhập tiêu đề tìm kiếm -> Nhấn Enter"
                    className="form-control"
                    style={{ width: 250 }}
                    title="Nhập tiêu đề tìm kiếm -> Nhấn Enter"
                  />
                  <Link
                    className="btn-green btn-tools text-nowrap btnAdd"
                    to={`AddProduct`}
                  >
                    <i className="fa fa-plus" /> Thêm mới
                  </Link>
                </div>
              </div>
              <div className="col-md-12 p-2">
                <div className="table-responsive">
                  <div className="data-table">
                    <table
                      id="myTable"
                      className="table table-striped table-bordered text-left table-hover"
                    >
                      <thead>
                        <tr>
                          <th>.No</th>
                          <th className="order-code" data-status={0}>
                            <i className="fas fa-sort" /> Mã
                          </th>
                          <th className="order-tieude" data-status={0}>
                            <i className="fas fa-sort" /> Tên sản phẩm
                          </th>
                          <th className="order-price-new" data-status={0}>
                            <i className="fas fa-sort" /> Giá mới
                          </th>
                          <th className="order-ngaysua" data-status={0}>
                            <i className="fas fa-sort" />
                            Ngày thêm
                          </th>
                          <th className="order-view" data-status={0}>
                            <i className="fas fa-sort" /> Lượt xem
                          </th>
                          <th>
                            <i className="fas fa-sort" />
                            Trạng thái
                          </th>
                          <th>
                            <i className="fas fa-tasks" />
                            Tác vụ
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item, index) => (
                          <tr key={item.id}>
                            <td className="text-center">{index + 1}</td>
                            <td> {item.id}</td>
                            <td> {item.title}</td>
                            <td className="text-right"> {item.priceNew}</td>
                            <td> 2/6/2023</td>
                            <td> 0</td>
                            <td>
                              <span className="text-success">Hiển thị</span>
                            </td>
                            <td className="d-flex justify-content-end">
                              <div>
                                <button
                                  className="btn-green btn-event"
                                  onclick="window.open('/tra-ho-tro--phong-cam-lanh-va-covid')"
                                >
                                  <i className="fas fa-info-circle" />
                                </button>
                                <button className="btn-yellow btn-event">
                                  <i className="far fa-edit" />
                                </button>
                                <button
                                  className="btn-red btn-event"
                                  onClick={() => handleDelete(item)}
                                >
                                  <i className="far fa-trash-alt" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={8}>
                            <strong id="record-count">
                              Tổng số có:
                              <span className="btn-tools btn-red">
                                {data?.length}
                              </span>{" "}
                              sản phẩm
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="pagination mt-md-4 mt-0 d-flex justify-content-between">
                      <div className="info">
                        <p className="m-0">Trang 1 / 1</p>
                      </div>
                      <ul className="list-unstyled d-flex">
                        <li
                          className="page-item page-link active"
                          data-page={1}
                        >
                          1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlProducts;
