import React, { useState } from "react";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem";
import cartstyles from "../../pages/Cart/Cart.module.css";
import Popup from "../popup/Popup";
import Date from "./NewDate";
import NewDate from "./NewDate";
import StatusButtons from "./StatusButtons";

const Order = ({ order, makePayment, admin, message }) => {
  const [pop, setPop] = useState();

  return (
    <>
      <Popup
        message={message}
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

          <StatusButtons
            makePayment={makePayment}
            setPop={setPop}
            order={order}
          />
        </div>
      </div>
    </>
  );
};

export default Order;
