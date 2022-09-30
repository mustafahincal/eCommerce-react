import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import { DeleteIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

function CartSummary() {
  const { cartItems, removeFromCart } = useCartContext();

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Your Cart {cartItems.length}
      </MenuButton>
      <MenuList>
        {cartItems.map((cartItem, index) => (
          <MenuItem key={index} py={5} border="1px" borderColor={"gray.300"}>
            <span>{cartItem.productName}</span>
          </MenuItem>
        ))}
        <MenuItem
          w={"full"}
          px={0}
          py={5}
          border="1px"
          borderColor={"gray.300"}
          backgroundColor={"green.300"}
          color={"white"}
          textAlign={"center"}
          _hover={{
            background: "green.400",
          }}
          fontSize="20px"
          fontWeight="bold"
        >
          <NavLink
            to="/cart"
            style={{
              width: "100%",
            }}
          >
            Your Cart
          </NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default CartSummary;
