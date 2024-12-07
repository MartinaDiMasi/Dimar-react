import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, title, description, price, pictureUrl, brand, stock }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(CartContext); 


    const handleAdd = (count) => {
        setQuantity(count); // Actualiza la cantidad seleccionada
        addToCart({ id, title, description, price, pictureUrl, brand, stock }, count); // Agrega al carrito
    };

    return (
        <div className="detail">
            <img src={pictureUrl} alt={title} style={{ width: 540 }} />
            <div className="detalles">
                <p style={{ color: "#0F2D4E", fontWeight: "bold" }}>{brand}</p>
                <h3 style={{ fontSize: 30, marginBottom: -10, marginTop: -10 }}>{title}</h3>
                <p style={{ color: "grey" }}>{description}</p>
                <p style={{ fontSize: 25, fontWeight: "bold" }}>$ {price}</p>
                <p>stock: {stock}</p>

                {quantity === 0 ? (
                    
                    <ItemCount product={{ id, title, price, pictureUrl, brand, stock }} onAdd={handleAdd} />
                ) : (
                    <p style={{ marginTop: "20px", fontWeight: "bold" }}>Producto agregado: {quantity}</p>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
