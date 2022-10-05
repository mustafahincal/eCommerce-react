import { useEffect, useState } from "react";
import { fetchCategories, getCategories } from "../../services/categoryService";
import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";
import { Flex, Spinner } from "@chakra-ui/react";

function Categories() {
  const { isLoading, error, data } = useQuery(["categories"], () =>
    fetchCategories()
  );

  if (isLoading)
    return (
      <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red"
        />
      </Flex>
    );

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
