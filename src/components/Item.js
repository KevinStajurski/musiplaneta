import {Link} from "react-router-dom"
const Item = ({product}) => {
    return(
        <div className="divProd">
            <img className="imgProd" src={product.img} alt=""/>
            <li className="li">'{product.marca} {product.modelo}'</li>
            <button><Link to={`/item/${product.id}`} className="links">Detalles</Link></button>
        </div>
    )
}

export default Item;