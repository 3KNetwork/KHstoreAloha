import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (isValidEmail(email)) {
      Swal.fire({
        icon: "success",
        title: "Emailiniz abonelik sistemize kaydedildi.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Geçersiz email",
        text: "Lütfen geçerli bir email adresi giriniz.",
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <>
        <hr />
        <footer className=" text-center " id="scrollspyHeading1">
          <div className="container p-4">
            <section className="mb-4">
              <h3>
                <b>Bizimle İletişimde Kalın </b>
              </h3>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-warning btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </section>
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>
                        Yeniliklerden haberdar olmak için abone olun:
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example21"
                        placeholder="E-posta giriniz"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-warning mb-4"
                      onClick={handleClick}
                    >
                      Abone Ol
                    </button>
                  </div>
                </div>
              </form>
            </section>
            <div className="ftp">
              <div className="solution-center">
                <br />
                <br />
                <h4>
                  Aklınıza takılan bir soru mu var?
                  <br />
                </h4>
                <br />
                <i className="fa-solid fa-phone" /> &nbsp;
                <span>7/24 Bize Sorun</span>
                <br />
                <br />
                <Link style={{ textDecoration: "none" }} to="">
                  <h2>0850 777 00 00</h2>
                </Link>
                <br />
                <br />
                <a
                  className="whatsapp-ft"
                  href="https://web.whatsapp.com/send?phone=905422475299"
                  rel="nofollow"
                  style={{
                    width: "160px",
                    display: "block",
                    margin: "auto",
                    position: "relative",
                    "padding-left": "25px",
                    color: "#484848",
                  }}
                  target="_blank"
                >
                  <span style={{ "font-weight": "500", "font-size": "14px" }}>
                    WhatsApp Destek
                  </span>
                  <svg
                    height={24}
                    style={{
                      "max-width": "100%",
                      display: "block",
                      position: "absolute",
                      left: "0",
                      top: "0",
                    }}
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 .09C5.408.09.05 5.408 0 12a11.74 11.74 0 002.14 6.77l-1.35 4a.5.5 0 00.12.51.51.51 0 00.51.13l4.2-1.33A12 12 0 0024 12C23.95 5.408 18.592.09 12 .09zm7.2 16.72a3.91 3.91 0 01-3.5 2.09 10.71 10.71 0 01-3.45-1 14 14 0 01-5.95-5.16c-1.91-2.53-2-4.9-.16-6.86A2.17 2.17 0 018 5.32a1.54 1.54 0 011.21.87l.38.92.63 1.51a1.1 1.1 0 010 1 5.14 5.14 0 01-1 1.37 12.41 12.41 0 001.79 2.15 9.06 9.06 0 002.73 1.63c.28-.36.83-1 1-1.27a1 1 0 011.34-.36c.38.14 2.51 1.18 2.51 1.18.27.092.507.262.68.49a2 2 0 01-.07 2z"
                      fill="#25D366"
                    />
                  </svg>
                </a>
              </div>
              <div className="appLink">
                <br />
                <h4>Mobil Uygulamalar</h4>
                <br />
                <Link to="https://www.apple.com/tr/app-store/">
                  {" "}
                  <img
                    width={200}
                    src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli_2.png"
                    alt=""
                  />
                </Link>
                <br />
                <Link to="https://play.google.com/store/apps?hl=tr&gl=US">
                  <img
                    width={200}
                    style={{ marginTop: "7%" }}
                    src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli_2.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>{" "}
            <br />
            <br />
            <section className="mb-4">
              <p>
                <div className="footer-bank-logos">
                  <img
                    height={12}
                    loading="lazy"
                    src="http://bit.ly/bonussz"
                    width={90}
                  />
                  <img
                    height={16}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/maximum-new.svg"
                    width={90}
                  />
                  <img
                    height={18}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/world-new.svg"
                    width={90}
                  />
                  <img
                    height={17}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/ziraat-new.svg"
                    width={90}
                  />
                  <img
                    height={11}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/finans-new.svg"
                    width={90}
                  />
                  <img
                    height={13}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/axess-new-3.svg"
                    width={90}
                  />
                  <img
                    height={12}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/advantage-new.svg"
                    width={90}
                  />
                  <img
                    height={20}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/paraf-new.svg"
                    width={90}
                  />
                  <img
                    height={18}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/visa.svg"
                    width={90}
                  />
                  <img
                    height={19}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/mastercard.svg"
                    width={90}
                  />
                  <img
                    height={28}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/ae.svg"
                    width={50}
                  />
                  <img
                    height={21}
                    loading="lazy"
                    src="https://images.hepsiburada.net/assets/footer-sf/troy.svg"
                    width={90}
                  />
                </div>
              </p>
            </section>
            <section className=""></section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright: KHStore.com
          </div>
        </footer>
      </>
    </div>
  );
}
