import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";

function Dashboard() {
  return (
    <div>
      <Navi />
      <div className="row mt-5 mx-auto container-xl">
        <div className="col-3">
          <Categories />
        </div>
        <div className="col-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
