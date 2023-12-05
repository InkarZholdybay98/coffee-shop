import React from "react";
import "./styles/headerPleasure.css";

import Navbar from "../Navbar";

export default function HeaderPleasure() {
  return (
    <div className="containerHeaderAboutGoods">
      <Navbar />
      <h1 className="pleasureHeader">For your pleasure</h1>
    </div>
  );
}
