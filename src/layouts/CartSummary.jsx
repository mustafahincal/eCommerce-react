import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

function CartSummary() {
  return (
    <div>
      <NavDropdown
        title="Cart"
        id="navbarScrollingDropdown"
        className="text-light"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default CartSummary;
