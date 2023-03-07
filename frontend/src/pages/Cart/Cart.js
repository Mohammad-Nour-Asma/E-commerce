import React from "react";
import Path from "../../components/Path/Path";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { data } from "./cartdata";
import { Link } from "react-router-dom";
import CartBill from "./CartBill";

const Cart = () => {
  return (
    <main>
      <Path path="Cart" />
      <div className="container">
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <h3>Item</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
            <h3></h3>
          </div>
          {data.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </div>
      </div>
      <div className={`container ${styles.options}`}>
        <Link to="/products" className="sub-button">
          Continue Shopping
        </Link>
        <button to="/products" className="sub-button">
          Clear Shopping Cart
        </button>
      </div>
      <CartBill />
    </main>
  );
};

export default Cart;
