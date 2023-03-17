import React, { useState } from "react";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem";
import cartstyles from "../../pages/Cart/Cart.module.css";
import Popup from "../popup/Popup";

const Order = ({ order, makePayment, admin }) => {
  const date = new Date(order.date);
  const [pop, setPop] = useState();

  return (
    <>
      <Popup
        message={"Do You Want To Coifirm Payment ? "}
        setPop={setPop}
        pop={pop}
        hitApi={makePayment}
        order_id={order.id}
      />
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
            <div>
              <div className={styles.date}>{date.toLocaleString()}</div>
              <div className={styles.user}>
                <span>user name: {order.user.name}</span>
                <span>user email: {order.user.email}</span>
              </div>
            </div>
            <div className={styles.status}>
              <span
                onClick={() => {
                  if (makePayment) {
                    setPop("open");
                  }
                }}
                className={
                  makePayment && !order.paid
                    ? `${styles.accountant} ${styles.false}`
                    : order.paid
                    ? `${styles.true}`
                    : `${styles.false}`
                }
              >
                {order.paid ? "Paid" : "Not Paid"}
              </span>
              <span
                className={order.ready ? `${styles.true}` : `${styles.false}`}
              >
                {order.ready ? "Ready" : "Not Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
