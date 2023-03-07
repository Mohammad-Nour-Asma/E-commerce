import React from "react";
import styles from "./Authentication.module.css";
import InputBlock from "./InputBlock";

const Register = () => {
  return (
    <main className={` container ${styles.authentication}`}>
      <h1 className={styles.register}>Register</h1>

      <form>
        <InputBlock type="text" name="name" lable="Name" />
        <InputBlock type="text" name="email" lable="Email" />
        <InputBlock type="password" name="password" lable="Password" />
        <InputBlock
          type="password"
          name="password_confirmation"
          lable="Confirm Passowrd"
        />
        <button type="submit" className="sub-button">
          Craete Account
        </button>
      </form>
    </main>
  );
};

export default Register;
