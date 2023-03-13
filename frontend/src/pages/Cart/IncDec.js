import React, { useState } from "react";
import styles from "./Cart.module.css";
import { HiPlus, HiMinusSm } from "react-icons/hi";

const IncDec = ({ counter, setCounter, incDec, id }) => {
  return (
    <div className={styles.incDec}>
      <button
        onClick={() => {
          if (setCounter) {
            if (counter > 1) {
              setCounter((prev) => prev - 1);
            }
          } else {
            incDec(id, "decrease");
          }
        }}
      >
        <HiMinusSm />
      </button>
      {counter}
      <button>
        <HiPlus
          onClick={() => {
            if (setCounter) setCounter((prev) => prev + 1);
            else {
              incDec(id, "increase");
            }
          }}
        />
      </button>
    </div>
  );
};

export default IncDec;
