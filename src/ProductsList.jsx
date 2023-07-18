import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [productData, setProductData] = useState();
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    productsList();
  }, []);

  const { setProductInfo, categoryProducts } = useContext(GlobalContext);

  const productsList = async () => {
    await axios.get("/products_api").then((resp) => {
      setProductData(resp.data.items);
      setLoader(true);
    });
  };

  const productDetails = (data) => {
    setProductInfo(data);
    console.log(data);
    navigate("/product-details");
  };

  console.log(
    productData[0].extension_attributes.category_links.map((data) =>
      console.log(data.category_id)
    )
  );
  return (
    <div className="product-card-container">
      {loader ? (
        productData
          .filter((item) =>
            item.extension_attributes.category_links.map(
              (data) => data.category_id
            )
          )
          .map((data) => {
            return (
              <div
                className="product-card"
                key={data.id}
                onClick={() => productDetails(data)}
              >
                <div className="product-card-img">
                  <img
                    src={`https://curlnationkw.com/media/catalog/product${data.media_gallery_entries[0]?.file}`}
                  />
                </div>
                <div className="product-details">
                  <p>{data.name}</p>
                  <p>${data.price}</p>
                </div>
              </div>
            );
          })
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
};

export default ProductsList;
