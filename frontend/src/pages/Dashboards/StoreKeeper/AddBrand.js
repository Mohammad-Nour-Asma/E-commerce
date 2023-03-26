import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add_brand_url } from "../../../assest/Api/Api";
import Error from "../../../components/Error/Error";
import Popup from "../../../components/popup/Popup";
import Spinner from "../../../components/Spinner/Spinner";
import formStyle from "../dashboard component/AddEditForm.module.css";
const AddBrand = () => {
  const [brand, setBrand] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pop, setPop] = useState();

  const addBrand = async () => {
    const token = localStorage.getItem("token");
    try {
      setError(false);
      setLoading(true);
      const resp = await axios.post(add_brand_url, {
        token,
        name: brand,
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
        message={`Do You Want To Add ${brand} To Brands List ?`}
        setPop={setPop}
        pop={pop}
        hitApi={addBrand}
      />{" "}
      <h2 style={{ textAlign: "center" }}>Add New Brand</h2>
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
            <label htmlFor="name">Brand Name</label>
            <input
              value={brand}
              required
              id="name"
              type="text"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </div>

          <button className="sub-button" type="submit">
            Add Brand
          </button>
        </form>
      )}
    </div>
  );
};

export default AddBrand;
