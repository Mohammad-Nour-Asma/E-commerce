import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.box}>
        <p>404</p>
        <p>Page Not Found</p>
        <Link className="sub-button" to={"/"}>
          Go Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
