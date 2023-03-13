import React, { useEffect, useRef, useState } from "react";
import styles from "./Popup.module.css";

const Popup = ({ message, setPop, pop, hitApi }) => {
  const ref = useRef();

  //   useEffect(() => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   }, [ref.current]);

  if (pop === null || pop === undefined) {
    return <></>;
  }

  return (
    <div
      ref={ref}
      className={
        pop === "open"
          ? `${styles.popup} ${styles.show}`
          : pop === "close"
          ? `${styles.popup} ${styles.hide}`
          : ""
      }
    >
      <div className={styles.box}>
        <div className={styles.header}>Confirm</div>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setPop("close");
              if (hitApi) hitApi();
            }}
          >
            Ok
          </button>
          <button
            onClick={() => {
              setPop("close");
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
