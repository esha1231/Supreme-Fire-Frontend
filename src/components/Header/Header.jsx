import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        
        <h2>Order your fire safety equipments here</h2>
        <p>
        Protect your home and loved ones with our top-quality fire safety equipment. Shop now and ensure you're prepared for any emergency with the best in fire protection!
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
