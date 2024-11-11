import './ItemDetailContainer.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from './asyncMock';


function ItemDetailContainer() {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct (getProduct(id));
    }, []);

    return (
        <>
            <div className='detail'>
                <img src={product.pictureUrl} alt={product.title} style={{width: 540}}/>
                <div className='detalles'>
                    <p style={{color:"#0F2D4E",fontWeight: 'bold' }}>{product.brand}</p>
                    <h3 style={{fontSize:30, marginBottom:-10, marginTop: -10}}>{product.title}</h3>
                    <p style={{color:"grey"}}>{product.description}</p>
                    <p style={{fontSize:25,fontWeight: 'bold'}}>$ {product.price}</p>
                    <p>{product.availability}</p>
                    
                    <button style={{backgroundColor: "#0F2D4E", color: 'white', marginTop:200}}>Agregar al carrito</button>

                </div>

            </div>

        </>
    );
}

export default ItemDetailContainer;
