import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Signin({
  isLoggedIn,
  setIsLoggedIn,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
  kullaniciAdi,
  setkullaniciAdi,
  kullaniciIsmi,
  setkullaniciIsmi,
  kullaniciSoyisim,
  setkullaniciSoyisim,
  kullaniciAdres,
  setkullaniciAdres,
  kullaniciEmail,
  setkullaniciEmail,
  kullaniciSifre,
  setkullaniciSifre,
  userId,
  setUserId,
}) {
  const [signInUserData, setSignInUserData] = useState({
    Email: "",
    Sifre: "",
  });

  const [signUpUserData, setSignUpUserData] = useState({
    Email: "",
    KullaniciAdi: "",
    Sifre: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const togglePanel = () => {
      container.classList.toggle("right-panel-active");
    };

    signUpButton.addEventListener("click", togglePanel);
    signInButton.addEventListener("click", togglePanel);

    return () => {
      signUpButton.removeEventListener("click", togglePanel);
      signInButton.removeEventListener("click", togglePanel);
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { Email, KullaniciAdi, Sifre } = signUpUserData;

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
      const hasTurkishCharacters = /[ğüşöçıİĞÜŞÖÇ]/.test(Email);

      if (!isValidEmail || hasTurkishCharacters) {
        setError(
          <p
            className="border border-danger rounded-pill border-3"
            style={{ fontWeight: "500" }}
          >
            <b>
              &nbsp;&nbsp;Email geçerli değil veya Türkçe karakter
              içeriyor.&nbsp;&nbsp;
            </b>
          </p>
        );
        setSuccessMessage("");
        return;
      }

      const dataToSend = {
        Email,
        KullaniciAdi,
        Sifre,
      };

      const response = await axios.post(
        "https://localhost:7152/api/Kullanicilar",
        dataToSend
      );

      console.log("Başarılı kayıt işlemi:", response.data);

      setError("");
      setSuccessMessage(
        <p
          className="border border-success rounded-pill border-3"
          style={{ fontWeight: "500" }}
        >
          <b>&nbsp;&nbsp; Başarılı bir şekilde kaydoldunuz!&nbsp;&nbsp;</b>
        </p>
      );

      setSignUpUserData({
        Email: "",
        KullaniciAdi: "",
        Sifre: "",
      });
    } catch (error) {
      console.error("Kayıt sırasında bir hata oluştu:", error);

      if (error.response && error.response.status === 400) {
        setError(
          <p
            className="border border-danger rounded-pill border-3"
            style={{ fontWeight: "500" }}
          >
            <b>
              &nbsp;&nbsp;Email ya da Kullanıcı Adı daha önce
              kullanılmış&nbsp;&nbsp;
            </b>
          </p>
        );
      } else {
        setError("Bir hata oluştu.");
      }

      setSuccessMessage("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { Email, Sifre } = signInUserData;

      const dataToSend = {
        Email,
        Sifre,
      };

      const response = await axios.post(
        "https://localhost:7152/api/Kullanicilar/giris",
        dataToSend
      );
      const user = response.data;

      if (user.isAdmin) {
        setIsAdminLoggedIn(true);
      } else {
        setIsAdminLoggedIn(false);
      }

      const userId = parseInt(user.userId);
      const kullaniciAdi = user.kullaniciAdi;
      const kullaniciIsmi = user.kullaniciIsmi;
      const kullaniciSoyisim = user.kullaniciSoyisim;
      const kullaniciAdres = user.kullaniciAdres;
      const kullaniciEmail = user.kullaniciEmail;
      const kullaniciSifre = user.kullaniciSifre;
      setkullaniciAdi(kullaniciAdi);
      setkullaniciIsmi(kullaniciIsmi);
      setkullaniciSoyisim(kullaniciSoyisim);
      setkullaniciAdres(kullaniciAdres);
      setkullaniciEmail(kullaniciEmail);
      setkullaniciSifre(kullaniciSifre);

      setUserId(userId);

      setIsLoggedIn(true);

      console.log(kullaniciAdi);

      console.log("Başarılı giriş işlemi", response.data);

      setError("");
    } catch (error) {
      console.error("Giriş sırasında bir hata oluştu:", error);

      if (error.response && error.response.status === 400) {
        setError(
          <p
            className="border border-danger rounded-pill border-3"
            style={{ fontWeight: "500" }}
          >
            <b>&nbsp;&nbsp;Email ya da şifre yanlış.&nbsp;&nbsp;</b>
          </p>
        );
      } else {
        setError(
          <p
            className="border border-danger rounded-pill border-3"
            style={{ fontWeight: "500" }}
          >
            <b>&nbsp;&nbsp;Email ya da Şifre hatalı&nbsp;&nbsp;</b>
          </p>
        );
      }

      setSuccessMessage("");
      return;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (e.target.form.id === "signInForm") {
      setSignInUserData({
        ...signInUserData,
        [name]: value,
      });
    } else {
      setSignUpUserData({
        ...signUpUserData,
        [name]: value,
      });
    }
  };

  return (
    <div id="sign" style={{ margin: "200px auto" }}>
      <div className="container" id="container">
        <div className="form-container sign-up-container text-dark">
          <form id="signUpForm" onSubmit={handleSignUp}>
            <h1>Hesap Oluştur</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
            <span>ya da kayıt için email kullan</span>
            <input
              type="text"
              name="KullaniciAdi"
              placeholder="Kullanıcı Adı"
              value={signUpUserData.KullaniciAdi}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={signUpUserData.Email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="Sifre"
              placeholder="Şifre"
              value={signUpUserData.Sifre}
              onChange={handleInputChange}
            />
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            <button onClick={handleSignUp}>Kayıt Ol</button>
          </form>
        </div>
        <div className="form-container sign-in-container text-dark">
          <form id="signInForm" onSubmit={handleLogin}>
            <h1>Giriş Yap</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
            <span>Zaten Hesabım Var</span>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={signInUserData.Email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="Sifre"
              placeholder="Şifre"
              value={signInUserData.Sifre}
              onChange={handleInputChange}
            />
            {error && <div className="error">{error}</div>}
            <a href="#">Şifremi Unuttum</a>
            <button type="submit">Giriş Yap</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hoşgeldin!</h1>
              <p>
                Bizimle İletişimde Kalabilmek İçin Lütfen Kişisel Bilgilerinize
                Erişin
              </p>
              <button className="ghost" id="signIn">
                Giriş Yap
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Merhaba Dostum!</h1>
              <p>
                Kişisel Bilgilerinizi Girin ve Bizimle Birlikte Yolculuğa
                Başlayın
              </p>
              <button className="ghost" id="signUp">
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
