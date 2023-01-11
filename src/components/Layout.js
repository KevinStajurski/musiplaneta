import NavBar from "./NavBar"
import Footer from "./Footer"

export const Layout = ({children}) => {
    return (
        <div className="Main">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}