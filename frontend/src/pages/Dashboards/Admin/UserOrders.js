import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { get_user_orders_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import NoResults from "../../../components/No resualts/NoResults";
import Order from "../../../components/Orders/Order";
import Spinner from "../../../components/Spinner/Spinner";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  const { id } = useParams();

  const getUserOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(get_user_orders_url, {
        token,
        user_id: id,
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
  useEffect(() => {
    getUserOrders();
    console.log(orders);
  }, []);

  return (
    <main>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span style={{ textDecoration: "underline" }}>{name}</span> Orders
      </h2>
      <p>{orders?.length} Found</p>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : orders?.length === 0 && !loading ? (
        <NoResults />
      ) : (
        <div>
          {orders?.map((order) => {
            return <Order key={order.item} order={order} />;
          })}
        </div>
      )}
    </main>
  );
};

export default UserOrders;
