import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add_supplier_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import Popup from "../../../components/popup/Popup";
import Spinner from "../../../components/Spinner/Spinner";
import formStyle from "../dashboard component/AddEditForm.module.css";
const AddSupplier = () => {
  const [supplierInfo, setSupplierInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pop, setPop] = useState();

  const addSupplier = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(add_supplier_url, {
        token,
        ...supplierInfo,
      });

      setLoading(false);
      navigate(-1);

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

  return (
    <div>
      <Popup
        message={`Do You Want To Add ${supplierInfo.name} To Suppliers List ?`}
        setPop={setPop}
        pop={pop}
        hitApi={addSupplier}
      />{" "}
      <h2 style={{ textAlign: "center" }}>Add Supplier</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <form
          onSubmit={(t) => {
            t.preventDefault();
            setPop("open");
          }}
          className={formStyle.form}
        >
          <div className={formStyle.input}>
            <label htmlFor="name">Supplier Name</label>
            <input
              value={supplierInfo.name}
              required
              id="name"
              type="text"
              onChange={(e) => {
                setSupplierInfo({ ...supplierInfo, name: e.target.value });
              }}
            />
          </div>
          <div className={formStyle.input}>
            <label htmlFor="email">Supplier Email</label>
            <input
              value={supplierInfo.email}
              required
              id="email"
              type="email"
              onChange={(e) => {
                setSupplierInfo({ ...supplierInfo, email: e.target.value });
              }}
            />
          </div>
          <div className={formStyle.input}>
            <label htmlFor="phone">Supplier Phone</label>
            <input
              value={supplierInfo.phone}
              required
              id="phone"
              type="text"
              onChange={(e) => {
                setSupplierInfo({ ...supplierInfo, phone: e.target.value });
              }}
            />
          </div>
          <button className="sub-button" type="submit">
            Add Supplier
          </button>
        </form>
      )}
    </div>
  );
};

export default AddSupplier;
