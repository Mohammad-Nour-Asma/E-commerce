import React from "react";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";
import IncDec from "./IncDec";
import { domain } from "../../assest/Api/Api";

const CartItem = ({ item, deleteItem, incDec }) => {
  const id = item.id;

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <img src={`${domain}${item.product.image}`} alt="" />
        <span>
          {item.product.name}
          <span className={styles.price}>${item.product.price}</span>
        </span>
      </div>
      <span className={styles.price}>${item.product.price}</span>
      <IncDec id={id} incDec={incDec} counter={item.amount} />
      <span className={styles.subtotal}>${item.subtotal}</span>
      <span className={styles.trash}>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <FaTrash />
        </button>
      </span>
    </div>
  );
};

export default CartItem;
