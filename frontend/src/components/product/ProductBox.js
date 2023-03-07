import React from "react";
import { Link } from "react-router-dom";
import styles from "./productSection.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";

const ProductBox = (props) => {
  console.log(props.item);
  return (
    <div className={styles.box}>
      <div className={styles.productLayout}>
        <img className={styles.image} src={props.item.image} alt="mobile" />
        <div className={styles.toProduct}>
          <Link to={"/"}>
            <IoSearchCircleSharp />
          </Link>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h4>{props.item.title}</h4>
        <span>${props.item.price}</span>
      </div>
    </div>
  );
};

export default ProductBox;
