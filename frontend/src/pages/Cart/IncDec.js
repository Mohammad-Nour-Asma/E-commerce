import React from "react";
import styles from "./Cart.module.css";
import { HiPlus, HiMinusSm } from "react-icons/hi";

const IncDec = () => {
  return (
    <div className={styles.incDec}>
      <button>
        <HiMinusSm />
      </button>
      3
      <button>
        <HiPlus />
      </button>
    </div>
  );
};

export default IncDec;
