import React from "react";
import Path from "../../components/Path/Path";
import about from "../../assest/images/about.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <main className="">
      <Path path="About" />
      <div className={`container ${styles.about}`}>
        <div className={styles.image}>
          <img src={about} alt="about us" />
        </div>
        <div className={` container ${styles.info}`}>
          <h1 className={styles.heading}>Our Story</h1>
          <p>
            At our online mobile store, we are committed to providing a seamless
            and secure shopping experience for our customers. We offer multiple
            payment options, including credit card, PayPal, and Apple Pay, and
            our website is designed with the latest security features to protect
            our customers' personal and financial information. We also offer
            fast and reliable shipping, with most orders processed and shipped
            within 24 hours.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
