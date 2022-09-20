import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getProducts } from "../../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((result) => setProducts(result.data));
  }, []);

  const handleBuyProduct = (productId) => {
    console.log(productId);
  };

  return (
    <div>
      <Grid templateColumns={"repeat(3,1fr)"} gap="4">
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default ProductList;
