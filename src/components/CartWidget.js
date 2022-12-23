import '../App.css'
import Cart from '../assets/cart.png'
import {Link} from "react-router-dom"

const CartWidget = () => {
    return(
        <button className='Icon'>
            <Link to="/cart">
                <img src={Cart} alt="carrito"/>
            </Link>
        </button>
    )
}

export default CartWidget