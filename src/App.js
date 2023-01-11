import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { CartContextProvider } from './context/cartContext'
import { Layout } from './components/Layout'


export function App() {
  return (
    <CartContextProvider>
        <Layout>
          <ItemListContainer/>
        </Layout>
    </CartContextProvider>
  )
}