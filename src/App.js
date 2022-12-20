import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { cartContext } from './context/cartContext'
import { Layout } from './components/Layout'


export function App() {
  return (
    <cartContext.Provider value={[]}>
      <Layout>
        <ItemListContainer className="Container"/>
      </Layout>
    </cartContext.Provider>
  )
}