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
          A mobile shop website is an online store that specializes in selling
          mobile devices such as smartphones, tablets, and accessories. The
          website typically has a professional design with a user-friendly
          interface that allows customers to browse products easily and make
          purchases securely.
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
