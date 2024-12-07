import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./FormCart.css"

const FormCart = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        apellido: '',
        emailRepetido: '',
        pago: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const db = getFirestore();

    const validateForm = () => {
        const errors = {};

        // Validar que todos los campos requeridos estén completos
        if (!formData.name) errors.name = "El nombre es obligatorio";
        if (!formData.email) errors.email = "El email es obligatorio";
        if (!formData.apellido) errors.apellido = "El apellido es obligatorio";
        if (!formData.emailRepetido) errors.emailRepetido = "Es necesario repetir el email";
        if (formData.email !== formData.emailRepetido) errors.emailRepetido = "Los emails no coinciden";
        if (!formData.pago) errors.pago = "Selecciona un método de pago";

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Retorna true si no hay errores
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Si el formulario no es válido, no se envía
        }

        // Crear el objeto de la orden
        const order = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            items: [] // Aquí agregas los productos de la orden
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            const orderId = docRef.id; // El ID generado por Firestore

            navigate(`/order/${orderId}`);
        } catch (error) {
            console.error("Error al generar la orden: ", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="form-cart-container">
            <form className="form-cart" onSubmit={handleSubmit}>
                <h2 className="form-cart-title">Finaliza tu compra</h2>

                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        placeholder="Ingresar tu nombre"
                        type="text"
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                        required
                        className={formErrors.name ? "input-error" : ""}
                    />
                    {formErrors.name && <div className="error">{formErrors.name}</div>}
                </div>

                <div className="form-group">
                    <label>Apellido:</label>
                    <input
                        placeholder="Ingresar tu apellido"
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className={formErrors.apellido ? "input-error" : ""}
                    />
                    {formErrors.apellido && <div className="error">{formErrors.apellido}</div>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        placeholder="Ingresar tu email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={formErrors.email ? "input-error" : ""}
                    />
                    {formErrors.email && <div className="error">{formErrors.email}</div>}
                </div>

                <div className="form-group">
                    <label>Repite tu email:</label>
                    <input
                        placeholder="Repetir tu email"
                        type="email"
                        name="emailRepetido"
                        value={formData.emailRepetido}
                        onChange={handleChange}
                        required
                        className={formErrors.emailRepetido ? "input-error" : ""}
                    />
                    {formErrors.emailRepetido && (
                        <div className="error">{formErrors.emailRepetido}</div>
                    )}
                </div>

                <div className="form-group">
                    <label>Método de pago:</label>
                    <select
                        name="pago"
                        value={formData.pago}
                        onChange={handleChange}
                        required
                        className={formErrors.pago ? "input-error" : ""}
                    >
                        <option value="">Selecciona un método</option>
                        <option value="tarjeta de crédito">Tarjeta de crédito</option>
                        <option value="tarjeta de débito">Tarjeta de débito</option>
                        <option value="transferencia bancaria">Transferencia bancaria</option>
                    </select>
                    {formErrors.pago && <div className="error">{formErrors.pago}</div>}
                </div>

                <button type="submit" className="btn-submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormCart;

