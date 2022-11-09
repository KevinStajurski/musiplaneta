import Celulares from '../assets/celulares.webp'
import Heladeras from '../assets/heladeras.webp'
import Lavarropas from '../assets/lavarropas.webp'
import Notebooks from '../assets/notebooks.webp'
import TV from '../assets/tv.webp'
const Categories = () => {
    return(
        <div>
            <button>
                <img src={Celulares} alt="celulares"/>
            </button>
            <button>
                <img src={Heladeras} alt="heladeras"/>
            </button>
            <button>
                <img src={Lavarropas} alt="lavarropas"/>
            </button>
            <button>
                <img src={Notebooks} alt="notebooks"/>
            </button>
            <button>
                <img src={TV} alt="televisores"/>
            </button>
        </div>
    )
}

export default Categories