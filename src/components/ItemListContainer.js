import '../App.css'
import ItemList from './ItemList'
import getProducts from "../data/products"

const [products, setProducts] = useState([]);
useEffect(() => {
    getProducts().then((products) => {
    setProducts;
    });
}, [])
const ItemListContainer = () => {
    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer