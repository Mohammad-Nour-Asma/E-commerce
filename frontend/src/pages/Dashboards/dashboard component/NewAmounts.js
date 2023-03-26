import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get_suppliers_url, new_amounts_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import NoResults from "../../../components/No resualts/NoResults";
import Spinner from "../../../components/Spinner/Spinner";
import storekeeperStyles from "../StoreKeeper/StoreKeeper.module.css";
import styles from "../AccountantDashboard.module.css";
import NewAmountsInfo from "./NewAmountsInfo";

const NewAmounts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newAmounts, setNewAmounts] = useState([]);
  const [admin_checking, setAdmin_checking] = useState();
  const [accountant_checking, setAccountant_checking] = useState();
  const [suppliers, setSuppliers] = useState([]);
  const [supplier_id, setSupplier_id] = useState();
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

  useEffect(() => {
    getAmounts();
  }, [accountant_checking, supplier_id, admin_checking]);

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <div>
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
            {suppliers.map((item) => {
              return <option value={item.id}>{item.name}</option>;
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
                    <NewAmountsInfo amount={amount} />
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
