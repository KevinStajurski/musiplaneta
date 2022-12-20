import {useParams} from "react-router-dom"
import products from "../data/products"
import Item from "../components/Item"
import { Layout } from "../components/Layout";

const CategoryView = () => {
    const {category} = useParams()
    const filtrados = products.filter((product) => product.categoria === category)
    return (
        <Layout>
            <h1>{category.toUpperCase()}</h1>
            {filtrados.map((product) => (<Item product={product}/>))}
        </Layout>
    )
}

export default CategoryView;