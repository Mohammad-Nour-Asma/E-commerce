import React from "react";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem";
import cartstyles from "../../pages/Cart/Cart.module.css";

const Order = ({ order }) => {
  const date = new Date(order.date);

  return (
    <div className={styles.order}>
      <div className={cartstyles.table}>
        <div className={cartstyles.tableHeader}>
          <h3>Item</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>

        {order.order_items?.map((item) => {
          return <OrderItem key={item.id} orderItem={item} />;
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.totalOrderPrice}>
          <span>Total Price:</span>
          <span>${order.total_price}</span>
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.date}>{date.toLocaleString()}</div>
          <div className={styles.status}>
            <span className={order.paid ? `${styles.ture}` : `${styles.false}`}>
              {order.paid ? "Paid" : "Not Paid"}
            </span>
            <span
              className={order.ready ? `${styles.ture}` : `${styles.false}`}
            >
              {order.ready ? "Ready" : "Not Ready"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
