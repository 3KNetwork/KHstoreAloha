import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="btn btn-light btn-outline-warning"
      id="scrollToTopBtn"
      onClick={scrollToTop}
      style={{
        display: isVisible ? "flex" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        width: "150px",
        height: "55px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "40px",
      }}
    >
      <i
        className="fa-regular fa-circle-up fa-shake "
        style={{ color: "#914E75", fontSize: "2em" }}
      />
      <span style={{ marginLeft: "10px", color: "black" }}>
        <b>Yukarı çık</b>
      </span>
    </button>
  );
}

export default ScrollToTopButton;
