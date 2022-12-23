import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db, "items", id)
        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setProducto({id, ...snapshot.data()})
            }
        })
    },[])

    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer