import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getProducts } from "../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((result) => setProducts(result.data));
  }, []);

  const handleBuyProduct = (productId) => {
    console.log(productId);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Quantity Per Unit</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
            <td>{product.unitPrice.toFixed(2)}</td>
            <td>{product.unitsInStock}</td>
            <td>{product.quantityPerUnit}</td>
            <td>{product.category.categoryName}</td>
            <td>
              <Button
                onClick={() => handleBuyProduct(product.productId)}
                variant="primary"
              >
                Buy
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
