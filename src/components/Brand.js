import '../App.css'
import Logo from '../assets/musiplaneta.png'
import {Link} from "react-router-dom"
const Brand = () => {
    return(
        <Link to="/">
            <img src={Logo} alt="logo de la tienda" className='Logo'/>
        </Link>
            
    )
}

export default Brand