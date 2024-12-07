import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            <section className="articulo">
                {items.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </section> 
        </>
    );
};

export default ItemList;
