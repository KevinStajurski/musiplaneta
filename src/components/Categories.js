import '../App.css'
import Celulares from '../assets/celulares.webp'
import Heladeras from '../assets/heladeras.webp'
import Lavarropas from '../assets/lavarropas.webp'
import Notebooks from '../assets/notebooks.webp'
import TV from '../assets/tv.webp'
import {Link} from "react-router-dom"
const Categories = () => {
    return(
        <div>
            <Link to="/category/celulares" className='Icon'>
                <img src={Celulares} alt="celulares"/>
            </Link>
            <Link to="/category/heladeras" className='Icon'>
                <img src={Heladeras} alt="heladeras"/>
            </Link>
            <Link to="/category/lavarropas" className='Icon'>
                <img src={Lavarropas} alt="lavarropas"/>
            </Link>
            <Link to="/category/notebooks" className='Icon'>
                <img src={Notebooks} alt="notebooks"/>
            </Link>
            <Link to="/category/televisores" className='Icon'>
                <img src={TV} alt="televisores"/>
            </Link>
        </div>
    )
}

export default Categories