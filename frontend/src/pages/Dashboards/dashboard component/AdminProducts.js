import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  delete_Product_url,
  get_Products_for_admins_url,
} from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import NoResults from "../../../components/No resualts/NoResults";
import NewDate from "../../../components/Orders/NewDate";
import Popup from "../../../components/popup/Popup";
import Spinner from "../../../components/Spinner/Spinner";
import styles from "../AccountantDashboard.module.css";

const AdminProducts = ({ sk }) => {
  const [pop, setPop] = useState();
  const [productId, setProductId] = useState();
  const [products, setProducts] = useState([]);
  const [requestState, setrequestState] = useState({
    loading: false,
    error: false,
  });
  const searchRef = useRef();

  const [searchFilters, setSearchFilters] = useState({
    amount_in_warehouse: 100,
    search: null,
  });

  //To Get The Products with Filters
  const getProducts = async () => {
    try {
      setrequestState({ loading: true, error: false });
      const token = localStorage.getItem("token");
      const response = await axios.post(get_Products_for_admins_url, {
        token,
        search: searchFilters.search,
        amount_in_warehouse: searchFilters.amount_in_warehouse,
      });
      setProducts(response.data.products);
      setrequestState({ loading: false, error: false });
    } catch (error) {
      console.log(error);
      setrequestState({ loading: false, error: true });
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchFilters]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchFilters({
      amount_in_warehouse: searchFilters.amount_in_warehouse,
      search: searchRef.current.value,
    });
  };
  //To Delete A Product
  const removeProduct = async () => {
    try {
      setrequestState({ loading: true, error: false });
      const token = localStorage.getItem("token");
      const response = await axios.post(delete_Product_url, {
        product_id: productId,
        token,
      });
      setrequestState({ loading: false, error: false });
      getProducts();
    } catch (error) {
      console.log(error);
      setrequestState({ loading: false, error: true });
    }
  };
  return (
    <div>
      <Popup
        pop={pop}
        setPop={setPop}
        message="Are You Sure You Want To Remove This Product From Store ?"
        hitApi={removeProduct}
      />
      <h2 className={styles.title}>Products</h2>
      <div className={styles.filters}>
        <form>
          <input ref={searchRef} type="text" placeholder="search" />
          <button type="submit" onClick={submitHandler}>
            search
          </button>
          <input
            id="range"
            onChange={(e) => {
              setSearchFilters({
                amount_in_warehouse: e.target.value,
                search: searchRef.current.value,
              });
            }}
            type="range"
            min={1}
            value={searchFilters.amount_in_warehouse}
            max={500}
          />
          <label className={styles.label} htmlFor="range">
            <span>Amount In Warehouse Less Than</span>
            <span>{searchFilters.amount_in_warehouse}</span>
          </label>
        </form>
      </div>
      {requestState.loading ? (
        <Spinner />
      ) : requestState.error ? (
        <Error />
      ) : products?.length === 0 && !requestState.loading ? (
        <NoResults />
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>ram</th>
                <th>Processor</th>
                <th>amount in warehouse</th>
                <th>price for selling</th>
                <th>brand</th>
                <th>created</th>
                {sk && (
                  <>
                    <th></th>
                    <th></th>
                    <th></th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {products?.map((item) => {
                return (
                  <tr key={item.id} className={styles.tabelBody}>
                    <td>{item.id}</td>
                    <td>
                      <Link to={`/details/${item.id}`}>{item.name}</Link>
                    </td>
                    <td>{item.ram}</td>
                    <td>{item.processor}</td>
                    <td
                      className={
                        item.amount_in_warehouse === 0
                          ? ` ${styles.warning}`
                          : ""
                      }
                    >
                      {item.amount_in_warehouse}
                    </td>
                    <td>${item.price_for_selling}</td>
                    <td>{item.brand}</td>
                    <td>
                      <NewDate date={item.craeted_at} />
                    </td>
                    {sk && (
                      <>
                        {" "}
                        <td>
                          <Link
                            state={{ item, name: item.name }}
                            to={`/storekeeper/edit-product/${item.id}`}
                            className={styles.button}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            state={{ product: item }}
                            to={`/storekeeper/add-amount/${item.id}`}
                            className={styles.button}
                          >
                            Add
                          </Link>
                        </td>
                        <td>
                          {item.amount_in_warehouse > 0 && (
                            <button
                              onClick={() => {
                                setPop("open");
                                setProductId(item.id);
                              }}
                              className={`${styles.button} ${styles.delete}`}
                            >
                              delete
                            </button>
                          )}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
