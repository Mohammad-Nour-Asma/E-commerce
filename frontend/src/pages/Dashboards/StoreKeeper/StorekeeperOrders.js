import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  make_order_ready_url,
  orders_for_storekeeper_url,
} from "../../../assest/Api/Api";
import styles from "../Accountant/AccountantDashboard.module.css";
import storekeeperStyles from "./StoreKeeper.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import StatusButtons from "../../../components/Orders/StatusButtons";
import Popup from "../../../components/popup/Popup";
import NoResults from "../../../components/No resualts/NoResults";

const StorekeeperOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order_id, setOrder_id] = useState();
  const [ready, setReady] = useState();
  const [pop, setPop] = useState();
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

  const makeOrderReady = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(make_order_ready_url, {
        token,
        order_id,
      });
      setLoading(false);

      if (resp.data.status === "Authorization Token not found") {
        navigate("/");
        localStorage.removeItem("token");
      }

      getOrders();
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
      <Popup
        message={"Are you Sure This Order Is Ready ? "}
        setPop={setPop}
        pop={pop}
        hitApi={makeOrderReady}
      />
      <h2 style={{ textAlign: "center" }}>Orders</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : orders?.length === 0 && !loading ? (
        <NoResults />
      ) : (
        <div>
          <div className={styles.Ordersheader}>
            <span>{orders?.length} Orders Found</span>
          </div>
          <div className={storekeeperStyles.filters}>
            Filters :
            <button
              onClick={() => {
                setReady();
              }}
              className="sub-button"
            >
              All
            </button>
            <button
              onClick={() => {
                setReady("true");
              }}
              className="sub-button"
            >
              Ready
            </button>
            <button
              onClick={() => {
                setReady("false");
              }}
              className="sub-button"
            >
              Not Ready
            </button>
          </div>
          <div className={storekeeperStyles.orders}>
            {orders?.map((order) => {
              let cantBeReady = false;
              return (
                <div className={storekeeperStyles.order} key={order.id}>
                  <table className={styles.table}>
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
                        if (!item.status) {
                          cantBeReady = true;
                        }
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
                              {item.amount_in_warehouse === 0 && (
                                <Link
                                  state={{ product: item.product }}
                                  to={`/storekeeper/add-amount/${item.id}`}
                                  className={styles.button}
                                >
                                  Add
                                </Link>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className={storekeeperStyles.orderInfo}>
                    <div className={storekeeperStyles.status}>
                      {cantBeReady ? (
                        <p>
                          There Are Not Enough Amounts To Make This Order Ready
                        </p>
                      ) : (
                        <StatusButtons
                          setPop={setPop}
                          makeOrderReady={makeOrderReady}
                          setOrderId={setOrder_id}
                          order={order}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StorekeeperOrders;
