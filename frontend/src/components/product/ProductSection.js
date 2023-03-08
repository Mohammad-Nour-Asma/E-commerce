import React from "react";
import ProductBox from "./ProductBox";
import styles from "./productSection.module.css";
import { data } from "./productdata";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section className={`section ${styles.feat}`}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className="container">
        <div className={styles.boxes}>
          {data.map((item) => {
            return <ProductBox key={item.id} item={item} />;
          })}
        </div>
        <Link to="/products" className="sub-button">
          ALL PRODUCTS
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
