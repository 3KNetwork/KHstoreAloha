import React from "react";

function Banner() {
  return (
    <div>
      <div className="col-xl-8 ">
        <img
          style={{
            marginLeft: "25%",
            height: "250px",
            marginBottom: "50px",
            borderRadius: "50px",
          }}
          src="https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/02/nw_010823_30indirim_kupon_kodlu_nw30_alter-1690965627.gif"
          className="w-100"
          alt="New"
        />
      </div>
    </div>
  );
}

export default Banner;
