import React, { useEffect, useState } from "react";
import axios from "../api/apiXMSwaggerUI";
import { Link } from "react-router-dom";
import slugify from "../format/formatText";
function HomeNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getAllListNews = async () => {
      let respone = await axios.get("News");
      setNews(respone.data);
    };
    getAllListNews();
  }, []);

  return (
    <section id="home-news">
      {news.length !== 0 && (
        <div className="home-news container">
          <h4>tin tức</h4>
          <div className="row ">
            <div className="col-md-7 home-news__effect">
              <Link to={`/news/${slugify(news[0].title)}`}>
                <div className="thumbnail box">
                  <div className="img img-main">
                    <img
                      src={`http://apixm.devmaster.vn/${news[0].image}`}
                      alt=""
                    />
                  </div>
                  <div className="main-content">
                    <p>{news[0].title}</p>
                    <p>{news[0].description}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-5">
              <div className="thumbnail">
                <div className="home-news__effect">
                  {news.splice(0, 3).map((item, index) => (
                    <Link
                      to={`/news/${slugify(item.title)}`}
                      className="row fix-height"
                      key={index}
                    >
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <img
                            className="home-new-img-item"
                            src={`http://apixm.devmaster.vn/${item.image}`}
                            alt="tin tức"
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/#">{item.title}</a>
                        </p>
                        <p className="desc">{item.content}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="readMore">
                  <Link to={`News`}>
                    Xem thêm
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeNews;
