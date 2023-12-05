import React, { useEffect, useState } from "react";
import "./styles/shopOurGoods.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ShopAboutGoods() {
  const [coffeInfo, setCoffeeInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/goods")
      .then((res) => res.json())
      .then((data) => setCoffeeInfo(data));
  }, []);

  return (
    <div className="mainGoodContainer">
      <div className="allTheCoffeeGood">
        {coffeInfo.map((coffee) => {
          const { name, url, weight, country, price, id } = coffee;
          return (
            <Link to={`/good/${id}`}>
              {" "}
              <div className="theOneCoffeGood">
                <div className="theOneCoffeImgGood">
                  <img src={url} alt="" className="coffeImgGood" />
                </div>

                <h3>
                  {name} {weight}kg
                </h3>
                <h4 className="coffeeCountryGood">{country}</h4>
                <h4 className="coffePriceGood">{price}$</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
