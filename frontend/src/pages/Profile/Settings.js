import React from "react";
import { logout_url } from "../../assest/Api/Api";
import { useGlobalContext } from "../../context";
import { IoIosLogOut } from "react-icons/io";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Profile.module.css";

const Settings = ({ setError, setLoading }) => {
  const { setUser } = useGlobalContext();
  const { setAuth, token } = useGlobalContext();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(logout_url, {
        token,
      });
      localStorage.removeItem("token");
      setAuth(false);
      navigate("/");
      setUser({});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className={styles.setting}>
      <li>
        <button
          className={styles.logout}
          onClick={() => {
            logout();
          }}
        >
          <span>Log Out</span> <IoIosLogOut />
        </button>
      </li>
      <li>
        <button className={styles.logout} onClick={() => {}}>
          <Link to={"/update"}>
            {" "}
            <span style={{ color: "black" }}>
              {" "}
              <span>Update Profile</span> <AiTwotoneSetting />
            </span>
          </Link>
        </button>
      </li>
    </div>
  );
};

export default Settings;
