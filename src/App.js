import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


export function App() {
  return (
    <div className='Main'>
      <NavBar/>
      <ItemListContainer className="Container"/>
      <ItemDetailContainer/>
    </div>
  )
}