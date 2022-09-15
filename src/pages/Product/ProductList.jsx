import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Product Name</Th>
              <Th>Unit Price</Th>
              <Th>Units In Stock</Th>
              <Th>Quantity Per Unit</Th>
              <Th>Category</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.productId}>
                <Td>{product.productId}</Td>
                <Td>{product.productName}</Td>
                <Td>{product.unitPrice.toFixed(2)}</Td>
                <Td>{product.unitsInStock}</Td>
                <Td>{product.quantityPerUnit}</Td>
                <Td>{product.category.categoryName}</Td>
                <Td>
                  <Button colorScheme="whatsapp" variant="outline">
                    Buy
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
    // <Table striped bordered hover variant="dark">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Product Name</th>
    //       <th>Unit Price</th>
    //       <th>Units In Stock</th>
    //       <th>Quantity Per Unit</th>
    //       <th>Category</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {products.map((product) => (
    //       <tr key={product.productId}>
    //         <td>{product.productId}</td>
    //         <td>{product.productName}</td>
    //         <td>{product.unitPrice.toFixed(2)}</td>
    //         <td>{product.unitsInStock}</td>
    //         <td>{product.quantityPerUnit}</td>
    //         <td>{product.category.categoryName}</td>
    //         <td>
    //           <Button
    //             onClick={() => handleBuyProduct(product.productId)}
    //             variant="primary"
    //           >
    //             Buy
    //           </Button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
  );
}

export default ProductList;
