import React, { useEffect, useState } from "react";
import "./styles/coffeshop.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CoffeShop() {
  const [coffeInfo, setCoffeeInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffeeInfo(data));
  }, []);

  return (
    <>
      <div className="containerCoffeShop">
        <div className="searchCoffee">
          <div className="searchInput">
            {" "}
            <label htmlFor="">Looking for</label>
            <input
              type="text"
              placeholder="      start typing here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <h3> Or filter</h3>

          <div className="filterBtns">
            <button
              style={{
                fontWeight: countries.includes("Brazil") ? "700" : "normal",
              }}
              onClick={() => {
                if (countries.includes("Brazil")) {
                  setCountries([
                    ...countries.filter((country) => country !== "Brazil"),
                  ]);
                } else {
                  setCountries([...countries, "Brazil"]);
                }
              }}
            >
              Brazil
            </button>
            <button
              style={{
                fontWeight: countries.includes("Kenya") ? "700" : "normal",
              }}
              onClick={() => {
                if (countries.includes("Kenya")) {
                  setCountries([
                    ...countries.filter((country) => country !== "Kenya"),
                  ]);
                } else {
                  setCountries([...countries, "Kenya"]);
                }
              }}
            >
              Kenya
            </button>
            <button
              style={{
                fontWeight: countries.includes("Columbia") ? "800" : "normal",
              }}
              onClick={() => {
                if (countries.includes("Columbia")) {
                  setCountries([
                    ...countries.filter((country) => country !== "Columbia"),
                  ]);
                } else {
                  setCountries([...countries, "Columbia"]);
                }
              }}
            >
              Columbia
            </button>
          </div>
        </div>
      </div>

      <div className="containerAllTheCoffee">
        <div className="allTheCoffee">
          {coffeInfo
            .filter((coffee) =>
              countries.length > 0 ? countries.includes(coffee.country) : coffee
            )
            .filter((coffee) =>
              inputValue === ""
                ? coffee
                : coffee.name.toLowerCase().includes(inputValue)
            )
            .map((coffee) => {
              const { name, url, weight, country, price, id } = coffee;
              return (
                <Link to={`/coffeshop/${id}`}>
                  {" "}
                  <div className="theOneCoffe">
                    <div className="imgOneCoffee">
                      <img src={url} alt="coffeImg" />
                    </div>

                    <h3>
                      {name} {weight}kg
                    </h3>
                    <h4 className="coffeeCountry">{country}</h4>
                    <h4 className="coffePrice">{price}$</h4>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
