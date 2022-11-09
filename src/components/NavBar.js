import '../App.css'
import Categories from './Categories'
import CartWidget from './CartWidget'
const NavBar = () => {
    return(
        <div className='NavBar'>
            <Categories/>
            <CartWidget/>
        </div>
    )
}

export default NavBar