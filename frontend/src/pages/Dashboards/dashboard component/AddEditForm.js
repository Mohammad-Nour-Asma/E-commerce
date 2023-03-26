import React, { useEffect, useState } from "react";
import formStyle from "./AddEditForm.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import { get_brands_url } from "../../../assest/Api/Api";
import axios from "axios";
import { Link } from "react-router-dom";

const AddEditForm = ({
  loading,
  error,
  setPop,
  setItem,
  item,
  setLoading,
  setError,
}) => {
  const [brands, setBrands] = useState();
  const getBrands = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(get_brands_url);
      setBrands(response.data.brands);
      response.data.brands?.forEach((brand) => {
        if (brand.name === item.brand) {
          setItem({ ...item, brand_id: brand.id });
        }
      });
      setLoading(false);
    } catch (ex) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
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
            <label htmlFor="brand">Brand</label>

            <select
              onChange={(e) => {
                setItem({ ...item, brand_id: e.target.value });
              }}
              defaultValue={item.brand_id}
            >
              {brands?.map((brand) => {
                return (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                );
              })}
            </select>
            <Link to={"/storekeeper/add-brand"}>Add New Brand ?</Link>
          </div>
          <div className={formStyle.input}>
            <label htmlFor="name">Name</label>
            <input
              required
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
              required
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
              required
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
              required
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
              required
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
            <label>Choose Images</label>
            <input
              onChange={(e) => {
                setItem({ ...item, imagesFiles: e.target.files });
              }}
              type="file"
              multiple
              accept="image/*"
            />
          </div>
          <button className="sub-button" type="submit">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default AddEditForm;
