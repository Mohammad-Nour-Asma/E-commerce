import React from "react";
import { Link } from "react-router-dom";
import styles from "./productSection.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";
import { domain } from "../../assest/Api/Api";

const ProductBox = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.productLayout}>
        <img
          className={styles.image}
          src={`${domain}${props.item.image}`}
          alt="mobile"
        />
        <div className={styles.toProduct}>
          <Link to={`/details/${props.item.id}`}>
            <IoSearchCircleSharp />
          </Link>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h4>{props.item.name}</h4>
        <span>${props.item.price}</span>
      </div>
    </div>
  );
};

export default ProductBox;
