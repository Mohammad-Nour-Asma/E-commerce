import React from "react";
import styles from "./Authentication.module.css";

const InputBlock = ({ lable, name, type, setInput }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{lable}</label>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type={type}
        name={name}
        required
        id={name}
      />
    </div>
  );
};

export default InputBlock;
