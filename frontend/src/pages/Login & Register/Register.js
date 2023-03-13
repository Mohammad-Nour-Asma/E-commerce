import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register_url } from "../../assest/Api/Api";
import Error from "../../components/Error/Error";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import styles from "./Authentication.module.css";
import InputBlock from "./InputBlock";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConrifmation, setPasswordConrifmation] = useState("");
  const [email, setEmail] = useState("");
  const [namefeedback, setNameFeedback] = useState(false);
  const [passwordfeedback, setPasswordFeedback] = useState(false);
  const [confirmfeedback, setConfirmFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length < 2 || name.length > 100) {
      setNameFeedback(true);
    } else {
      setNameFeedback(false);
    }
    if (password.length < 8) {
      setPasswordFeedback(true);
    } else {
      setPasswordFeedback(false);
    }
    if (password !== passwordConrifmation) {
      setConfirmFeedback(true);
      return;
    } else {
      setConfirmFeedback(false);
    }

    register();
  };
  const register = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.post(register_url, {
        name,
        email,
        password,
        password_confirmation: passwordConrifmation,
      });

      login(email, password);

      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      if (JSON.parse(error.response.data).email[0]) {
        setError(false);
        setMessage(true);
      }
    }
  };
  return (
    <main className={` container ${styles.authentication}`}>
      <h1 className={styles.register}>Register</h1>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : message ? (
        <div className="sides">
          <p>The email has already been taken.</p>
          <Link
            style={{ marginTop: "1rem " }}
            onClick={() => {
              setMessage(false);
            }}
            to="/register"
            className="sub-button"
          >
            go back
          </Link>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <InputBlock setInput={setName} type="text" name="name" lable="Name" />
          {namefeedback && (
            <p className={"feedback"}>
              Name must be between 2 to 100 character
            </p>
          )}
          <InputBlock
            setInput={setEmail}
            type="text"
            name="email"
            lable="Email"
          />
          <InputBlock
            setInput={setPassword}
            type="password"
            name="password"
            lable="Password"
          />
          {passwordfeedback && (
            <p className={"feedback"}>
              Password must be above 7 character or number
            </p>
          )}
          <InputBlock
            setInput={setPasswordConrifmation}
            type="password"
            name="password_confirmation"
            lable="Confirm Passowrd"
          />
          {confirmfeedback && (
            <p className={"feedback"}>Wrong password confirmation</p>
          )}

          <button type="submit" className="sub-button">
            Craete Account
          </button>
        </form>
      )}
    </main>
  );
};

export default Register;
