import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`container ${styles.header}`}>
      <div>
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
        <button
          onClick={() => {
            setShowMenu((prev) => {
              return !prev;
            });
          }}
          className={styles.menuIcon}
        >
          <GoThreeBars />
        </button>
      </div>
      <div className={showMenu ? `${styles.menu} ${styles.show}` : styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
