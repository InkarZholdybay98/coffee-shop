import React from "react";
import coffeeGirl from "../../logo/images/coffee_girl.jpg";

import darkBeans from "../../logo/Beans_logo_dark.svg";
import "./styles/aboutBeans.css";

export default function AboutOurBeans() {
  return (
    <>
      {" "}
      <div className="aboutOurBeans">
        <img src={coffeeGirl} alt="" className="coffeeGirl" />
        <div className="infoAboutOurbeans">
          <h4>About our beans</h4>
          <img src={darkBeans} alt="" />
          <div>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
            <br /> <br />
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions.
            <br />
            As greatly removed calling pleased improve an.
            <br />
            Last ask him cold feel
            <br />
            met spot shy want. Children me laughing we prospect answered
            followed. At it went is song that held help face.
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
