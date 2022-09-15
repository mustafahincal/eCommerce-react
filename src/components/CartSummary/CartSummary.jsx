import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

function CartSummary() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Your Cart
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
        <MenuItem minH="40px">
          <span>Simon the pensive</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default CartSummary;
