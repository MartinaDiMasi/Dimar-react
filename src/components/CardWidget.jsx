import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { cartCount } = useCart();
    
    return(
        <>
            <section style={{display: "flex", alignItems:"center",gap:10, paddingRight:35}}>
                <button >
                    <Link to="/cart">🛒</Link>
                </button> 
                <p style={{fontSize: 20, color: "black"}}>{cartCount}</p>
            </section>  
        </>
    )
}

export default CardWidget;