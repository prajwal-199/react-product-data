import { createContext, useState } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [productInfo, setProductInfo] = useState([]);
  return (
    <GlobalContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
