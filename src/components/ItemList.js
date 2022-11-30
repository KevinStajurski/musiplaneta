import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <ul className="ul">
            {products.map((product) => (
                <Item product={product}/>
            ))}
        </ul>
    )
}

export default ItemList;