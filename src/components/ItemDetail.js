const ItemDetail = ({products}) => {
    return(
        <div className="divProd">
            <img className="imgProd" src={products.img}/>
            <li className="li">'{products.marca}<br/>{products.modelo}<br/> ${products.precio}<br/> {products.descripcion}'</li>
        </div>
    )
}

export default ItemDetail;