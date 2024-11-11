import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { promesa } from './asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting, clase }) => {
    const [items, setItems] = useState([]);
    const { category } = useParams(); 

    useEffect(() => {
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    const itemsAMostrar = category ? items.filter(item => item.category === category) : items;

    return (
        <>
            <h2 className={clase}>{greeting}</h2>
            <ItemList items={itemsAMostrar} />
        </>
    );
};

export default ItemListContainer;
