import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './ItemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../firebase/firebase';

export default function ItemListContainer() {
    const [myProds, setMyProds] = useState([]);
    const { categoryId } = useParams(); 

    useEffect(() => {
        getProducts().then((products) => {
            
            if (categoryId) {
                const filteredProducts = products.filter((product) => product.category === categoryId);
                setMyProds(filteredProducts);
            } else {
                setMyProds(products);
            }
            
        });
    }, [categoryId]); 

    return (
        <>
            {myProds.length > 0 ? (
                <ItemList items={myProds} />
            ) : (
                <p>Cargando productos...</p>
            )}
        </>
    );
}
