import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({id, title,availability,price,pictureUrl}) =>{
    return(
    <>
        <article className="card">
            <img src={pictureUrl} alt="" />
            <div className="texto-card">
                <h4>{title}</h4>
                <p>{availability}</p>
                <p style={{fontSize:18,fontWeight: 'bold'}}>${price}</p>
                <button className="boton-detalles">
                    <Link to= {`/item/${id}`} style={{color:"white"}}>Mas Detalles</Link>
                </button>
            </div> 
        </article>
    
    </>)
}

export default Item;