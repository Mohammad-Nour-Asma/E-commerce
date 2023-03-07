import React from "react";
import styles from "./Cart.module.css";

const CartBill = () => {
  return (
    <div className={`container   ${styles.orderDetails}`}>
      <article className={` ${styles.cartBill}`}>
        <h2>
          Order Total : <span>$551.28</span>
        </h2>
      </article>
      <button className="sub-button">Order</button>
    </div>
  );
};

export default CartBill;
