import React from "react";
import "./styles/navbar.css";

import logoBeans from "../../logo/Beans_logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <div className="container">
      <Navbar />
      <div className="header">
        <h1 className="title-big">Everything You Love About Coffee</h1>
        <img src={logoBeans} alt="coffebeans" className="coffeBeansLogo" />
        <div className="preview__subtitle">
          We makes every day full of energy and taste
        </div>
        <div className="wantToTry">Want to try our beans?</div>
        <Link to="/ourcoffee">
          <button className="more"> More</button>
        </Link>
      </div>
    </div>
  );
}
