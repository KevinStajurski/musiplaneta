import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import {getProducts} from "../data/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        getProducts().then((productos) => {
        setProducto(productos[id]);
        });
    }, [id])
    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer