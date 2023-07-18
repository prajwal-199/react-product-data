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
    await axios.get("/products_categories").then((resp) => {
      setCategories(resp.data);
      setLoader(false);
      console.log(
        resp.data.children_data[0].children_data.map((data) =>
          console.log(data)
        )
      );
    });
  };

  const categoryList = (productData) => {
    console.log(productData);
    setCategoryProducts(productData);
  };

  return (
    <div>
      {loader ? (
        <span className="loader"></span>
      ) : (
        <div>
          {categories.children_data[0].children_data.map((data) => (
            <div key={data.id}>
              <p onClick={() => categoryList(data)}>{data.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductsCategories;
