import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


export function App() {
  return (
    <div className='Main'>
      <NavBar/>
      <ItemListContainer className="Container"/>
    </div>
  )
} 