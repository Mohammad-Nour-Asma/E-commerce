import React from "react";
import { Link } from "react-router-dom";
import styles from "./Authentication.module.css";
import InputBlock from "./InputBlock";

const Login = () => {
  return (
    <main className={` container ${styles.authentication}`}>
      <h1>Welcome back</h1>
      <p>Welcome back! Please enter your details.</p>
      <form>
        <InputBlock type="text" name="email" lable="Email" />
        <InputBlock type="password" name="password" lable="Password" />
        <button type="submit" className="sub-button">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </main>
  );
};

export default Login;
