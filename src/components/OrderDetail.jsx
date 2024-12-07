import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './OrderDetail.css';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchOrder = async () => {
      const docRef = doc(db, 'orders', orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOrder(docSnap.data());
      } else {
        console.log("No se encontró la orden");
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <div className="loading-text">Cargando...</div>;
  }

  return (
    <div className="order-detail-container">
      <h1>Detalles de la Orden</h1>
      <p><strong>Order ID:</strong> {orderId}</p>
      <p><strong>Nombre:</strong> {order.name}</p>
      <p><strong>Email:</strong> {order.email}</p>
    </div>
  );
};

export default OrderDetail;
