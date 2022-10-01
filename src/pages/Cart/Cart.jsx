import { Alert, Box, Button, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { useCartContext } from "../../contexts/CartContext";

function Cart() {
  const { cartItems, buyProducts } = useCartContext();
  useEffect(() => {
    console.log(cartItems);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.unitPrice, 0);

  const handleBuyProducts = () => {
    buyProducts();
  };

  if (cartItems.length === 0)
    return (
      <Alert status="error" fontWeight={"semibold"}>
        You have not got any product in your cart
      </Alert>
    );
  return (
    <Flex gap="4" justifyContent={"space-between"}>
      <Grid templateColumns={"repeat(3,1fr)"} gap="5" w={"70%"}>
        {cartItems.map((item) => (
          <Product key={item.productId} item={item} />
        ))}
      </Grid>
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        height={"500"}
        bg="gray.200"
        w={"25%"}
        gap="4"
      >
        <Box bg="white" py={"1"} px={"3"} fontSize="20" fontWeight={"bold"}>
          Cart Price {total} $
        </Box>
        <Button
          onClick={handleBuyProducts}
          colorScheme={"blue"}
          fontSize="22"
          py={"6"}
          px="6"
        >
          Buy the Products
        </Button>
      </Flex>
    </Flex>
  );
}

export default Cart;
