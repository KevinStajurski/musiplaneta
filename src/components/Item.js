import {Link} from "react-router-dom"
const Item = ({product}) => {
    return(
        <div className="divProd">
            <img className="imgProd" src={product.img} alt=""/>
            <h1 className="nombreProducto">'{product.marca} {product.modelo}'</h1>
            <h2>$ {product.precio}</h2>
            <button><Link to={`/item/${product.id}`} className="links">Detalles</Link></button>
        </div>
    )
}

export default Item;