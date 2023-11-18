import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Pdetail.css";
import Swal from "sweetalert2";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios
      .get(`https://localhost:7152/api/Urunler/${id}`)
      .then((response) => {
        const productData = response.data;
        setProduct(productData);
        setSelectedImage(productData.photo);
      })
      .catch((error) => {
        console.error("API çağrısı başarısız oldu:", error);
      });
  }, [id]);

  const sepeteEkle = () => {
    const sepetUrun = {
      id: product.id,
      urunAdi: product.urunAdi,
      fiyat: product.fiyat,
      photo: product.photo,
      adet: quantity,
    };
    const existingSepet = JSON.parse(localStorage.getItem("sepet")) || [];
    const existingUrun = existingSepet.find((urun) => urun.id === sepetUrun.id);

    if (existingUrun) {
      existingUrun.adet += quantity;
    } else {
      existingSepet.push(sepetUrun);
    }

    localStorage.setItem("sepet", JSON.stringify(existingSepet));

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Ürün Sepete Eklendi!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const changeImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const favoriEkle = () => {
    setIsFavorite(!isFavorite);
    const favoriEkleButton = document.getElementById("favoriEkle");
    favoriEkleButton.style.color = isFavorite ? "warning" : "#000000";
  };

  return (
    <div>
      <br />
      <br />
      <div id="detail">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="product_container">
          <div className="sidebar product_slides slide_border">
            <img
              src={product.photo}
              alt=""
              className="product_slides-item slide_images slide_option slide_image_color inline-photo2 show-on-scroll2"
              onClick={() => changeImage(product.photo)}
            />
            <img
              src={product.photo2}
              alt=""
              className="product_slides-item slide_images slide_option inline-photo2 show-on-scroll2"
              onClick={() => changeImage(product.photo2)}
            />
          </div>
          <div
            id="Slide1"
            className="Slider_Container SLider_border Product_tumbnail animate"
          >
            <img src={selectedImage} alt="" width={450} />
          </div>
          <div className="details">
            <h1 className="title">{product.urunAdi}</h1>
            <span className="price  " style={{ fontSize: 35 }}>
              ₺{product.fiyat}
            </span>
            <div className="star-ratings-css">
              <div className="star-ratings-css-top">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="star-ratings-css-bottom">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <br />
            <br />
            <p style={{ fontSize: 28 }}>{product.aciklama}</p>
            <ul className="sub-details">
              <li style={{ fontSize: 20 }}>
                <i className="fa fa-shield fa-2xl" /> Güvenli Ödeme
              </li>
              <li style={{ fontSize: 20 }}>
                <i className="fa fa-truck" /> Şimdi Al Yarın Kapında
              </li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <td id="tabloo">
                    <form action="URL">
                      <label htmlFor="">Adet&nbsp;&nbsp;</label>
                      <select
                        name="Media"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        &nbsp;
                        <Link
                          to={`/urun/${product.id}`}
                          className="btn btn-outline"
                          id="favoriEkle"
                          onClick={favoriEkle}
                        >
                          <i
                            className={`fa-solid fa-heart fa-2xl${
                              isFavorite ? " favorite" : ""
                            }`}
                            style={{
                              color: isFavorite ? "orange" : "#000000",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              favoriEkle();
                              const favoriBildirimi =
                                document.getElementById("favoriBildirimi");
                              favoriBildirimi.style.display = "block";
                              setTimeout(() => {
                                favoriBildirimi.style.display = "none";
                              }, 1500);
                            }}
                          />
                          &nbsp;
                          <span
                            style={{ color: isFavorite ? "orange" : "#000000" }}
                          >
                            &nbsp;Favorilere Ekle
                          </span>
                        </Link>
                      </span>
                    </form>
                    <br />
                    <button className="btn2" onClick={sepeteEkle}>
                      <b>SEPETE EKLE</b>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
