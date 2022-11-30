const ItemDetail = ({producto}) => {
    return(
        <div className="divProd">
            <img className="imgProd" src={producto.img} alt=""/>
            <li className="li">'{producto.marca}<br/>{producto.modelo}<br/> ${producto.precio}<br/> {producto.descripcion}'</li>
        </div>
    )
}

export default ItemDetail;