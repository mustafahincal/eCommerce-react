import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../Category/Categories";
import ProductList from "../../pages/ProductList/ProductList";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";

function Main() {
  return (
    <div>
      <Grid templateColumns="repeat(10, 1fr)" gap={5}>
        <GridItem colSpan={2}>
          <Categories />
        </GridItem>
        <GridItem colSpan={8}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />

            <Route
              path="/products/category/:categoryId"
              element={<ProductList />}
            />
          </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Main;
