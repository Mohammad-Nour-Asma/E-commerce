import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Products from "./dashboard component/AdminProducts";
import Settings from "../Profile/Settings";
import styles from "./AccountantDashboard.module.css";

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
              <Link to="all-amount">Add Amounts</Link>
            </li>
            <Settings setError={setError} setLoading={setLoading} />
          </ul>
        </aside>
        <div className={styles.orders}>
          <h1>Welcome to Storekeeper Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default StroeKeeperDashboard;
