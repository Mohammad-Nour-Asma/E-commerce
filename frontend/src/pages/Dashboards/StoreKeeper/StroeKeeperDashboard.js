import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Settings from "../../Profile/Settings";
import styles from "../AccountantDashboard.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";

const StroeKeeperDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <main className={styles.dashboard}>
      <div className="grid">
        <aside className={styles.aside}>
          <ul>
            <li>
              <Link to="all-product">Products</Link>
            </li>
            <li>
              <Link to="orders">Orders</Link>
            </li>
            <li>
              <Link to="add-product">Add Products</Link>
            </li>
            <li>
              <Link to="all-amount">Amounts</Link>
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
