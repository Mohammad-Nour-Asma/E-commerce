import React from "react";
import ProductBox from "./ProductBox";
import styles from "./productSection.module.css";
import { data } from "./productdata";

const ProductSection = () => {
  return (
    <section className={`section ${styles.feat}`}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className="container">
        <div className={styles.boxes}>
          {data.map((item) => {
            return (
              <ProductBox
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
        <a href="/product" className="sub-button">
          ALL PRODUCTS
        </a>
      </div>
    </section>
  );
};

export default ProductSection;
