import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/ourBest.css";
import solimo from "../../logo/images/solimo.png";

export default function OurBest() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bestsellers")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

  return (
    <div className="ourBestContainer">
      <h2 className="title">Our best</h2>
      <div className="typesOfCoffee">
        {coffee.map((cof) => {
          const { url, name, price, weight, id } = cof;

          return (
            <Link to={`/about/${id}`}>
              <div className="oneCoffe" key={id}>
                <div className="imgDiv">
                  <img src={url} alt="coffeeImg" />
                </div>

                <h4 className="nameWeightCoffee">
                  {name} {weight}kg
                </h4>
                <h4 className="priceCoffee">{price}$</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
