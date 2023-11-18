import React from "react";
import Slider from "../../components/Slider/Slider";
import Circle from "../Circle/Circle";
import Products from "../Products/Products";
import Popup from "../Popup/Popup";
import Topsell from "../Topsell/Topsell";
import Banner from "../Banner/Banner";

export default function Home() {
  return (
    <div>
      <Slider />
      <Circle />
      <Topsell />
      <Banner />
      <Products />
      <Popup />
    </div>
  );
}
