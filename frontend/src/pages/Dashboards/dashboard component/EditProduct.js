import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EditProduct.module.css";
import formStyle from "./AddEditForm.module.css";
import axios from "axios";
import { get_brands_url } from "../../../assest/Api/Api";
import Spinner from "../../../components/Spinner/Spinner";

const EditProduct = (props) => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [brandsError, setBrandsError] = useState(false);
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      setBrandsError(false);
      setLoading(true);
      const response = await axios.get(get_brands_url);
      setBrands(response.data.brands);
      setLoading(false);
    } catch (ex) {
      setBrandsError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBrands();
  }, []);
  const [item, setItem] = useState(location.state.item);
  const name = location.state.name;
  return (
    <div className={styles.editProduct}>
      <h2 className={styles.title}>
        Edit Product <span style={{ textDecoration: "underline" }}>{name}</span>
      </h2>

      <form className={formStyle.form}>
        <div className={formStyle.input}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => {
              setItem({ ...item, name: e.target.value });
            }}
            value={item.name}
          />
        </div>
        <div className={formStyle.input}>
          <label htmlFor="processor">Processor</label>
          <input
            id="processor"
            type="text"
            onChange={(e) => {
              setItem({ ...item, processor: e.target.value });
            }}
            value={item.processor}
          />
        </div>
        <div className={formStyle.input}>
          <label htmlFor="ram">Ram</label>
          <input
            id="ram"
            type="number"
            onChange={(e) => {
              setItem({ ...item, ram: e.target.value });
            }}
            value={item.ram}
          />
        </div>
        <div className={formStyle.input}>
          <label htmlFor="priceForSelling">Price For Selling</label>
          <input
            id="priceForSelling"
            type="number"
            onChange={(e) => {
              setItem({ ...item, price_for_selling: e.target.value });
            }}
            value={item.price_for_selling}
          />
        </div>
        <div className={formStyle.input}>
          <label htmlFor="description">Description</label>
          <textarea
            rows={8}
            cols={50}
            id="description"
            type="text"
            onChange={(e) => {
              setItem({ ...item, description: e.target.value });
            }}
            value={item.description}
          ></textarea>
        </div>
        <div className={formStyle.input}>
          <label htmlFor="brand">Brand</label>
          {loading ? (
            <Spinner />
          ) : (
            <select>
              {brands?.map((brand) => {
                return (
                  <option
                    key={brand.id}
                    selected={brand.name === item.brand ? true : false}
                    value={brand.id}
                  >
                    {brand.name}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div className={formStyle.input}>
          <label>Choose Images</label>
          <input type="file" multiple />
        </div>
        <button className="sub-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
