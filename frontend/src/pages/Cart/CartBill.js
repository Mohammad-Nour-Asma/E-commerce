import axios from "axios";
import React, { useState } from "react";
import { order_cart_url } from "../../assest/Api/Api";
import Error from "../../components/Error/Error";
import Popup from "../../components/popup/Popup";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import styles from "./Cart.module.css";

const CartBill = ({ total }) => {
  const [pop, setPop] = useState(null);
  const { token, setCartError, cartError, cart } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const makeOrder = async () => {
    try {
      setLoading(true);
      setCartError(false);
      const response = await axios.post(order_cart_url, { token });

      setLoading(false);
      cart();
    } catch (error) {
      setLoading(false);
      setCartError(true);
    }
  };

  return (
    <>
      <Popup
        message={"Are you sure about the order"}
        setPop={setPop}
        pop={pop}
        hitApi={makeOrder}
      />
      {loading ? (
        <Spinner />
      ) : cartError ? (
        <Error />
      ) : (
        <div className={`container   ${styles.orderDetails}`}>
          <article className={` ${styles.cartBill}`}>
            <h2>
              Order Total : <span>{total}</span>
            </h2>
          </article>
          <button
            onClick={() => {
              setPop("open");
            }}
            className="sub-button"
          >
            Order
          </button>
        </div>
      )}
    </>
  );
};

export default CartBill;
