import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Error from "../../../components/Error/Error";
import Spinner from "../../../components/Spinner/Spinner";

import Settings from "../../Profile/Settings";
import styles from "./AccountantDashboard.module.css";

const AccountantDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/orders");
  }, []);

  return (
    <main className={styles.dashboard}>
      <div className="grid">
        <aside className={styles.aside}>
          <ul>
            <li>
              <Link to={"orders"}>Orders</Link>
            </li>
            <li>
              <Link to={"new-amounts"}>New Amounts</Link>
            </li>
            <Settings setError={setError} setLoading={setLoading} />
          </ul>
        </aside>
        <div className={styles.acc}>
          <h1 style={{ margin: "1rem auto", textAlign: "center" }}>
            Welcome to Accountant Dashboard
          </h1>
          {loading ? <Spinner /> : error ? <Error /> : <Outlet />}
        </div>
      </div>
    </main>
  );
};

export default AccountantDashboard;
