import '../App.css'
import Categories from './Categories'
import CartWidget from './CartWidget'
import Brand from './Brand'
const NavBar = () => {
    return(
        <div className='NavBar'>
            <Brand/>
            <Categories/>
            <CartWidget/>
        </div>
    )
}

export default NavBar