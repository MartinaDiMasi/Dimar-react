import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"; 
import { useState, useEffect, useContext } from "react";
import { getSingleProduct} from '../firebase/firebase';

export default function ItemDetailContainer() {
        const { id } = useParams();
        const [singleProd, setSingleProd] = useState(null);

        useEffect(() => {
                getSingleProduct(id).then((product) => {
                        setSingleProd(product);
                });
        }, []);

        return (
                <>
                {singleProd && ( 
                        <ItemDetail
                                id={singleProd.id}
                                title={singleProd.title}
                                description={singleProd.description}
                                price={singleProd.price}
                                pictureUrl={singleProd.pictureUrl}
                                brand={singleProd.brand}
                                stock={singleProd.stock}
                        />
                )}
                </>
        );
}