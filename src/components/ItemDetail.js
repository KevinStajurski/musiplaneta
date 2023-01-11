import {ItemCount} from './ItemCount'
import {useContext} from "react"
import {Context} from "../context/cartContext"
const ItemDetail = ({producto, count, setCount, currentStock, setCurrentStock, maxQuantity}) => {
    const { addItem, isInCart } = useContext(Context)
    function handleCount(type) {
        if (type === "mas" && count < maxQuantity) setCount(count + 1)
        if (type === "menos" && count > 1) setCount(count - 1)
    }

    function handleAdd() {
        if (currentStock < count) alert ("No hay mas stock")
        else {
            setCurrentStock (currentStock - count)
            addItem (producto, count)
        }
    }

    return(
        <div className="detalleProducto">
            <img className="imgProd" src={producto.img} alt=""/>
            <h1 className="nombreProducto">{producto.marca} {producto.modelo}</h1>
            <h2>$ {producto.precio}</h2>
            <h3>Stock: {producto.stock}</h3>
            <p>{producto.descripcion}</p>
            <ItemCount count={count} handleCount={handleCount} handleAdd={handleAdd}/>
        </div>
    )
}

export default ItemDetail;