import React from "react";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";
import IncDec from "./IncDec";

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
      <IncDec />
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
