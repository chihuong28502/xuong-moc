import React, { useContext } from "react";
import { context } from "../context/useContext";
import { NavLink } from "react-router-dom";

function Navigate() {
  const { navList } = useContext(context);

  const activeClassName = ({ isActive }) => {
    return isActive ? "nav-item active" : "nav-item";
  };
  return (
    <nav className="nav col-6 align-items-center">
      <ul className="nav-list d-flex justify-content-between w-100 align-items-center my-0">
        {navList.map((nav) => {
          return (
            <NavLink to={nav.router} key={nav.id} className={activeClassName}>
              {nav.title}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigate;
