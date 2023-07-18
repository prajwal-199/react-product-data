import React, { useState, useEffect, Fragment, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { productInfo } = useContext(GlobalContext);

  return (
    <div className="selected-product-container">
      <div className="product-img">
        <div>
          <img
            src={`https://curlnationkw.com/media/catalog/product${productInfo.media_gallery_entries[0]?.file}`}
          />
        </div>
      </div>
      <div className="product-details">
        <h3>{productInfo.name}</h3>
        <p>${productInfo.price}</p>
        <p>
          {productInfo.custom_attributes
            .filter((x) => x.attribute_code === "description")
            .map((y) => y.value)}
        </p>
        <Link to={"/"}>
          <button>Back to Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
