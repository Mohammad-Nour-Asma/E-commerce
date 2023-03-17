import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_order_url } from "../../assest/Api/Api";
import Error from "../../components/Error/Error";
import Order from "../../components/Orders/Order";
import Path from "../../components/Path/Path";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import styles from "./Profile.module.css";

import Settings from "./Settings";

const Profile = () => {
  const [paid, setPaid] = useState();
  const [ready, setReady] = useState();
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useGlobalContext();

  const getOrders = async () => {
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(get_order_url, {
        token,
        ready,
        paid,
      });
      const data = await resp.data;

      setOrders(data.orders);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getOrders();
  }, [paid, ready]);

  return (
    <main>
      <Path path="Profile" />
      <div className="container">
        <h2 className={styles.header}>Welcome, {user?.name}</h2>
        <div className="grid">
          <aside className={styles.filters}>
            <span>Filter Your Orders</span>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setPaid("");
                    setReady("");
                  }}
                  className="sub-button"
                >
                  All Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPaid(false);
                    setReady("");
                  }}
                  className="sub-button"
                >
                  Not Paid
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPaid("");
                    setReady(true);
                  }}
                  className="sub-button"
                >
                  Ready
                </button>
              </li>
              <Settings setLoading={setLoading} setError={setError} />
            </ul>
          </aside>
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
              {orders?.map((item) => {
                return <Order order={item} key={item.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
