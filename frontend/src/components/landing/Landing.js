import React from "react";
import { Link } from "react-router-dom";
import landing1 from "../../assest/images/landing1.jpg";
import landing2 from "../../assest/images/landing2.jpg";
import styles from "./landing.module.css";
const Landing = () => {
  return (
    <section className={`${styles.landing} container `}>
      <div className={styles.info}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to={"/products"} className="button">
          SHOP NOW
        </Link>
      </div>
      <div className={styles.images}>
        <img src={landing1} alt="mobile" />
        <img src={landing2} alt="mobile" />
      </div>
    </section>
  );
};

export default Landing;
