import React, { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import "./Cart.css"; 

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const removeItem = (id) => {
        removeFromCart(id);
    };

    const increaseQuantity = (id, stock) => {
        if (stock > cart.find(item => item.id === id).quantity) {
            updateQuantity(id, "increase"); 
        } else {
            alert("No hay suficiente stock disponible.");
        }
    };

    const decreaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item.quantity > 1) {
            updateQuantity(id, "decrease");
        }
    };

    const handleCheckout = () => {
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        // Navegar a '/checkout' con el total
        navigate("/checkout", { state: { total: totalAmount } });
    };

    

    return (
        <>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <h2 className="cart-title">
                    {cart.length === 0 ? "CARRITO VACÍO" : "CARRITO DE COMPRAS"}
                </h2>
                <p className="cart-total"> <strong>Total: </strong> $ {cart.reduce((total, item) => total + item.price * item.quantity, 0)} </p>
            </div>
            {cart.length === 0 ? (
                <p style={{paddingLeft: 50}} className="cart-vacio">¡Agrega productos!</p>
            ) : (
                <div>
                    <hr />
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img
                                    className="cart-item-img"
                                    src={item.pictureUrl}
                                    alt={item.title}
                                />
                                <div className="cart-item-details">
                                    <span className="cart-item-title">{item.title}</span>
                                    <span className="cart-item-price"> ${item.price} </span>
                                    <span>Cantidad: {item.quantity}</span>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">-</button>
                                        <span className="item-quantity">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id, item.stock)} className="quantity-button">+</button>
                                    </div>
                                </div>
                                <button className="cart-item-remove-btn" onClick={() => removeItem(item.id)}> Eliminar </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCheckout} className="checkout-btn">Finalizar Compra</button>
                </div>
            )}
        </>
    );
};

export default Cart;
