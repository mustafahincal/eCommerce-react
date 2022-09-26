import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log(cartItems);
  };
  const removeFromCart = (product) => {
    const filteredProducts = cartItems.filter(
      (item) => item.productId !== product.productId
    );
    setCartItems(filteredProducts);
  };

  const findCartItem = (productId) => {
    const control = cartItems.find((item) => item.productId === productId);
    return control;
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    findCartItem,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
