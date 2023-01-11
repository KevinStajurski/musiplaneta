import {Layout} from "../components/Layout"
import { CartContextProvider, Context } from "../context/cartContext"

const CartView = () => {
    return (
        <Layout>
            <div className="a">
                <CartContextProvider>
                    <h1> Carrito </h1>
                    <Context.Consumer>
                        {({total})=>{
                            return(
                                <h2>El total es: {total}</h2>
                            )
                        }}
                    </Context.Consumer>
                </CartContextProvider>
            </div>
        </Layout>
    )
}

export default CartView