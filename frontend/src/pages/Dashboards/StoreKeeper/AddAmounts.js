import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { add_amounts_url, get_suppliers_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import Popup from "../../../components/popup/Popup";
import Spinner from "../../../components/Spinner/Spinner";
import formStyles from "../dashboard component/AddEditForm.module.css";
import styles from "./StoreKeeper.module.css";

const AddAmounts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state.product;
  const token = localStorage?.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [suppliers, setSuppliers] = useState();
  const [supplier, setSupplier] = useState();
  const [amount, setAmount] = useState({
    product_id: product.id,
    amount_to_add: 1,
    price_for_one: 1,
  });
  const [pop, setPop] = useState();
  const [supplierAuth, setSupplierAuth] = useState(false);

  const getSuppliers = async () => {
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
  const addAount = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.post(add_amounts_url, { ...amount, token });
      setLoading(false);
      navigate("/storekeeper/all-product");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getSuppliers();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Popup
            message={`are you sure you want to order ${
              amount.amount_to_add
            } from ${product.name} with Price for one ${amount.price_for_one}
        total price will be :  $${
          amount.amount_to_add * amount.price_for_one
        }  `}
            pop={pop}
            setPop={setPop}
            hitApi={addAount}
          />
          <h2 style={{ textAlign: "center" }}>
            Add Amount From{" "}
            <span style={{ textDecoration: "underline" }}>{product.name}</span>
          </h2>
          <div className={styles.suppliers}>
            <p>Choose Supplier</p>
            <select
              defaultValue={"selected"}
              onChange={(e) => {
                const item = suppliers.find(
                  (item) => item.id === +e.target.value
                );
                setSupplier(item);
                setAmount({ ...amount, supplier_id: e.target.value });
              }}
            >
              <option hidden disabled value={"selected"}>
                choose supplier
              </option>
              {suppliers?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            {supplierAuth && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Supplier Is Required
              </p>
            )}
            <div className={styles.suppliersInfo}>
              <p>
                Name: <span>{supplier?.name}</span>
              </p>
              <p>
                Phone: <span>{supplier?.phone}</span>
              </p>
              <p>
                Email: <span>{supplier?.email}</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={(t) => {
              t.preventDefault();
              setSupplierAuth(false);
              if (!amount.supplier_id) {
                setSupplierAuth(true);
                return;
              }
              setPop("open");
            }}
            className={formStyles.form}
          >
            <div className={formStyles.input}>
              <label htmlFor="amountToAdd">Amount To Add</label>
              <input
                min={1}
                max={1000}
                required
                id="amountToAdd"
                type="number"
                onChange={(e) => {
                  setAmount({ ...amount, amount_to_add: e.target.value });
                }}
                value={amount.amount_to_add}
              />
            </div>
            <div className={formStyles.input}>
              <label htmlFor="priceForOne">Price For One</label>
              <input
                min={1}
                max={10000}
                required
                id="priceForOne"
                type="number"
                onChange={(e) => {
                  setAmount({ ...amount, price_for_one: e.target.value });
                }}
                value={amount?.price_for_one}
              />
            </div>
            <button className="sub-button" type="submit">
              Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddAmounts;
