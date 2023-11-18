import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPaneli.css";

export default function AdminPaneli() {
  const [urunler, setUrunler] = useState([]);
  const [showUrunList, setShowUrunList] = useState(false);
  const toggleUrunList = () => {
    setShowUrunList(!showUrunList);
  };
  const [formData, setFormData] = useState({
    id: "",
    urunAdi: "",
    aciklama: "",
    stok: "",
    fiyat: "",
    photo: "",
    photo2: "",
    kategoriId: "",
  });
  const [formData2, setFormData2] = useState({
    urunAdi: "",
    aciklama: "",
    stok: "",
    fiyat: "",
    photo: "",
    photo2: "",
    kategoriId: "",
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [urunSuccessMessage, setUrunSuccessMessage] = useState("");
  const [urunErrorMessage, setUrunErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [userSuccessMessage, setUserSuccessMessage] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    axios.get("https://localhost:7152/api/Urunler").then((response) => {
      setUrunler(response.data);
    });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`https://localhost:7152/api/Kullanicilar/${userId}`)
      .then(() => {
        setUserSuccessMessage("Kullanıcı başarıyla silindi!");
        setUsers(users.filter((user) => user.id !== userId));

        setTimeout(() => {
          setUserSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setUserErrorMessage("Kullanıcı silme hatası: " + error.message);

        setTimeout(() => {
          setUserErrorMessage("");
        }, 3000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePost = () => {
    const updatedUrun = {
      urunAdi: formData.urunAdi,
      aciklama: formData.aciklama,
      stok: parseInt(formData.stok),
      fiyat: parseFloat(formData.fiyat),
      photo: formData.photo,
      photo2: formData.photo2,
      kategori: {
        id: parseInt(formData.kategoriId),
        kategoriAdi: "string",
      },
    };

    axios
      .post(`https://localhost:7152/api/Urunler`, updatedUrun)
      .then((response) => {
        console.log("Ürün eklendi: ", response.data);
        setUrunSuccessMessage("Ürün ekleme başarılı!");

        setFormData2({
          urunAdi: "",
          aciklama: "",
          stok: "",
          fiyat: "",
          photo: "",
          photo2: "",
          kategoriId: "",
        });

        setTimeout(() => {
          setUrunSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Ürün ekleme hatası: ", error);
        setUrunErrorMessage("Ürün ekleme başarısız!");

        setTimeout(() => {
          setUrunErrorMessage("");
        }, 3000);
      });
  };

  const handleUpdate = () => {
    const id = formData.id;

    const updatedUrun = {
      id: parseInt(formData.id),
      urunAdi: formData.urunAdi,
      aciklama: formData.aciklama,
      stok: parseInt(formData.stok),
      fiyat: parseFloat(formData.fiyat),
      photo: formData.photo,
      photo2: formData.photo2,
      kategori: {
        id: parseInt(formData.kategoriId),
        kategoriAdi: "string",
      },
    };

    axios
      .put(`https://localhost:7152/api/Urunler/${id}`, updatedUrun)
      .then((response) => {
        console.log("Ürün güncellendi: ", response.data);
        setUrunSuccessMessage("Ürün güncelleme başarılı!");
        setFormData({
          id: "",
          urunAdi: "",
          aciklama: "",
          stok: "",
          fiyat: "",
          photo: "",
          photo2: "",
          kategoriId: "",
        });

        setTimeout(() => {
          setUrunSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Ürün güncelleme hatası: ", error);
        setUrunErrorMessage("Ürün güncelleme başarısız!");

        setTimeout(() => {
          setUrunErrorMessage("");
        }, 3000);
      });
  };

  const handleListUsers = () => {
    if (showUserList) {
      setShowUserList(false);
    } else {
      axios.get("https://localhost:7152/api/Kullanicilar").then((response) => {
        setUsers(response.data);
        setUserSuccessMessage("");
        setUserErrorMessage("");
        setShowUserList(true);
      });
    }
  };

  const handleDeleteUrun = (urunId) => {
    axios
      .delete(`https://localhost:7152/api/Urunler/${urunId}`)
      .then(() => {
        setUrunSuccessMessage("Ürün başarıyla silindi!");
        setUrunler(urunler.filter((urun) => urun.id !== urunId));

        setTimeout(() => {
          setUrunSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setUrunErrorMessage("Ürün silme hatası: " + error.message);

        setTimeout(() => {
          setUrunErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <div className="admincaps">
        <div className="butonlar">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setShowUpdateForm(!showUpdateForm)}
          >
            Ürün Ekle / Güncelle
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={toggleUrunList}
          >
            {showUrunList ? "Ürün Listesini Kapat" : "Ürün Listesini Aç"}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleListUsers}
          >
            Kullanıcıları Listele
          </button>
          <button type="button" className="btn btn-warning">
            Siparişleri görüntüle
          </button>
        </div>
      </div>
      {showUpdateForm && (
        <form className="sabit-form">
          <input
            type="text"
            name="id"
            placeholder="Ürün ID"
            value={formData.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="urunAdi"
            placeholder="Ürün Adı"
            value={formData.urunAdi}
            onChange={handleChange}
          />
          <input
            type="text"
            name="aciklama"
            placeholder="Açıklama"
            value={formData.aciklama}
            onChange={handleChange}
          />
          <input
            type="text"
            name="stok"
            placeholder="Stok"
            value={formData.stok}
            onChange={handleChange}
          />
          <input
            type="text"
            name="fiyat"
            placeholder="Fiyat"
            value={formData.fiyat}
            onChange={handleChange}
          />
          <input
            type="text"
            name="photo"
            placeholder="Fotoğraf URL"
            value={formData.photo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="photo2"
            placeholder="Fotoğraf URL2"
            value={formData.photo2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="kategoriId"
            placeholder="Kategori ID"
            value={formData.kategoriId}
            onChange={handleChange}
          />
          <button type="button" onClick={handleUpdate}>
            Ürün Güncelle
          </button>{" "}
          <button type="button" onClick={handlePost}>
            Ürün Ekle
          </button>{" "}
          <br />
          <br />
          {urunSuccessMessage && <div id="success2">{urunSuccessMessage}</div>}
          {urunErrorMessage && <div id="error2">{urunErrorMessage}</div>} <br />
          <br />
        </form>
      )}
      {showUrunList && (
        <div className="urun-listesi">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ürün Adı</th>
                <th>Açıklama</th>
                <th>Stok</th>
                <th>Fiyat</th>
                <th>Fotoğraf</th>
                <th>Fotoğraf 2</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {urunler.map((urun) => (
                <tr key={urun.id}>
                  <td>{urun.id}</td>
                  <td>{urun.urunAdi}</td>
                  <td>{urun.aciklama}</td>
                  <td>{urun.stok}</td>
                  <td>{urun.fiyat}</td>
                  <td>
                    <img
                      src={urun.photo}
                      alt={urun.urunAdi}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <img
                      src={urun.photo2}
                      alt={urun.urunAdi}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUrun(urun.id)}>
                      Ürünü Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showUserList && (
        <div className="user-list">
          {userSuccessMessage && <div id="success2">{userSuccessMessage}</div>}
          {userErrorMessage && <div id="error2">{userErrorMessage}</div>}
          <table id="tablo">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Email</th>
                <th>Şifre</th>
                <th>Kullanıcı Adı</th>
                <th>Adres</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.ad}</td>
                  <td>{user.soyad}</td>
                  <td>{user.email}</td>
                  <td>{user.sifre}</td>
                  <td>{user.kullaniciAdi}</td>
                  <td>{user.adres}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>
                      Kullanıcıyı Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
