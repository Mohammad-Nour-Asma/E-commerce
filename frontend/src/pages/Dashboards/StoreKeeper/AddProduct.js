import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add_product_url } from "../../../assest/Api/Api";
import Popup from "../../../components/popup/Popup";
import AddEditForm from "../dashboard component/AddEditForm";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});
  const [pop, setPop] = useState();

  const addProductHandler = async () => {
    try {
      setError(false);
      setLoading(true);

      let images = [];
      if (item.imagesFiles) {
        images = [...item.imagesFiles];
      }
      const response = await axios.post(
        add_product_url,
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
      console.log(response.data);
      setLoading(false);
      navigate("/storekeeper/all-product");
    } catch (ex) {
      console.log(ex);
      setError(true);
      setLoading(false);
    }
  };

  const token = localStorage?.getItem("token");
  return (
    <div>
      {" "}
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <Popup
        message="Are You Sure Of Adding This Product ?"
        pop={pop}
        setPop={setPop}
        hitApi={addProductHandler}
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

export default AddProduct;
