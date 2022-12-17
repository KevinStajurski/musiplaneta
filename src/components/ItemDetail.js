import {useState} from "react"
import {ItemCount} from './ItemCount'
const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(1)
    const [currentStock, setCurrentStock] = useState(producto.stock)
    const maxQuantity = currentStock

    function handleCount(type) {
        if (type === "mas" && count < maxQuantity) setCount(count + 1)
        if (type === "menos" && count > 1) setCount(count - 1)
    }

    function handleAdd() {
        if (currentStock<count) alert ("No hay mas stock")
        else setCurrentStock (currentStock - count)        
    }

    return(
        <div className="divProd">
            <img className="imgProd" src={producto.img} alt=""/>
            <li className="li">'{producto.marca}<br/>{producto.modelo}<br/> ${producto.precio}<br/> {producto.descripcion}'</li>
            <ItemCount count={count} handleCount={handleCount} handleAdd={handleAdd}/>
        </div>
    )
}

export default ItemDetail;