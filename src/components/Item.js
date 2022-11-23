const Item = ({product}) => {
    return(
        <div className="divProd">
            <img className="imgProd" src={product.img}/>
            <li className="li">'{product.marca} {product.modelo}'</li>
        </div>
    )
}

export default Item;