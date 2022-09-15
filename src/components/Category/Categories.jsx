import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import styles from "./styles.module.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result.data));
  }, []);
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category.categoryId} className={styles.listItem}>
          {category.categoryName}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
