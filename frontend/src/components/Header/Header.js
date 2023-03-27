import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "./Menu";
import { useGlobalContext } from "../../context";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { auth, cartdata } = useGlobalContext();
  return (
    <header>
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
            {auth && (
              <Link to="/cart">
                Cart
                <div className={styles.cart}>
                  <BsCartFill />
                  {cartdata.cart && (
                    <div className={styles.num}>{cartdata.cart?.length}</div>
                  )}
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
      </div>
      <div
        className={showMenu ? `${styles.menu}  ${styles.show}` : styles.menu}
      >
        <Menu
          cartDataLength={cartdata.cart?.length}
          setShowMenu={setShowMenu}
        />
      </div>
    </header>
  );
};

export default Header;
