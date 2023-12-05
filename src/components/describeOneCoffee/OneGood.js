import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import darkBeans from "../../logo/Beans_logo_dark.svg";
import "./styles/aboutOneCoffee.css";

export default function AvoutOurCoffeeOne() {
  const { id } = useParams();
  const [infoAboutCoffee, setInfoAboutCoffee] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/goods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInfoAboutCoffee(data);
      });
  }, []);

  const { country, price, url, name } = infoAboutCoffee;

  return (
    <div className="mainContainerDescribe">
      {" "}
      <div className="aboutCoffeeContainerMain">
        <img src={url} alt="coffee" className="coffePicture" />
        <div className="aboutCoffeContainer">
          <h4 className="aboutCoffe">About it</h4>
          <img
            src={darkBeans}
            alt="coffeeBeans"
            className="coffeeBeansDarkAbout"
          />
          <h4 className="aboutCountry">
            <span>Name:</span> {name}
          </h4>
          <h4 className="aboutCountry">
            <span>Country:</span> {country}
          </h4>
          <h4 className="describeCoffee">
            <span> Description:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <h4 className="priceCoffeeOne">
            Price: <span>{price}$</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}
