import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Settings from "../../Profile/Settings";
import styles from "../Accountant/AccountantDashboard.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";

const StroeKeeperDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("all-products");
  }, []);
  return (
    <main className={styles.dashboard}>
      <div className="grid">
        <aside className={styles.aside}>
          <ul>
            <li>
              <Link to="all-products">Products</Link>
            </li>
            <li>
              <Link to="orders">Orders</Link>
            </li>
            <li>
              <Link to="add-product">Add Products</Link>
            </li>
            <li>
              <Link to="all-new-amounts">Amounts</Link>
            </li>
            <li>
              <Link to="add-supplier">Add Supplier</Link>
            </li>
            <li>
              <Link to="add-brand">Add New Brand</Link>
            </li>
            <Settings setError={setError} setLoading={setLoading} />
          </ul>
        </aside>
        <div className={styles.orders}>
          <h1>Welcome to Storekeeper Dashboard</h1>
          {loading ? <Spinner /> : error ? <Error /> : <Outlet />}
        </div>
      </div>
    </main>
  );
};

export default StroeKeeperDashboard;
