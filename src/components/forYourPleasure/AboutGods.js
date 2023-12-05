import React from "react";

import coffeCup from "../../logo/images/coffee-839233_1920.png";
import "./styles/aboutGoods.css";

import darkCoffeeBeans from "../../logo/Beans_logo_dark.svg";

export default function AboutGods() {
  return (
    <>
      <div className="aboutGoodsMainContainer">
        <div className="aboutGoodContainer">
          <img src={coffeCup} alt="" className="coffeCup" />
          <div className="aboutGoodInfo">
            <h4>About our goods</h4>
            <img src={darkCoffeeBeans} alt="" />
            <div>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions.
              <br />
              As greatly removed calling pleased improve an. <br /> Last ask him
              cold feel <br /> met spot shy want. Children me laughing we
              prospect answered followed. At it went is song that held help
              face.
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
    </>
  );
}
