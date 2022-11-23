import { useEffect, useState } from "react";
import {getProducts} from "../data/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((products) => {
        setProducts(products[0]);
        });
    }, [])
    return <ItemDetail products={products}/>
}

export default ItemDetailContainer
