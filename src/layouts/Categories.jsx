import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { getCategories } from "../services/categoryService";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result.data));
  }, []);
  return (
    <ListGroup as="ul">
      {categories.map((category) => (
        <ListGroup.Item as="li" key={category.categoryId} className="">
          {category.categoryName}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Categories;
