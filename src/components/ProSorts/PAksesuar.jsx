import React, { useState, useEffect } from "react";
import "./Sort.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory] = useState(11);

  useEffect(() => {
    axios
      .get("https://localhost:7152/api/Urunler")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("API isteği başarısız:", error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.kategori.id === selectedCategory
  );

  return (
    <div id="prod">
      <div className="product-container">
        {filteredProducts.map((product) => (
          <Link to={`/urun/${product.id}`} key={product.id}>
            {" "}
            <div className="flip-card-container" style={{ "--hue": "220" }}>
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg" />
                    <img src={product.photo} alt={product.urunAdi} />
                    <figcaption>{product.urunAdi}</figcaption>
                  </figure>
                  <ul>
                    <div id="crdy">
                      <li>{product.aciklama}</li>
                    </div>
                    <li>{product.detail2}</li>
                    <li>{product.detail3}</li>
                    <li>{product.detail4}</li>
                    <li>{product.detail5}</li>
                  </ul>
                </div>
                <div className="card-back">
                  <figure>
                    <div className="img-bg" />
                    <img src={product.photo} alt={product.urunAdi} />
                  </figure>
                  <Link
                    to={`/urun/${product.id}`}
                    id="btndis"
                    className="btn btn-warning shake-button"
                  >
                    <Button />
                  </Link>
                  <div className="design-container">
                    <span className="design design--1" />
                    <span className="design design--2" />
                    <span className="design design--3" />
                    <span className="design design--4" />
                    <span className="design design--5" />
                    <span className="design design--6" />
                    <span className="design design--7" />
                    <span className="design design--8" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
