import '../App.css' 
import ItemList from './ItemList'
import {getProducts} from "../data/products"
import { useState,useEffect } from 'react';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((products) => {
        setProducts(products);
        });
    }, [])

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer