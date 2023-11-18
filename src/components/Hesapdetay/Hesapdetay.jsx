import React, { useState, useEffect } from "react";
import "./Hesapdetay.css";
import axios from "axios";

function Info({
  kullaniciAdi,
  kullaniciIsmi,
  kullaniciSoyisim,
  kullaniciAdres,
  kullaniciEmail,
  kullaniciSifre,
  userId,
}) {
  const [user, setUser] = useState({});
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updatedAdres, setUpdatedAdres] = useState("");
  const [updatedAd, setUpdatedAd] = useState("");
  const [updatedSoyad, setUpdatedSoyad] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateAdres = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7152/api/Kullanicilar/${userId}`,
        {
          id: userId,
          kullaniciAdi: kullaniciAdi,
          ad: kullaniciIsmi,
          soyad: kullaniciSoyisim,
          email: kullaniciEmail,
          sifre: kullaniciSifre,
          adres: updatedAdres,
        }
      );
      console.log("Adres güncelleme başarılı:", response.data);
      setSuccessMessage("Güncelleme işlemi başarılı");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Adres güncelleme hatası:", error);
      setErrorMessage("Güncelleme işlemi başarısız");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleUpdateAd = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7152/api/Kullanicilar/${userId}`,
        {
          id: userId,
          kullaniciAdi: kullaniciAdi,
          soyad: kullaniciSoyisim,
          email: kullaniciEmail,
          sifre: kullaniciSifre,
          adres: kullaniciAdres,
          ad: updatedAd,
        }
      );
      console.log("Ad güncelleme başarılı:", response.data);
      setSuccessMessage("Güncelleme işlemi başarılı");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Ad güncelleme hatası:", error);
      setErrorMessage("Güncelleme işlemi başarısız");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleUpdateSoyad = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7152/api/Kullanicilar/${userId}`,
        {
          id: userId,
          kullaniciAdi: kullaniciAdi,
          ad: kullaniciIsmi,
          adres: kullaniciAdres,
          email: kullaniciEmail,
          sifre: kullaniciSifre,
          soyad: updatedSoyad,
        }
      );
      console.log("Soyad güncelleme başarılı:", response.data);
      setSuccessMessage("Güncelleme işlemi başarılı");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Soyad güncelleme hatası:", error);
      setErrorMessage("Güncelleme işlemi başarısız");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleInfo = (userid) => {
    axios
      .get(`https://localhost:7152/api/Kullanicilar/${userid}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (userId) {
      handleInfo(userId);
    }
  }, [userId]);

  return (
    <div id="info">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3" style={{ marginBottom: "4%" }}>
                      <h4>{kullaniciIsmi + " " + kullaniciSoyisim}</h4>
                      <p className="text-secondary mb-1">
                        Kullanıcı ID: {userId}
                      </p>
                      <br />
                      <button className="btn btn-outline-success">
                        Siparişlerim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">İsim Soyisim</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {kullaniciIsmi + " " + kullaniciSoyisim}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Kullanıcı Adı</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {kullaniciAdi}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Adres</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {kullaniciAdres}
                    </div>
                  </div>
                  <hr />
                  <br />
                  <div className="row">
                    <button
                      className="btn btn-info"
                      onClick={() => setIsUpdateOpen(!isUpdateOpen)}
                    >
                      {isUpdateOpen
                        ? "Güncelleme Alanını Kapat"
                        : "Güncelleme Alanını Aç"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isUpdateOpen && (
        <div id="kullanicigüncel">
          <input
            type="text"
            placeholder="Yeni Ad"
            value={updatedAd}
            onChange={(e) => setUpdatedAd(e.target.value)}
            className="update-input"
          />
          <button
            className="btn btn-success update-button"
            onClick={handleUpdateAd}
          >
            Adı Güncelle
          </button>
          <br />
          <br />

          <input
            type="text"
            placeholder="Yeni Soyad"
            value={updatedSoyad}
            onChange={(e) => setUpdatedSoyad(e.target.value)}
            className="update-input"
          />
          <button
            className="btn btn-success update-button"
            onClick={handleUpdateSoyad}
          >
            Soyadı Güncelle
          </button>
          <br />
          <br />

          <input
            type="text"
            placeholder="Yeni Adres"
            value={updatedAdres}
            onChange={(e) => setUpdatedAdres(e.target.value)}
            className="update-input"
          />
          <button
            className="btn btn-success update-button"
            onClick={handleUpdateAdres}
          >
            Adresi Güncelle
          </button>
        </div>
      )}

      {successMessage && (
        <div className="success-message21">{successMessage}</div>
      )}

      {errorMessage && <div className="error-message21">{errorMessage}</div>}
    </div>
  );
}

export default Info;
