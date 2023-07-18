import React from "react";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import ProductsCategories from "./ProductsCategories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ProductsCategories />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="product-details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
