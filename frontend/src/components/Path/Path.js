import React from "react";
import { Link } from "react-router-dom";
import styles from "./Path.module.css";

const Path = (props) => {
  return (
    <div className={` ${styles.path}`}>
      <div className="container">
        <Link to="/">Home</Link> / {props.path}
      </div>
    </div>
  );
};

export default Path;
