import {useParams} from "react-router-dom"
import Item from "../components/Item"
import { Layout } from "../components/Layout";
import {getDocs, getFirestore, collection} from "firebase/firestore"
import { useState,useEffect } from 'react';

const CategoryView = () => {
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

    const {category} = useParams()
    const filtrados = products.filter((product) => product.categoria === category)
    return (
        <Layout>
                <div className="a">
                    <h1 className="category">{category.toUpperCase()}</h1>
                    <div className="containerDiv">
                        {filtrados.map((product) => (<Item product={product}/>))}
                    </div>
                </div>
        </Layout>
    )
}

export default CategoryView;