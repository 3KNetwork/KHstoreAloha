import React, { useEffect, useState } from "react";
import "./Cart.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Cart() {
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    const storedSepet = JSON.parse(localStorage.getItem("sepet")) || [];
    setSepet(storedSepet);
  }, []);

  const isSepetBos = sepet.length === 0;

  const calculateTotal = () => {
    let total = 0;
    for (const urun of sepet) {
      total += urun.fiyat * urun.adet;
    }
    return total.toFixed(2);
  };

  const urunSil = (urunId) => {
    const existingSepet = JSON.parse(localStorage.getItem("sepet")) || [];

    const updatedSepet = existingSepet.filter((urun) => urun.id !== urunId);

    localStorage.setItem("sepet", JSON.stringify(updatedSepet));

    Swal.fire({
      position: "top-center",
      icon: "info",
      title: "Ürün Silindi!",
      showConfirmButton: false,
      timer: 1500,
    });

    setSepet(updatedSepet);
  };

  const sepetiBosalt = () => {
    localStorage.removeItem("sepet");

    setSepet([]);

    Swal.fire({
      position: "top-center",
      icon: "info",
      title: "Sepet Temizlendi!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div id="cart">
      <div>
        <button
          id="rmv"
          className="btn btn-outline-danger d-flex "
          onClick={sepetiBosalt}
        >
          Sepeti Boşalt
        </button>
        <h1>
          <b>Sepetim</b>
        </h1>
        {isSepetBos ? (
          <div className="sepet-bos-mesaj">
            <h1 className=" w-50 m-auto">
              <img
                className="mb-5"
                src="https://shop.erdalgomlek.com.tr/images/bos-sepet.png"
                alt=""
              />
            </h1>
            <br />
            <br />
          </div>
        ) : (
          <div className="shopping-cart">
            <div className="column-labels">
              <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">
                  <b>Fiyat</b>
                </label>
                <label className="product-removal">
                  <b>İşlem</b>
                </label>
                <label className="product-quantity">Adet</label>
                <label className="product-total">Toplam</label>
              </div>
            </div>
            {sepet.map((urun) => (
              <div className="product" key={urun.id}>
                <div className="product-image">
                  <img src={urun.photo} alt={urun.urunAdi} />
                </div>
                <div className="product-details">
                  <div className="product-title">{urun.urunAdi}</div>
                  <p className="product-description">{urun.aciklama}</p>
                </div>

                <div className="product-line-price">₺{urun.fiyat}</div>

                <div className="product-removal">
                  <button
                    className="btn btn-danger"
                    onClick={() => urunSil(urun.id)}
                  >
                    ÜRÜN SİL
                  </button>
                </div>
                <div className="product-quantity">
                  <p>{urun.adet}</p>
                </div>
                <div className="product-total">
                  ₺{(urun.fiyat * urun.adet).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="totals">
              <div className="totals-item">
                <label>Ara Toplam</label>
                <div className="totals-value" id="cart-subtotal">
                  ₺{calculateTotal()}
                </div>
              </div>
              <div className="totals-item">
                <label>Kargo Ücreti</label>
                <div className="totals-value" id="cart-shipping">
                  ₺15.00
                </div>
              </div>
              <div className="totals-item totals-item-total">
                <label>TOPLAM</label>
                <div className="totals-value" id="cart-total">
                  ₺{(parseFloat(calculateTotal()) + 15.0).toFixed(2)}
                </div>
              </div>
            </div>
            <Link to="/pay">
              <button className="checkout">ÖDEME YAP</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
