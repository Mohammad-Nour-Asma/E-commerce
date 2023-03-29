import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get_users_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import NoResults from "../../../components/No resualts/NoResults";
import NewDate from "../../../components/Orders/NewDate";
import Spinner from "../../../components/Spinner/Spinner";
import styles from "../Accountant/AccountantDashboard.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(get_users_url, {
        token,
      });
      setUsers(resp.data.users);
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
    getUsers();
  }, []);

  return (
    <main>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Users</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : users?.length === 0 && !loading ? (
        <NoResults />
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>id</th>
                <th>role</th>
                <th>name</th>
                <th>email</th>
                <th>Joind At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item) => {
                return (
                  <tr key={item.id} className={styles.tabelBody}>
                    <td>{item.id}</td>
                    <td
                      className={item.role !== "user" ? `${styles.gray}` : ""}
                    >
                      {item.role}
                    </td>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td className={styles.date}>
                      <NewDate date={item.joind_at} />
                    </td>

                    <td style={{ textDecoration: "underline" }}>
                      {item.role === "user" && (
                        <Link
                          state={{ name: item.name }}
                          to={`/user-orders/${item.id}`}
                        >
                          Go to user Orders
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Users;
