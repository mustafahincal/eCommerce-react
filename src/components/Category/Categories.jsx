import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";

function Categories() {
  const { isLoading, error, data } = useQuery(["categories"], () =>
    getCategories()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <ul className={styles.list}>
      {data.map((category) => (
        <li key={category.categoryId} className={styles.listItem}>
          {category.categoryName}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
