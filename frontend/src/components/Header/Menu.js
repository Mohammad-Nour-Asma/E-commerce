import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import { CgProfile } from "react-icons/cg";

const Menu = () => {
  const { auth } = useGlobalContext();

  return (
    <>
      {" "}
      <ul>
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
        {auth && (
          <Link to="/cart">
            Cart
            <div className={styles.cart}>
              <BsCartFill />
              <div className={styles.num}>3</div>
            </div>
          </Link>
        )}
        {auth ? (
          <Link to="/profile">
            Profile
            <CgProfile />
          </Link>
        ) : (
          <Link to="/login">
            Login
            <HiUserAdd />
          </Link>
        )}
      </div>
    </>
  );
};

export default Menu;
