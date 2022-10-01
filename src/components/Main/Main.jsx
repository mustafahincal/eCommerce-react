import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../Category/Categories";
import ProductList from "../../pages/ProductList/ProductList";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import Error404 from "../../pages/Error404/Error404";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />

        <Route
          path="/products/category/:categoryId"
          element={<ProductList />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Main;
