import { createContext, useState } from "react"

export const Context = createContext({})

export const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const [qty,setQty] = useState(0)
    const [total,setTotal] = useState(0)

    function addItem (item, cantidad) {
        if (isInCart(item.id)) {
            const modificado = cart.map((producto) => {
                if (producto.id === item.id) {
                    producto.cantidad += cantidad
                }
                return producto
            })
            setCart(modificado)
        } else {
            setCart([...cart, {...item, cantidad}])
        }
        setQty(qty+cantidad)
        setTotal(total+(item.precio*cantidad))
    }

    function deleteItem (id) {
        const found = cart.find (producto => producto.id === id)
        setQty(qty - found.cantidad)
        setTotal(total - (found.precio * found.cantidad))
    }

    function clear() {
        setCart([])
        setQty(0)
        setTotal(0)
    }

    function isInCart (id) {
        cart.some((item) => item.id === id)
    }
    
    return (
        <Context.Provider value={{cart, setCart, qty, setQty, total, setTotal, addItem, deleteItem, clear, isInCart}}>
            {children}
        </Context.Provider>
    )
}