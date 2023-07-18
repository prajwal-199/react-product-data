import { createContext, useState } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState();

  return (
    <GlobalContext.Provider
      value={{
        productInfo,
        setProductInfo,
        categoryProducts,
        setCategoryProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
