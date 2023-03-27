import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  all_orders_acc_url,
  confirm_payment_url,
} from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import Order from "../../../components/Orders/Order";
import Spinner from "../../../components/Spinner/Spinner";
import styles from "./AccountantDashboard.module.css";

const Orders = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [paid, setPaid] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(paid);
  }, [paid]);

  const getOrders = async (paid) => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(all_orders_acc_url, { token, paid });
      setOrders(resp.data.orders);
      setLoading(false);

      if (resp.data.status === "Authorization Token not found") {
        navigate("/");
        localStorage.removeItem("token");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const makePayment = async (order_id) => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(confirm_payment_url, { token, order_id });
      getOrders(paid);
      setLoading(false);

      if (resp.data.status === "Authorization Token not found") {
        navigate("/");
        localStorage.removeItem("token");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className={styles.orders}>
      <div className={styles.Ordersheader}>
        <span>{orders?.length} Orders Found</span>
      </div>
      <div className={styles.filters}>
        <button
          className="sub-button"
          onClick={() => {
            setPaid();
          }}
        >
          All
        </button>

        <button
          className="sub-button"
          onClick={() => {
            setPaid("true");
          }}
        >
          Paid
        </button>

        <button
          className="sub-button"
          onClick={() => {
            setPaid("false");
          }}
        >
          Not Paid
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : orders?.length === 0 && !loading ? (
        <div className="sides">
          <p>Sorry, no results found.</p>
        </div>
      ) : (
        <div>
          {orders?.map((item) => {
            return (
              <Order
                message="Do You Want To Coifirm Payment ? "
                makePayment={makePayment}
                admin={true}
                order={item}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
