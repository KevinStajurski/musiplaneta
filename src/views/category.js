import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar";
import products from "../data/products"
import Item from "../components/Item"

const CategoryView = () => {
    const {category} = useParams()
    const filtrados = products.filter((product) => product.categoria === category)
    return (
        <div className='Main'>
            <NavBar/>
            <h1>{category.toUpperCase()}</h1>
            {filtrados.map((product) => (<Item product={product}/>))}
        </div>
    )
}

export default CategoryView;