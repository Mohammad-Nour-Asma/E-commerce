import React from "react";
import styles from "./Culture.module.css";
import { MdHistoryEdu } from "react-icons/md";
import { IoTelescopeOutline } from "react-icons/io5";
import { GiSupersonicArrow } from "react-icons/gi";

const Culture = () => {
  return (
    <section className={` section ${styles.cultrue}`}>
      <div className="container">
        <div className={styles.header}>
          <p>
            Mobile Shop <br />
            Built Only For You
          </p>
          <p>
            Get the latest mobile devices at unbeatable prices! Shop now at our
            online store and enjoy free shipping on all orders.
          </p>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div>
              <GiSupersonicArrow />
            </div>
            <span>Mission</span>
            <p>
              Our mission is to provide our customers with the latest and
              greatest mobile devices and accessories at affordable prices,
              while delivering exceptional customer service and support.
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <IoTelescopeOutline />
            </div>
            <span>Vision</span>
            <p>
              Our vision is to become the leading online destination for mobile
              devices and accessories, providing our customers with a seamless
              shopping experience and access to the latest technology.
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <MdHistoryEdu />
            </div>
            <span>History</span>
            <p>
              Starting from humble beginnings, we have grown into a reputable
              online retailer with a vast selection of mobile devices and
              accessories from top brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
