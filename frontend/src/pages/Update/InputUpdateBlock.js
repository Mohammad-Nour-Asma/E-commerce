import React from "react";
import styles from "../Login & Register/Authentication.module.css";

function InputUpdateBlock({ lable, name, type, setInput, value }) {
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
        value={value}
      />
    </div>
  );
}

export default InputUpdateBlock;
