import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [placeholderText, setPlaceholderText] = useState(
    "Aradığınız kategori, marka veya ürün yazınız.."
  );
  const placeholderIndex = useRef(0);
  const placeholderInterval = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (placeholderIndex.current < placeholderText.length) {
        const currentText = placeholderText.slice(
          0,
          placeholderIndex.current + 1
        );
        setInput(currentText);
        placeholderIndex.current++;
      } else {
        clearInterval(interval);
      }
    }, placeholderInterval);

    return () => {
      clearInterval(interval);
    };
  }, [placeholderText]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    fetch("https://localhost:7152/api/Kategoriler")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((kategori) => {
          return (
            value &&
            kategori &&
            kategori.kategoriAdi &&
            kategori.kategoriAdi.includes(value)
          );
        });
        setResults(results.slice(0, 5));
      });
  };

  const handleInputClick = () => {
    setInput("");
    setPlaceholderText("");
  };

  return (
    <div id="searchbarr">
      <form className="d-flex" role="search">
        <div className="input-group mb-3 my-4 mx-1">
          <input
            style={{ width: "300px" }}
            type="text"
            className="form-control"
            placeholder={placeholderText}
            value={input}
            onChange={handleInputChange}
            onClick={handleInputClick}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
