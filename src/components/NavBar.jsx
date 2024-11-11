import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({clase,children}) => {
    return (
        <>  
        <div style={{paddingRight:130}}>
            <button className={clase}>
                <Link to= '/category/ropa' style={{color:"white"}}>Ropa</Link>
            </button>
            <button className={clase}>
                <Link to= '/category/zapatillas' style={{color:"white"}}>Zapatillas</Link>
            </button>
            <button className={clase}>
                <Link to= '/category/accesorios' style={{color:"white"}}>Accesorios</Link>
            </button>
        </div>
        {children}
        </>
    )
};

export default NavBar;