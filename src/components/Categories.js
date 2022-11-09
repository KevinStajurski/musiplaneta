import '../App.css'
import Celulares from '../assets/celulares.webp'
import Heladeras from '../assets/heladeras.webp'
import Lavarropas from '../assets/lavarropas.webp'
import Notebooks from '../assets/notebooks.webp'
import TV from '../assets/tv.webp'
const Categories = () => {
    return(
        <div>
            <button className='Icon'>
                <img src={Celulares} alt="celulares"/>
            </button>
            <button className='Icon'>
                <img src={Heladeras} alt="heladeras"/>
            </button>
            <button className='Icon'>
                <img src={Lavarropas} alt="lavarropas"/>
            </button>
            <button className='Icon'>
                <img src={Notebooks} alt="notebooks"/>
            </button>
            <button className='Icon'>
                <img src={TV} alt="televisores"/>
            </button>
        </div>
    )
}

export default Categories