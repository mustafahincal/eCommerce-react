import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getProducts } from "../../services/productService";
import { useQuery } from "@tanstack/react-query";

function ProductList() {
  const [products, setProducts] = useState([]);

  const handleBuyProduct = (productId) => {
    console.log(productId);
  };

  const { isLoading, error, data } = useQuery(["products"], () =>
    getProducts()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns={"repeat(3,1fr)"} gap="4">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
