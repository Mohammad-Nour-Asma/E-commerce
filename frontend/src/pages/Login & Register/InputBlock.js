import React from "react";
import styles from "./Authentication.module.css";

const InputBlock = ({ lable, name, type }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{lable}</label>
      <input type={type} name={name} id={name} />
    </div>
  );
};

export default InputBlock;
