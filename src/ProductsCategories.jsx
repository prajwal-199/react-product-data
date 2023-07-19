import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";

const ProductsCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  const { setCategoryProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProductCategories();
  }, []);

  const getProductCategories = async () => {
    await axios.post("/products_categories").then((resp) => {
      setCategories(resp.data);
      setLoader(false);
    });
  };

  const categoryList = (productData) => {
    setCategoryProducts(productData.id);
  };

  return (
    <div>
      {loader ? (
        <span className="loader"></span>
      ) : (
        <div>
          {categories.all_filter[0].options.map((data) => (
            <div key={data.id}>
              <p onClick={() => categoryList(data)}>{data.attribute_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductsCategories;
