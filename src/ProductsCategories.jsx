import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

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
