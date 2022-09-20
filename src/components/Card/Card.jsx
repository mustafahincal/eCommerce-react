import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box
      borderWidth="1px"
      borderRadius={"lg"}
      overflow="hidden"
      border="1px"
      maxW="sm"
    >
      <Link to={"#/"}>
        <Image src="https://picsum.photos/300" alt="product" width={"100%"} />
        <Box px={"6"} py="3">
          <Box d="flex" alignItems={"baseline"}>
            12/12/2021
          </Box>
          <Box mt={"1"} fontWeight="semibold" as="h4" lineHeight={"tight"}>
            MacBook Pro
          </Box>
          <Box>100 TL</Box>
        </Box>
      </Link>
      <Box px={"6"} py="3">
        <Button colorScheme={"blue"}>Add To Cart</Button>
      </Box>
    </Box>
  );
}

export default Card;
