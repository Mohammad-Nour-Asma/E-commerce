import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { orders_for_storekeeper_url } from "../../../assest/Api/Api";
import Order from "../../../components/Orders/Order";
import styles from "../AccountantDashboard.module.css";

import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import NewDate from "../../../components/Orders/NewDate";

const StorekeeperOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState();
  const navigate = useNavigate();

  const getOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(orders_for_storekeeper_url, {
        token,
        ready,
      });
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

  useEffect(() => {
    getOrders();
  }, [ready]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Orders</h2>
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
          <div className={styles.Ordersheader}>
            <span>{orders?.length} Orders Found</span>
          </div>

          <div className={styles.tableContainer}>
            {orders?.map((order) => {
              return (
                <table key={order.id} className={styles.table}>
                  <thead className={styles.tableHeader}>
                    <tr>
                      <th>name</th>
                      <th>price for one</th>
                      <th>amount</th>
                      <th>amount in warehouse</th>
                      <th>subtotal price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.order_items.map((item) => {
                      return (
                        <tr key={item.id} className={styles.tabelBody}>
                          <td>
                            <Link to={`/details/${item.id}`}>
                              {item.product.name}
                            </Link>
                          </td>
                          <td>${item.product.price}</td>
                          <td>{item.amount}</td>
                          <td
                            className={
                              item.amount_in_warehouse === 0
                                ? ` ${styles.warning}`
                                : ""
                            }
                          >
                            {item.amount_in_warehouse}
                          </td>
                          <td>${item.total_price}</td>

                          <td>
                            <Link
                              state={{ product: item }}
                              to={`/storekeeper/add-amount/${item.id}`}
                              className={styles.button}
                            >
                              Add
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StorekeeperOrders;
