import React from "react";
import styles from "./Order.module.css";

const NewDate = ({ date }) => {
  const newDate = new Date();

  return <div className={styles.date}>{newDate.toLocaleString()}</div>;
};

export default NewDate;
