import React, { useEffect, useReducer, useState } from "react";
import Path from "../../components/Path/Path";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";
import CartBill from "./CartBill";
import { useGlobalContext } from "../../context";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import axios from "axios";
import {
  decrease_item_url,
  delete_item_url,
  empty_cart_url,
  increase_item_url,
} from "../../assest/Api/Api";

const Cart = () => {
  const { cartdata, cart, cartError, token, setCartError } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const cartTriger = async () => {
    try {
      setLoading(true);
      await cart();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    cartTriger();
  }, []);

  const clearCart = async () => {
    try {
      setLoading(true);
      const resp = await axios.post(empty_cart_url, { token });
      await cartTriger();
    } catch (error) {
      setCartError(true);
      setLoading(false);
    }
  };

  const incDec = async (id, type) => {
    try {
      setLoading(true);
      const url = type === "increase" ? increase_item_url : decrease_item_url;

      const resp = await axios.post(`${url}/${id}`, { token });
      await cartTriger();
    } catch (error) {
      setCartError(true);
      setLoading(false);
    }
  };
  const deleteItem = async (id) => {
    try {
      setLoading(true);

      const resp = await axios.post(`${delete_item_url}/${id}`, { token });
      await cartTriger();
    } catch (error) {
      setCartError(true);
      setLoading(false);
    }
  };

  if (cartdata.cart?.length === 0) {
    return (
      <main>
        <Path path="Cart" />
        <div className="sides">
          <p>Your Cart Is Empty</p>
          <Link
            style={{ margin: "1rem 0" }}
            className="sub-button"
            to={"/products"}
          >
            Fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Path path="Cart" />
      {loading ? (
        <Spinner />
      ) : cartError ? (
        <Error />
      ) : (
        <>
          <div className="container">
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <h3>Item</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Subtotal</h3>
                <h3></h3>
              </div>
              {cartdata.cart?.map((item, index) => {
                return (
                  <CartItem
                    incDec={incDec}
                    deleteItem={deleteItem}
                    key={item.id}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
          <div className={`container ${styles.options}`}>
            <Link to="/products" className="sub-button">
              Continue Shopping
            </Link>
            <button
              onClick={() => {
                clearCart();
              }}
              to="/products"
              className="sub-button"
            >
              Clear Shopping Cart
            </button>
          </div>
          <CartBill total={cartdata.total_cart_price} />
        </>
      )}
    </main>
  );
};

export default Cart;
