import '../App.css' 
import ItemList from './ItemList'
import { useState,useEffect } from 'react';
import {getDocs, getFirestore, collection} from "firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection).then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(products)
        })
    },[])

    return(
            <ItemList products={products}/>
    )
}

export default ItemListContainer