import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import styles from "./Authentication.module.css";
import InputBlock from "./InputBlock";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordfeedback, setPasswordFeedback] = useState(false);
  const { login } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [unauthorized, setUnauthorized] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setUnauthorized(false);
    if (password.length < 8) {
      setPasswordFeedback(true);
      return;
    } else {
      setPasswordFeedback(false);
    }
    singIn(email, password);
  };
  const singIn = async (email, password) => {
    try {
      setLoading(true);
      await login(email, password);

      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setError(true);
      if (error.response.data.error === "Unauthorized") {
        setError(false);
        setUnauthorized(true);
      }
    }
  };
  return (
    <main className={` container ${styles.authentication}`}>
      <h1>Welcome back</h1>
      <p>Welcome back! Please enter your details.</p>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <>
          <form onSubmit={submitHandler}>
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
            {unauthorized ? (
              <p className={"feedback"}>
                the username or password you entered are not correct
              </p>
            ) : (
              passwordfeedback && (
                <p className={"feedback"}>
                  Password must be above 7 character or number
                </p>
              )
            )}
            <button type="submit" className="sub-button">
              Sign In
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default Login;
