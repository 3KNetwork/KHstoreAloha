import React from "react";
import "./Circle.css";
import Aksesuar from "./Circleimages/Aksesuar.jpeg";
import Beyazesya from "./Circleimages/Beyazesya.jpeg";
import Bilgisayar from "./Circleimages/Bilgisayar.jpeg";
import Kisiselbakım from "./Circleimages/Kisiselbakım.jpeg";
import Klima from "./Circleimages/Klima.jpeg";
import Kucukevaletleri from "./Circleimages/Kucukevaletleri.jpeg";
import Telefon from "./Circleimages/Telefon.jpeg";
import Televizyon from "./Circleimages/Televizyon.jpeg";
import { Link } from "react-router-dom";

export default function Circle() {
  return (
    <div id="cembers">
      <div className="circlewrap">
        <div className="circles" href="">
          <Link to="/Aksesuarlar">
            <img src={Aksesuar} alt="" />
          </Link>{" "}
          <br />
          <h6>Aksesuarlar</h6>
        </div>

        <div className="circles" href="">
          <Link to="/BeyazEşya">
            <img src={Beyazesya} alt="" />
          </Link>
          <h6>Beyaz Eşya</h6>
        </div>

        <div className="circles" href="">
          <Link to="/Bilgisayarlar">
            {" "}
            <img src={Bilgisayar} alt="" />
          </Link>
          <h6>Bilgisayarlar</h6>
        </div>

        <div className="circles" href="">
          <Link to="/KişiselBakım">
            {" "}
            <img src={Kisiselbakım} alt="" />
          </Link>
          <h6>Kişisel Bakım</h6>
        </div>

        <div className="circles" href="">
          <Link to="/İklimlendirme">
            {" "}
            <img src={Klima} alt="" />
          </Link>
          <h6>İklimlendirme</h6>
        </div>

        <div className="circles" href="">
          <Link to="/KüçükEvAletleri">
            {" "}
            <img src={Kucukevaletleri} alt="" />
          </Link>
          <h6>Ev Aletleri</h6>
        </div>

        <div className="circles" href="">
          <Link to="/Telefonlar">
            {" "}
            <img src={Telefon} alt="" />
          </Link>
          <h6>Telefonlar</h6>
        </div>

        <div className="circles" href="">
          <Link to="/Televizyonlar">
            <img src={Televizyon} alt="" />
          </Link>
          <h6>Televizyon</h6>
        </div>
      </div>
    </div>
  );
}
