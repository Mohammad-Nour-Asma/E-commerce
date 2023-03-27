import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import styles from "./productSection.module.css";
import { Link } from "react-router-dom";
import { get_last_three_products_url } from "../../assest/Api/Api";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(get_last_three_products_url);

      setProducts(response.data.products);

      setLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className={`section ${styles.feat}`}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className="container">
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error />
        ) : (
          <div className={styles.boxes}>
            {products?.map((item) => {
              return <ProductBox key={item.id} item={item} />;
            })}
          </div>
        )}
        <Link to="/products" className="sub-button">
          ALL PRODUCTS
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
