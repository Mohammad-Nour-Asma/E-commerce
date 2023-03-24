import styles from "./Order.module.css";
import React from "react";
import NewDate from "./NewDate";

const StatusButtons = ({
  makePayment,
  setPop,
  order,
  makeOrderReady,
  setOrderId,
}) => {
  return (
    <div className={styles.orderInfo}>
      <div>
        <NewDate date={order.date} />
        <div className={styles.user}>
          <span>user name: {order.user.name}</span>
          <span>user email: {order.user.email}</span>
        </div>
      </div>

      <div className={styles.status}>
        <span
          onClick={() => {
            if (makePayment && !order.paid) {
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
          onClick={() => {
            if (makeOrderReady && !order.ready) {
              setOrderId(order.id);
              setPop("open");
            }
          }}
          className={
            makeOrderReady && !order.ready
              ? `${styles.accountant} ${styles.false}`
              : order.ready
              ? `${styles.true}`
              : `${styles.false}`
          }
        >
          {order.ready ? "Ready" : "Not Ready"}
        </span>
      </div>
    </div>
  );
};

export default StatusButtons;
