import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {cartContext} from "./context/cartContext"


export function App() {
  return (
    <cartContext.Provider value={[]}>
      <div className='Main'>
        <NavBar/>
        <ItemListContainer className="Container"/>
      </div>
    </cartContext.Provider>
  )
} 