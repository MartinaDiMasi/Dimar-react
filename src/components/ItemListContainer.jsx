import './ItemListContainer.css';

const ItemListContainer = ({greeting,clase}) => {
    return(
        <>
            <h2 className={clase}>{greeting}</h2>
        </>
    )
};

export default ItemListContainer;