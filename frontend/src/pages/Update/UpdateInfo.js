import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { update_info_url } from "../../assest/Api/Api";
import Error from "../../components/Error/Error";
import Path from "../../components/Path/Path";
import Popup from "../../components/popup/Popup";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import styles from "../Login & Register/Authentication.module.css";
import InputBlock from "../Login & Register/InputBlock";
import InputUpdateBlock from "./InputUpdateBlock";

const UpdateInfo = ({ admin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, setUser } = useGlobalContext();
  const [pop, setPop] = useState();

  const [nameLength, setNameLength] = useState(true);
  const [passwordLength, setPasswordLength] = useState(true);
  const [passwordConfirmationC, setPasswordConfirmationC] = useState(true);

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    if (name.length > 100 || name.length <= 2) {
      setNameLength(false);
      return;
    } else {
      setNameLength(true);
    }
    if (password.length < 8) {
      setPasswordLength(false);
      return;
    } else {
      setPasswordLength(true);
    }
    if (password !== passwordConfirmation) {
      setPasswordConfirmationC(false);
      return;
    } else {
      setPasswordConfirmationC(true);
    }

    setPop("open");
  };

  const update = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(update_info_url, {
        token,
        name,
        password,
        password_confirmation: passwordConfirmation,
      });
      setUser(resp.data.user);

      setLoading(false);
      navigate(-1);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <main>
      <Popup
        message={"Are You Sure Of Updating Your Information ?"}
        pop={pop}
        setPop={setPop}
        hitApi={update}
      />
      {!admin && <Path path="Profile / Update" />}
      <div className={` container ${styles.authentication}`}>
        <p style={{ fontSize: "1.5rem" }}>Please Set Your New Information</p>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error />
        ) : (
          <>
            <form onSubmit={submitHandler}>
              <InputUpdateBlock
                setInput={setName}
                type="text"
                name="email"
                lable="New Name"
                value={name}
              />
              {!nameLength && (
                <p className={"feedback"}>
                  Name must be between 2 and 100 characters
                </p>
              )}
              <InputUpdateBlock
                setInput={setPassword}
                type="password"
                name="password"
                lable="New Password"
                value={password}
              />
              {!passwordLength && (
                <p className={"feedback"}>
                  Password must be above 7 character or number
                </p>
              )}
              <InputUpdateBlock
                setInput={setPasswordConfirmation}
                type="password"
                name="password_confirmation"
                lable="Confirm New Passowrd"
                value={passwordConfirmation}
              />
              {!passwordConfirmationC && (
                <p className={"feedback"}>Wrong password confirmation</p>
              )}
              <button type="submit" className="sub-button">
                Update
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default UpdateInfo;
