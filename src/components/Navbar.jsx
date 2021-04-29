import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [showItems, setShowItems] = useState(false);

  return (
    <nav>
      <div className="header">
        <h1>Make Notes</h1>
      </div>
      <div className="menu">
        <i
          className="fas fa-bars"
          onClick={() => {
            setShowItems(!showItems);
          }}
        ></i>
      </div>
      <ul className={showItems ? "show" : ""}>
        <li>Home</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
}

export default Navbar;
