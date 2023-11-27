import React from "react";
import CategoriesAdmin from "./Components/CategoriesAdmin";
import "../Admin/admin.css";
import ControlProducts from "./Components/ControlProducts";
import { Route, Router, Routes } from "react-router-dom";
function Admin() {
  return (
    <div className="adminMain row container-fluid ">
      <CategoriesAdmin />
      <Routes>
        <Route path="Admin/Controlproducts" component={<ControlProducts />} />
      </Routes>
    </div>
  );
}

export default Admin;
