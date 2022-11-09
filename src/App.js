import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className='Main'>
      <NavBar/>
      <ItemListContainer className="Container" greeting={"Bienvenido a Musiplaneta!"}/>
    </div>
  )
}

export default App
