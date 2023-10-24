import { createContext, useState } from "react";
import dataNavList from "../data/navigateHeader";
export const context = createContext();

const ContextProvider = ({ children }) => {
  //State
  const urlBaseImage = "http://apixm.devmaster.vn/";
  const [navList, setNavList] = useState(dataNavList);
  const [slider, setSLider] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  // //function
  // function GetTokenFromLocalStorage(key) {
  //   return localStorage.getItem(key);
  // }
  // function SaveTokenToLocalStorage(title, value) {
  //   localStorage.setItem(title, value);
  // }
  //Value
  const value = {
    navList,
    responseData,
    setResponseData,
    slider,
    urlBaseImage,
    setSLider,
    dataSearch,
    setDataSearch,
    setValueSearch,
    valueSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
