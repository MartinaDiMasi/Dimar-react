import CardWidget from "./CardWidget";
import './NavBar.css';

const NavBar = ({clase,children}) => {
    return (
        <>  
        <div style={{paddingRight:130}}>
            <button className={clase}>Inicio</button>
            <button className={clase}>Productos</button>
            <button className={clase}>Más</button>
        </div>
        {children}
        </>
    )
};

export default NavBar;