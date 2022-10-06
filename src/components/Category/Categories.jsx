import { useEffect, useState } from "react";
import { fetchCategories, getCategories } from "../../services/categoryService";
import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import Loading from "../Loading/Loading";

function Categories() {
  const { isLoading, error, data } = useQuery(["categories"], () =>
    fetchCategories()
  );

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>An error has occurred</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

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
