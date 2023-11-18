import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Nightmode from "./Nightmode";
import { Link, useNavigate } from "react-router-dom";
import SearchResultList from "../Searchbar/SearchResultList";
import SearchBar from "../Searchbar/SearchBarr";

export default function Navbar({
  isLoggedIn,
  isAdminLoggedIn,
  userId,
  kullaniciAdi,
}) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/");
    window.location.reload();
  }
  console.log(kullaniciAdi);
  useEffect(() => {
    console.log("Navbar'da kullaniciAdi:", kullaniciAdi);
  }, [kullaniciAdi]);

  return (
    <div id="nav-caps">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="search-bar-container">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultList results={results} setResults={setResults} />
              )}
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-4">
              {isAdminLoggedIn ? (
                <div class="dropdown">
                  <button className="nav-link" data-bs-toggle="dropdown">
                    <i
                      className="fa-solid fa-user fa-xl"
                      style={{ color: "#FFB900" }}
                    />{" "}
                    <b>Admin Paneli</b>
                  </button>

                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        style={{ textAlign: "center" }}
                        class="dropdown-item"
                        to="/adminpaneli"
                      >
                        Admin Sayfası
                      </Link>
                    </li>
                    <li style={{ textAlign: "center", marginTop: "10px" }}>
                      <button
                        id="logout-button"
                        type="button"
                        class="btn btn-danger"
                        onClick={() => handleLogout()}
                      >
                        Çıkış yap
                      </button>
                    </li>
                  </ul>
                </div>
              ) : isLoggedIn ? (
                <div class="dropdown">
                  <button className="nav-link" data-bs-toggle="dropdown">
                    <i
                      className="fa-solid fa-user fa-xl"
                      style={{ color: "#FFB900" }}
                    />{" "}
                    <b>
                      <span>{kullaniciAdi}</span>
                    </b>
                  </button>

                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        style={{ textAlign: "center" }}
                        class="dropdown-item"
                        to="/hesabim"
                      >
                        Hesap detayları
                      </Link>
                    </li>
                    <li style={{ textAlign: "center", marginTop: "10px" }}>
                      <button
                        id="logout-button"
                        type="button"
                        class="btn btn-danger"
                        onClick={() => handleLogout()}
                      >
                        Çıkış yap
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    <i
                      className="fa-solid fa-user fa-xl"
                      style={{ color: "#FFB900" }}
                    />{" "}
                    <b>Giriş Yap</b>
                  </Link>
                </li>
              )}

              <li class="nav-item">
                <a class="nav-link" href="#scrollspyHeading1">
                  <strong>İletişim</strong>
                </a>
              </li>

              <li class="nav-item dropdown" id="myDropdown2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <strong>Kategoriler</strong>
                </a>
                <ul
                  id="droplar2"
                  class="dropdown-menu"
                  aria-labelledby="myDropdown2"
                >
                  <li>
                    <Link class="dropdown-item" to="/giyim">
                      Giyim
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Aksesuarlar">
                      Aksesuarlar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Telefonlar">
                      Telefonlar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/İklimlendirme">
                      Klimalar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/KüçükEvAletleri">
                      Ev Aletleri
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Bilgisayarlar">
                      Bilgisayarlar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Televizyonlar">
                      Televizyonlar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/BeyazEşya">
                      Beyaz Eşyalar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/KişiselBakım">
                      Kişisel kullanım ürünleri
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-4">
                <Link to="/cart">
                  <button class="btn" type="button">
                    <i
                      className="fa-solid fa-cart-shopping fa-2xl fa-bounce"
                      style={{ color: "#FFB900" }}
                    />
                  </button>
                </Link>
              </li>
              <li style={{ marginTop: "8px" }}>
                <Nightmode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
