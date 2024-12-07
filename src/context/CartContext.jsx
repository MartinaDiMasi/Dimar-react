import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
  
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
