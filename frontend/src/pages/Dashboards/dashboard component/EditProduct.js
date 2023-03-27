import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EditProduct.module.css";

import axios from "axios";
import { edit_Product_url } from "../../../assest/Api/Api";

import Popup from "../../../components/popup/Popup";
import AddEditForm from "./AddEditForm";

const EditProduct = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const token = localStorage?.getItem("token");

  const [item, setItem] = useState({
    ...location.state.item,
    imagesFiles: null,
  });

  const name = location.state.name;
  const applyChanges = async () => {
    try {
      setError(false);
      setLoading(true);

      let images = [];
      if (item.imagesFiles) {
        images = [...item.imagesFiles];
      }
      const response = await axios.post(
        edit_Product_url,
        {
          ...item,
          token,
          images: images,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      navigate("/all-products");
    } catch (ex) {
      console.log(ex);
      setError(true);
      setLoading(false);
    }
  };

  const [pop, setPop] = useState();
  return (
    <div className={styles.editProduct}>
      <h2 className={styles.title}>
        Edit Product <span style={{ textDecoration: "underline" }}>{name}</span>
      </h2>
      <Popup
        message="Are You Sure Of Editing ?"
        pop={pop}
        setPop={setPop}
        hitApi={applyChanges}
      />
      <AddEditForm
        loading={loading}
        error={error}
        setPop={setPop}
        setItem={setItem}
        item={item}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
};

export default EditProduct;
