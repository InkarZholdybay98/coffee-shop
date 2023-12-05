import React from "react";
import darkCoffeeBeans from "../logo/coffee-beansDark.svg";
import "./styles/footerCommon.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import beansLogoDark from "../logo/Beans_logo_dark.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img src={darkCoffeeBeans} alt="" />
        <div className="footerLinks">
          <Link to="/">Coffee house</Link>
          <Link to="/ourcoffee">
            <p>Our coffee</p>
          </Link>
          <Link to="/pleaure">
            <p>For your pleasure</p>
          </Link>
        </div>
      </div>
      <div className="divImgDark">
        <img src={beansLogoDark} alt="" className="beansLogoDark" />
      </div>
    </>
  );
}
