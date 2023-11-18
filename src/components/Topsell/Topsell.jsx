import React from "react";
import ta from "./ta.jpeg";
import tb from "./tb.jpeg";
import tc from "./tc.jpeg";
import { Link } from "react-router-dom";

function Topsell() {
  return (
    <div>
      <article style={{ marginTop: "50px", marginBottom: "80px" }}>
        <div>
          <div>
            <div data-tracker="seen:widget-gw-widget-2234150">
              <div>
                <Link
                  to="/encok"
                  style={{
                    "margin-right": "25px",
                    width: "396.67px",
                    height: "66.9829px",
                    border: "none",
                    "border-radius": "10px",
                  }}
                >
                  <img
                    style={{
                      "margin-right": "20px",
                      width: "386.67px",
                      height: "66.9829px",
                      "border-radius": "20px",
                    }}
                    alt=""
                    src={ta}
                  />
                </Link>
                <Link to="/flas">
                  <img
                    style={{
                      "margin-right": "0px",
                      width: "386.67px",
                      height: "66.9829px",
                      "border-radius": "20px",
                    }}
                    alt=""
                    src={tb}
                  />
                </Link>
                <Link to="/populer">
                  <img
                    style={{
                      "margin-left": "40px",
                      "margin-right": "0px",
                      width: "386.67px",
                      height: "66.9829px",
                      "border-radius": "20px",
                    }}
                    alt=""
                    src={tc}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Topsell;
