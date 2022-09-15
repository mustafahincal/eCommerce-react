import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CartSummary from "../CartSummary/CartSummary";

function Navbar() {
  return (
    <div className={styles.navBorder}>
      <nav className={styles.nav + " container"}>
        <div className={styles.left}>
          <Link to={"/"} className="logo">
            eCommerce
          </Link>

          <ul className={styles.menu}>
            <li>
              <Link to="/main">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <CartSummary />

          <Link to={"signin"}>
            <Button colorScheme="blue" size="md">
              Login
            </Button>
          </Link>

          <Link to={"signup"}>
            <Button colorScheme="blue" size="md">
              Register
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
