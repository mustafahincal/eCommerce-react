import { Box, Grid, GridItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styles from "./styles.module.css";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import Home from "./Home/Home";

function Admin() {
  return (
    <div>
      <Grid templateColumns="repeat(10, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <ul className={styles.adminMenu}>
            <NavLink className={styles.menuItem} to="home">
              Home
            </NavLink>

            <NavLink className={styles.menuItem} to="orders">
              Orders
            </NavLink>

            <NavLink className={styles.menuItem} to="products">
              Products
            </NavLink>
          </ul>
        </GridItem>
        <GridItem colSpan={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Admin;
