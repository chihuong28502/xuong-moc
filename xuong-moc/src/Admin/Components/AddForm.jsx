import React, { useEffect, useState } from "react";
import CategoriesAdmin from "./CategoriesAdmin";
import slugifyText from "../../format/formatText";
import axios from "../../api/apiXM";

function AddForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [priceNew, setPriceNew] = useState("");
  const [priceOld, setPriceOld] = useState("");
  const [srcImg, setSrcImg] = useState({});
  const [formSubmit, setFormSubmit] = useState({});

  const handleSubmit = () => {
    setFormSubmit({
      title: title,
      description: description,
      content: content,
      image: srcImg,
      slug: slugifyText(title),
      priceOld: priceOld,
      priceNew: priceNew,
    });
    console.log(1);
  };
  useEffect(() => {
    postData(formSubmit);
  }, [formSubmit]);
  const postData = async (product) => {
    try {
      // Gọi API sử dụng Axios
      await axios.post("products", product);

      // Xử lý dữ liệu khi API call thành công
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
  return (
    <>
      <div className="adminMain row container-fluid ">
        <CategoriesAdmin />
        <div className="collapse border show objInfor col-7">
          <div className="alert-danger mb-3 admins-h2 btn-red">
            THÔNG TIN DANH MỤC THƯƠNG HIỆU
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">Tên sản phẩm(TITLE)</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="TITLE"
              className="form-control"
              id="TITLE"
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">
              Từ khóa (description)
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">
              Nội dung sản phẩm (content)
            </label>
            <input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">priceNew (priceNew)</label>
            <input
              onChange={(e) => setPriceNew(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">priceOld (priceOld)</label>
            <input
              onChange={(e) => setPriceOld(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold mb-1">Hình ảnh (image)</label>
            <input
              onChange={(e) =>
                setSrcImg(URL.createObjectURL(e.target.files[0]))
              }
              type="file"
              className="form-control"
            />
            <img src={srcImg} alt="" />
          </div>
          <button className="btn btn-primary w-25 h-25" onClick={handleSubmit}>
            Submit
          </button>
          {/* <div hidden="">
            <input type="text" name="ID" defaultValue={0} />
            <input type="text" name="CREATED_DATE" defaultValue="" />
            <input type="text" name="UPDATED_DATE" defaultValue="" />
            <input type="text" name="ADMIN_CREATED" defaultValue="" />
            <input type="text" name="ADMIN_UPDATED" defaultValue="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AddForm;
