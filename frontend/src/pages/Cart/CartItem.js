import React from "react";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

const CartItem = ({ item }) => {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <img src={item.image} alt="" />
        <span>
          {item.title}
          <span className={styles.price}>${item.price}</span>
        </span>
      </div>
      <span className={styles.price}>${item.price}</span>
      <div className={styles.incDec}>
        <button>
          <HiPlus />
        </button>
        3
        <button>
          <HiPlus />
        </button>
      </div>
      <span className={styles.subtotal}>$92.97</span>
      <span className={styles.trash}>
        <button>
          <FaTrash />
        </button>
      </span>
    </div>
  );
};

export default CartItem;
