import React from "react";
import Path from "../../components/Path/Path";
import styles from "./Products.module.css";
import { data } from "./productdata";
import ProductBox from "../../components/product/ProductBox";

const Products = () => {
  return (
    <main className="">
      <Path path="Products" />
      <div className={` container ${styles.all}`}>
        <aside className={styles.filters}>
          <form>
            <input type="text" placeholder="Search" />
            <button className="sub-button" type="submit">
              search
            </button>
          </form>
        </aside>
        <div className={styles.products}>
          <div className={styles.header}>20 Products Found</div>
          <div className={styles.boxes}>
            {data.map((item, index) => {
              return <ProductBox item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
