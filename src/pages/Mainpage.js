import React from "react";

import AboutUs from "../components/home/AboutUs";
import OurBest from "../components/home/OurBest";
import Footer from "../components/Footer";
import Header from "../components/home/Header";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurBest />
    </div>
  );
}
