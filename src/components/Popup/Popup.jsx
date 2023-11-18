import React, { useState, useEffect } from "react";
import "./Popup.css";
import indirim from "./indirim.png";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  const hasClosedPopup = getCookie("hasClosedPopup");

  useEffect(() => {
    if (!hasClosedPopup) {
      setShowPopup(true);
    }
  }, [hasClosedPopup]);

  const handleCloseClick = () => {
    setShowPopup(false);
    setCookie("hasClosedPopup", true, 365);
  };

  return (
    showPopup && (
      <div id="popup">
        <div id="popup-content">
          <img
            style={{ width: "800px", height: "800px" }}
            src={indirim}
            alt=""
          />{" "}
          <br />
          <button
            className="btn btn-danger"
            id="close-popup"
            onClick={handleCloseClick}
          >
            Kapat
          </button>
        </div>
      </div>
    )
  );
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
