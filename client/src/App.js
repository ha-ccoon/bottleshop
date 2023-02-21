import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Admin_product from "./components/Admin/Admin_product";
import Admin_user from "./components/Admin/Admin_user";

export default function App() {
  return (
    <div className="App">
      <Layout>
        bottleshop
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Categories />}></Route>
            <Route
              exact
              path="/admin/product"
              element={<Admin_product />}
            ></Route>
            <Route exact path="/admin/user" element={<Admin_user />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
