import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import { CgProfile } from "react-icons/cg";

const Menu = ({ setShowMenu, cartDataLength }) => {
  const { auth } = useGlobalContext();

  return (
    <>
      {" "}
      <ul>
        <li>
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/products"
          >
            Products
          </Link>
        </li>
      </ul>
      <div className={styles.personal}>
        {auth && (
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/cart"
          >
            Cart
            <div className={styles.cart}>
              <BsCartFill />
              <div className={styles.num}>{cartDataLength}</div>
            </div>
          </Link>
        )}
        {auth ? (
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/profile"
          >
            Profile
            <CgProfile />
          </Link>
        ) : (
          <Link
            onClick={() => {
              setShowMenu((prev) => {
                return !prev;
              });
            }}
            to="/login"
          >
            Login
            <HiUserAdd />
          </Link>
        )}
      </div>
    </>
  );
};

export default Menu;
