import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, cantidad: 1 }]);
    }
    setTotalItems(totalItems + 1);
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    if (totalItems > 0) setTotalItems(totalItems - 1);
  };

  const updateItemQuantity = (id, cantidad) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
      )
    );
    setTotalItems(cartItems.reduce((total, item) => total + item.cantidad, 0));
  };

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const calculateTotalItems = () =>
    cartItems.reduce((total, item) => total + item.cantidad, 0);

  const calculateAllCartItems = () =>
    cartItems.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        setTotalItems,
        totalItems,
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        calculateTotalPrice,
        calculateTotalItems,
        calculateAllCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
