import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();

  const [menu, setMenu] = useState("HOME");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("HOME")}
          className={menu === "HOME" ? "active" : ""}
        >
          HOME
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("PRODUCTS")}
          className={menu === "PRODUCTS" ? "active" : ""}
        >
          PRODUCTS
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("MOBILE-APP")}
          className={menu === "MOBILE-APP" ? "active" : ""}
        >
          MOBILE-APP
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("CONTACT US")}
          className={menu === "CONTACT US" ? "active" : ""}
        >
          CONTACT US
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="search" />
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.cart} alt="cart" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot"}>
            <p>{totalQuantity}</p>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
