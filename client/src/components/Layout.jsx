import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header>
        <div>
          <a class="Main_Logo" href="">
            Bottle Shop
          </a>
        </div>
        <nav class="navbar">
          <div className="navbar_menu">
            <ul>
              <li>
                <a>Wine</a>
                <ul>
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
                </ul>
              </li>
              <li>
                <a>Cheeses</a>
              </li>
              <li>
                <a>Q&A</a>
              </li>
            </ul>
            <form>
              <input className="search_bar" type="search" />
              <button className="btn btn-outline-secces" type="sumit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <h3>header</h3>
      </header>
      <main>{children}</main>
      <footer>
        <h3>footer</h3>
      </footer>
    </div>
  );
};

export default Layout;
