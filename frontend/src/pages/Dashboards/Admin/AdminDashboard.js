import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import styles from "../AccountantDashboard.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import Settings from "../../Profile/Settings";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <main className={styles.dashboard}>
      <div className="grid">
        <aside className={styles.aside}>
          <ul>
            <li>
              <Link to="all-products">Products</Link>
            </li>
            <li>
              <Link to="all-new-amounts">Amounts</Link>
            </li>
            <li>
              <Link to="all-new-amounts">Users</Link>
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

export default AdminDashboard;
