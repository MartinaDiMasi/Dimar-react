import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemCount = ({ product }) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(1);

  const handleInc = () => {
    if (count < product.stock) setCount(count + 1);
  };

  const handleDec = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    addToCart(product, count);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button onClick={handleDec}>-</button>
        <p>{count}</p>
        <button onClick={handleInc}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
