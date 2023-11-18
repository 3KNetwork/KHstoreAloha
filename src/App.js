import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Confetti from "./components/Confetti/Confetti";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Topup from "./components/Topup/Topup";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import AdminPaneli from "./components/AdminPaneli/AdminPaneli";
import Cart from "./components/Cart/Cart";
import Pdetail from "./components/Pdetail/Pdetail";
import PAksesuar from "./components/ProSorts/PAksesuar";
import Telefonlar from "./components/ProSorts/Telefonlar";
import Tv from "./components/ProSorts/Tv";
import Pc from "./components/ProSorts/Pc";
import Kisisel from "./components/ProSorts/Kisisel";
import Klima from "./components/ProSorts/Klima";
import Evalet from "./components/ProSorts/Evalet";
import Beyazesya from "./components/ProSorts/Beyazesya";
import Giyim from "./components/ProSorts/Giyim";
import Payment from "./components/Payment/Payment";
import Shipping from "./components/Shipping/Shipping";
import Hesapdetay from "./components/Hesapdetay/Hesapdetay";
import EnCok from "./components/ProSorts/EnCok";
import Flas from "./components/ProSorts/Flas";
import Populer from "./components/ProSorts/Populer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState();
  const [userId, setUserId] = useState();
  const [kullaniciAdi, setkullaniciAdi] = useState();
  const [kullaniciIsmi, setkullaniciIsmi] = useState();
  const [kullaniciSoyisim, setkullaniciSoyisim] = useState();
  const [kullaniciAdres, setkullaniciAdres] = useState();
  const [kullaniciEmail, setkullaniciEmail] = useState();
  const [kullaniciSifre, setkullaniciSifre] = useState();

  return (
    <div className="App">
      <Confetti />
      <Navbar
        isLoggedIn={isLoggedIn}
        isAdminLoggedIn={isAdminLoggedIn}
        userId={userId}
        kullaniciAdi={kullaniciAdi}
      />
      <Topup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpaneli" element={<AdminPaneli />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Signin
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                isAdminLoggedIn={isAdminLoggedIn}
                setIsAdminLoggedIn={setIsAdminLoggedIn}
                kullaniciAdi={kullaniciAdi}
                setkullaniciAdi={setkullaniciAdi}
                kullaniciIsmi={kullaniciIsmi}
                setkullaniciIsmi={setkullaniciIsmi}
                kullaniciSoyisim={kullaniciSoyisim}
                setkullaniciSoyisim={setkullaniciSoyisim}
                kullaniciAdres={kullaniciAdres}
                setkullaniciAdres={setkullaniciAdres}
                kullaniciEmail={kullaniciEmail}
                setkullaniciEmail={setkullaniciEmail}
                kullaniciSifre={kullaniciSifre}
                setkullaniciSifre={setkullaniciSifre}
                userId={userId}
                setUserId={setUserId}
              />
            )
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Pdetail />} />
        <Route path="/urun/:id" element={<Pdetail />} />
        <Route path="/Aksesuarlar" element={<PAksesuar />} />
        <Route path="/Telefonlar" element={<Telefonlar />} />
        <Route path="/İklimlendirme" element={<Klima />} />
        <Route path="/KüçükEvAletleri" element={<Evalet />} />
        <Route path="/Bilgisayarlar" element={<Pc />} />
        <Route path="/Televizyonlar" element={<Tv />} />
        <Route path="/BeyazEşya" element={<Beyazesya />} />
        <Route path="/KişiselBakım" element={<Kisisel />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/ship" element={<Shipping />} />
        <Route
          path="/hesabim"
          element={
            <Hesapdetay
              kullaniciAdi={kullaniciAdi}
              kullaniciIsmi={kullaniciIsmi}
              kullaniciSoyisim={kullaniciSoyisim}
              kullaniciAdres={kullaniciAdres}
              kullaniciEmail={kullaniciEmail}
              kullaniciSifre={kullaniciSifre}
              userId={userId}
            />
          }
        />
        <Route path="/giyim" element={<Giyim />} />
        <Route path="/encok" element={<EnCok />} />
        <Route path="/flas" element={<Flas />} />
        <Route path="/populer" element={<Populer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
