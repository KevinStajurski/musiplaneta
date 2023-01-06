import {useState} from "react"
import {ItemCount} from './ItemCount'
const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(1)
    const [currentStock, setCurrentStock] = useState(producto.stock)
    const maxQuantity = currentStock
    console.log(currentStock)

    function handleCount(type) {
        if (type === "mas" && count < maxQuantity) setCount(count + 1)
        if (type === "menos" && count > 1) setCount(count - 1)
    }

    function handleAdd() {
        if (currentStock < count) alert ("No hay mas stock")
        else setCurrentStock (currentStock - count)
    }

    return(
        <div className="detalleProducto">
            <img className="imgProd" src={producto.img} alt=""/>
            <h1 className="nombreProducto">{producto.marca} {producto.modelo}</h1>
            <h2>$ {producto.precio}</h2>
            <h3>Stock: {producto.stock}</h3>
            <span>{producto.descripcion}</span>
            <ItemCount count={count} handleCount={handleCount} handleAdd={handleAdd}/>
        </div>
    )
}

export default ItemDetail;