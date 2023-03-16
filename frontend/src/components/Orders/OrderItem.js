import React from "react";
import { domain } from "../../assest/Api/Api";
import styles from "./Order.module.css";
import cartStyles from "../../pages/Cart/Cart.module.css";

function OrderItem({ orderItem }) {
  return (
    <div className={`${cartStyles.content} ${styles.orderItem}`}>
      <div className={cartStyles.info}>
        <img src={`${domain}${orderItem.product.image}`} alt="" />
        <span>
          {orderItem.product.name}
          <span className={cartStyles.price}>${orderItem.product.price}</span>
        </span>
      </div>
      <span className={cartStyles.price}>${orderItem.product.price}</span>
      <span className={cartStyles.price}>{orderItem.amount}</span>

      <span className={cartStyles.subtotal}>${orderItem.total_price}</span>
    </div>
  );
}

export default OrderItem;
