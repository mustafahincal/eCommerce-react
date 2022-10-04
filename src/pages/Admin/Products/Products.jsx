import {
  Button,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProductsByPageNo } from "../../../services/productService";

function ProductList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["products-admin"], fetchProductsByPageNo, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExits = lastGroup?.length === 12;
      if (!morePagesExits) return;
      return allGroups.length + 1;
    },
  });

  if (status === "loading")
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

  const handleUpdateProduct = (productId) => {
    console.log(productId);
  };

  const handleDeleteProduct = (productId) => {
    console.log(productId);
  };

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Category Name</Th>
            <Th isNumeric>Unit Price</Th>
            <Th isNumeric>Quantity Per Unit</Th>
            <Th isNumeric>Units In Stock</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((item) => (
                <Tr key={item.productId}>
                  <Td>{item.productName}</Td>
                  <Td>{item.category.categoryName}</Td>
                  <Td isNumeric>{item.unitPrice}</Td>
                  <Td isNumeric>{item.quantityPerUnit}</Td>
                  <Td isNumeric>{item.unitsInStock}</Td>
                  <Td isNumeric>
                    <Button
                      onClick={() => handleUpdateProduct(item.productId)}
                      colorScheme={"green"}
                      variant="outline"
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDeleteProduct(item.productId)}
                      colorScheme={"red"}
                      ml="5"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
      <Flex mt={"10"} justifyContent="center">
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </TableContainer>
  );
}

export default ProductList;
