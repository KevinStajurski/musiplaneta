import '../App.css'
import Cart from '../assets/cart.png'
const CartWidget = () => {
    return(
        <button className='Icon'>
            <img src={Cart} alt="carrito"/>
        </button>
    )
}

export default CartWidget