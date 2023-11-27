import { createContext, useState } from "react";
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [slider, setSLider] = useState([]);
  const [productSelect, setProductSelect] = useState({});
  const [dataSearch, setDataSearch] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [local, setLocal] = useState(() => {
    const list = JSON.parse(localStorage.getItem("wishlistItems"));
    if (list === null || list.length === 0) {
      return responseData;
    }
    return list;
  });
  // //function
  // function GetTokenFromLocalStorage(key) {
  //   return localStorage.getItem(key);
  // }
  // function SaveTokenToLocalStorage(title, value) {
  //   localStorage.setItem(title, value);
  // }
  //Value
  const value = {
    responseData,
    productSelect,
    setProductSelect,
    setResponseData,
    local,
    listCategories,
    setListCategories,
    listProducts,
    setListProducts,
    setLocal,
    slider,
    setSLider,
    dataSearch,
    setDataSearch,
    setValueSearch,
    valueSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
