import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login_url, cartItems_url, profile_url } from "./assest/Api/Api";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [cartdata, setCartdata] = useState([]);
  const [cartError, setCartError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      try {
        setAuth(true);
        setToken(localStorage.getItem("token"));

        profile();
        cart();
      } catch (error) {
        localStorage.removeItem("token");
        setAuth(false);
      }
    }
  }, []);

  const profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.post(profile_url, { token });
      setUser(resp.data.user);
    } catch (error) {
      localStorage.removeItem("token");
      setAuth(false);
    }
  };

  const login = async (email, password) => {
    const loginRes = await axios.post(login_url, { email, password });

    setUser(loginRes.data.user);
    setToken(loginRes.data.access_token);

    setAuth(true);
    localStorage.setItem("token", loginRes.data.access_token);

    try {
      cart();
    } catch (error) {}
  };

  const cart = async () => {
    try {
      setCartError(false);
      const cartRes = await axios.post(cartItems_url, {
        token: localStorage.getItem("token"),
      });
      if (cartRes.data.status === "Token is Expired") {
        setAuth(false);
        localStorage.clear();
        navigate("/");
      }
      setCartdata(cartRes.data);
    } catch (error) {
      setCartError(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        login,
        token,
        auth,
        user,
        setUser,
        cart,
        cartdata,
        cartError,
        setAuth,
        setCartError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
