import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (product) => {
    const filteredProducts = cartItems.filter(
      (item) => item.productId !== product.productId
    );
    setCartItems(filteredProducts);
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
