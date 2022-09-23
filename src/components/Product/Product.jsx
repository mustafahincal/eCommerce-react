import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

function Product({ item }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius={"lg"}
      overflow="hidden"
      border="1px"
      maxW="sm"
      mb={"3"}
    >
      <Link to={`/products/${item.productId}`}>
        <Image
          src="https://picsum.photos/500"
          alt="product"
          width={"100%"}
          loading="lazy"
        />
        <Box px={"6"} py="3">
          <Box d="flex" alignItems={"baseline"}>
            22/09/2022
          </Box>
          <Box mt={"1"} fontWeight="semibold" as="h4" lineHeight={"tight"}>
            {item.productName}
          </Box>
          <Box mb="2" fontWeight="semibold" as="h4" lineHeight={"tight"}>
            {item.category.categoryName}
          </Box>
          <Box> {item.unitPrice} $</Box>
          <Box> {item.unitsInStock} left</Box>
        </Box>
      </Link>
      <Box px={"6"} pb="3">
        <Button colorScheme={"blue"}>Add To Cart</Button>
      </Box>
    </Box>
  );
}

export default Product;
