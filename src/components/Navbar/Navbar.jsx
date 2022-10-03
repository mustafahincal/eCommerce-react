import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CartSummary from "../CartSummary/CartSummary";
import { useAuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { isLogged, user, logout, isAdmin } = useAuthContext();

  return (
    <div className={styles.navBorder}>
      <nav className={styles.nav + " container"}>
        <div className={styles.left}>
          <Link to={"/"} className={styles.logo}>
            eCommerce
          </Link>

          <ul className={styles.menu}>
            <li>
              <Link to="/main">Products</Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          {!isLogged ? (
            <>
              <Link to="/signin">
                <Button colorScheme="blue" size="md">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button colorScheme="blue" size="md">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <>
              {isAdmin && (
                <Link to="/admin">
                  <Button colorScheme="pink" variant="outline">
                    Admin
                  </Button>
                </Link>
              )}
              <CartSummary />
              <NavLink to="/profile">
                <Button>{user.firstName + " " + user.lastName}</Button>
              </NavLink>
              <Button onClick={logout} colorScheme="red" ml={"3"}>
                Log out
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
