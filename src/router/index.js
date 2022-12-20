import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import CartView from "../views/cart"
import CategoryView from "../views/category"
import ItemView from "../views/item"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:category",
        element: <CategoryView/>,
    },
    {
        path: "/item/:id",
        element: <ItemView />,
    },
    {
        path: "/cart",
        element: <CartView/>,
    }
])