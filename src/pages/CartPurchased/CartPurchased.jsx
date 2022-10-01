import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

function CartPurchased() {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Your order has been received!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thank you for choosing us. Do not miss our new products. See you Soon!
      </AlertDescription>
    </Alert>
  );
}

export default CartPurchased;
