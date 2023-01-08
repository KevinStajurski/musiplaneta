import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);
    const [count, setCount] = useState(1)
    const [currentStock, setCurrentStock] = useState(0)
    const [maxQuantity, setMaxQuantity] = useState(0)

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db, "items", id)
        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setProducto({id, ...snapshot.data()})
                setCurrentStock(producto.stock)
                setMaxQuantity(producto.stock)
            }
        })
    },[id, producto.stock])

    return <ItemDetail producto={producto} count={count} setCount={setCount} currentStock={currentStock} setCurrentStock={setCurrentStock} maxQuantity={maxQuantity}/>
}

export default ItemDetailContainer