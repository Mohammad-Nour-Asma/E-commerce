import React from "react";
import { BsCartFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className={`container ${styles.header}`}>
      <div className={styles.logo}>
        <Link to={"/"}>Mobile Shop</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className={styles.personal}>
        <Link to="/cart">
          Cart
          <div className={styles.cart}>
            <BsCartFill />
            <div className={styles.num}>3</div>
          </div>
        </Link>
        <Link to="/login">
          Login
          <HiUserAdd />
        </Link>
      </div>
      <div className={styles.menuIcon}>
        <GoThreeBars />
      </div>

      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
