import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cartItems")) || [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart);
  const navigate = useNavigate();

  const { isLogged } = useAuthContext();
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (!isLogged) navigate("/signin");
    else setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (product) => {
    const filteredProducts = cartItems.filter(
      (item) => item.productId !== product.productId
    );
    setCartItems(filteredProducts);
  };

  const buyProducts = () => {
    setCartItems([]);
    navigate("/cartPurchased");
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    buyProducts,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
