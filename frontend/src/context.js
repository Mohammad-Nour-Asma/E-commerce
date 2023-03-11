import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  if (localStorage.getItem("token")) {
    setAuth(true);
    setToken(localStorage.getItem("token"));
  }
  return (
    <AppContext.Provider value={{ auth, token, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
