import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";

const ItemView = () => {
    return (
        <div className='Main'>
            <NavBar/>
            <ItemDetailContainer />
        </div>
    )
}

export default ItemView;