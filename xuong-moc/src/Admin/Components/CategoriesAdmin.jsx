import React from "react";
import { showControlAdmin } from "../../handleJs/handleShowControlAdmin";
import { Link } from "react-router-dom";

function CategoriesAdmin() {
  return (
    <div className="adminCategory col-3 bg-light ">
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img />
            </div>
            <div className="info   w-100  ">
              <form id="logoutForm">
                <input type="hidden" />{" "}
                <a className="right">
                  <span className="right badge badge-danger">Đăng xuất</span>
                </a>
              </form>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="/admins" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Bảng điều khiển</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admins/Accounts" className="nav-link">
                  <i className="nav-icon fas fa-user-tie" />
                  <p>Quản lý tài khoản</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admins/slides" className="nav-link">
                  <i className="nav-icon fas fa-sliders-h" />
                  <p>Quản lý Banner</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Admins/intro" className="nav-link">
                  <i className="nav-icon fab fa-penny-arcade" />
                  <p>Quản lý giới thiệu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admins/news" className="nav-link">
                  <i className="nav-icon fas fa-file-signature" />
                  <p>Danh mục tin tức</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admins/contact/index" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Danh sách khách hàng</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admins/artist/index" className="nav-link">
                  <i className="nav-icon fas fa-user-astronaut" />
                  <p>Danh mục nghệ nhân</p>
                </a>
              </li>
              <li className="nav-item menu-open" onClick={showControlAdmin}>
                <a className="nav-link active">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Quản lý sản phẩm
                    {/* <i className="right fas fa-angle-left" /> */}
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Danh mục sản phẩm</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Danh mục thương hiệu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Trọng Lượng</p>
                    </a>
                  </li>
                  <li className="nav-item menu-open">
                    <Link to={`/Admin/ControlProducts`} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Danh sách sản phẩm</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon fas fa-user-tie" />
                  <p>
                    Thông tin công ty
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default CategoriesAdmin;
