import React from "react";
import logo from "../logo/Logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/commonNavbar.css";
import logo1 from "../logo/coffee-beans.svg";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <img src={logo1} alt="" />
      <div className="navbarAll">
        {" "}
        <Link to="/">
          {" "}
          <div className="logoName">
            <p>Coffee house</p>
          </div>
        </Link>
        <Link to="/ourcoffee">
          {" "}
          <p>Our coffee</p>
        </Link>
        <Link to="/pleaure">
          <p>For your pleasure</p>
        </Link>
      </div>
    </div>
  );
}
