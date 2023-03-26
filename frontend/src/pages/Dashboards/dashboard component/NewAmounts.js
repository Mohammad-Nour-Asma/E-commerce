import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  get_suppliers_url,
  make_amount_payment_url,
  make_amount_ready_url,
  new_amounts_url,
} from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import NoResults from "../../../components/No resualts/NoResults";
import Spinner from "../../../components/Spinner/Spinner";
import storekeeperStyles from "../StoreKeeper/StoreKeeper.module.css";
import styles from "../Accountant/AccountantDashboard.module.css";
import NewAmountsInfo from "./NewAmountsInfo";
import Popup from "../../../components/popup/Popup";

const NewAmounts = ({ admin, acc }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newAmounts, setNewAmounts] = useState([]);
  const [admin_checking, setAdmin_checking] = useState();
  const [accountant_checking, setAccountant_checking] = useState();
  const [suppliers, setSuppliers] = useState([]);
  const [supplier_id, setSupplier_id] = useState();
  const [newAmount_id, setNewAmount_id] = useState();
  const [pop, setPop] = useState();
  const navigate = useNavigate();

  const getSuppliers = async () => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      setError(false);
      const response = await axios.post(get_suppliers_url, { token });
      setSuppliers(response.data.suppliers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const getAmounts = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(new_amounts_url, {
        token,
        admin_checking,
        accountant_checking,
        supplier_id,
      });
      setNewAmounts(resp.data.newAmounts);
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

  const makeNewAmountReady = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(make_amount_ready_url, {
        token,
        newAmount_id,
      });

      setLoading(false);

      if (resp.data.status === "Authorization Token not found") {
        navigate("/");
        localStorage.removeItem("token");
      }
      getAmounts();
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const makePayment = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(make_amount_payment_url, {
        token,
        newAmount_id,
      });

      setLoading(false);

      if (resp.data.status === "Authorization Token not found") {
        navigate("/");
        localStorage.removeItem("token");
      }
      getAmounts();
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAmounts();
  }, [accountant_checking, supplier_id, admin_checking]);

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <div>
      <Popup
        pop={pop}
        setPop={setPop}
        message={
          admin
            ? "Are You Sure Of Confirming The New Amounts ?"
            : acc
            ? "Are You Sure Of Confirm Payment ?"
            : ""
        }
        hitApi={admin ? makeNewAmountReady : acc ? makePayment : ""}
      />
      <h2 style={{ textAlign: "center" }}>New Amounts</h2>
      <div style={{ marginTop: "0.5rem" }}>
        <span>{newAmounts?.length} Orders Found</span>
      </div>
      <div className={storekeeperStyles.filters}>
        Filters :
        <button
          onClick={() => {
            setAdmin_checking();
            setAccountant_checking();
          }}
          className="sub-button"
        >
          All
        </button>
        <button
          onClick={() => {
            setAdmin_checking("true");
            setAccountant_checking();
          }}
          className="sub-button"
        >
          admin checked
        </button>
        <button
          onClick={() => {
            setAdmin_checking("true");
            setAccountant_checking("true");
          }}
          className="sub-button"
        >
          paid
        </button>
        <div style={{ margin: "1rem 0 " }}>
          {" "}
          <select
            onChange={(e) => {
              setSupplier_id(e.target.value);
            }}
            defaultValue={"de"}
          >
            <option value={"de"} hidden disabled>
              Filter On Supplier
            </option>
            <option value="">All</option>
            {suppliers?.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : newAmounts?.length === 0 && !loading ? (
        <NoResults />
      ) : (
        <div>
          <div className={storekeeperStyles.orders}>
            {newAmounts?.map((amount) => {
              return (
                <div className={storekeeperStyles.order} key={amount.id}>
                  <table className={styles.table}>
                    <thead className={styles.tableHeader}>
                      <tr>
                        <th>name</th>
                        <th>price for one</th>
                        <th>amount to add</th>
                        <th>amount in warehouse</th>
                        <th>totoal price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.tabelBody}>
                        <td>
                          <Link to={`/details/${amount.product_id}`}>
                            {amount.product.name}
                          </Link>
                        </td>
                        <td>${amount.price_for_one}</td>
                        <td>{amount.amount_to_add}</td>
                        <td
                          className={
                            amount.product.amount_in_warehouse === 0
                              ? ` ${styles.warning}`
                              : ""
                          }
                        >
                          {amount.product.amount_in_warehouse}
                        </td>
                        <td>${amount.total_price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={storekeeperStyles.orderInfo}>
                    <NewAmountsInfo
                      amount={amount}
                      makeNewAmountReady={admin}
                      makePayment={acc}
                      setPop={setPop}
                      setNewAmountId={setNewAmount_id}
                    />
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

export default NewAmounts;
