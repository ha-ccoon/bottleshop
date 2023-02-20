import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <header>
        <div>
          <a class="Main_Logo" href="">
            Bottle Shop
          </a>
        </div>
        <nav class="contaier">
          <div>
            <ul className="navbar">
              <li>
                <a>Wine</a>
                {/* <ul>
                  <li>
                    <a>RedWine</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a>WhiteWine</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a>Champane</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a>Cheeses</a>
              </li>
              <li>
                <a>Q&A</a>
              </li>
              <form>
                <input className="search_bar" type="search" />
                <button className="buttonSearch">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </header>
      <main className="main_content">{children}</main>
      <footer className="footer">
        <div className="contaier">
          <div className="row">
            <h2>Bottle Shop</h2>
            <ul className="list-unstyled">
              <li>
                대표번호: 051-100-1004 | 이메일: sulsajo@gmail.com | 대표자:
                손민하{" "}
              </li>
              <li>
                주소: 대한민국 부산 | 법인명: (주)술사조 | 사업자등록정보:
                2023-03-03-1500 | Author by Team4 | Copyright ⓒ 2023 Team4.All
                rights reserved.
              </li>
            </ul>
            <div className="row">
              <h5></h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
