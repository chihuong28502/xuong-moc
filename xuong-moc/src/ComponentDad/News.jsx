import React, { useEffect, useState } from "react";
import "../css/news-style.css";
import axios from "../api/apiXMSwaggerUI";
import { Link } from "react-router-dom";
import slugify from "../format/formatText";
import BannerComp from "../components/BannerComp";

function News() {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const getAllListNews = async () => {
      let respone = await axios.get("News");
      setListNews(respone.data);
    };
    getAllListNews();
  }, []);
  return (
    <>
      <BannerComp />
      <div className="wrapper">
        <div className="box-news container">
          <div id="map-link-bar">
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/tin-tuc">Tin tức</a>
              </li>
            </ul>
          </div>
          <div className="box-news__content">
            {listNews.length !== 0 && (
              <div className="row">
                <div className="col-md-7 content-left">
                  <Link to={`/news/${slugify(listNews[0].title)}`}>
                    <div className="thumbnail">
                      <p className="content-left__title">{listNews[0].title}</p>
                      <p>{listNews[0].description}</p>
                      <img
                        src={`http://apixm.devmaster.vn/${listNews[0].image}`}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-5 content-right">
                  <div className="thumbnail">
                    <div className="row ">
                      <div className="col-md-12">
                        <h4>bài viết mới</h4>
                      </div>
                    </div>
                    {listNews.slice(1, 4).map((item) => (
                      <Link
                        to={`/news/${slugify(item.title)}`}
                        className="row fix-height"
                        key={item.id}
                      >
                        <div className="col-md-5">
                          <img
                            src={`http://apixm.devmaster.vn/${item?.image}`}
                            alt="tin tức"
                          />
                        </div>
                        <div className="col-md-7">
                          <p className="content-right__title">
                            <a href="/">{item.title}</a>
                          </p>
                          <p>
                            <i className="fa-regular fa-clock"></i>&nbsp;
                            {new Date(item.createdDate).toLocaleDateString()}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
