import NavBar from "./NavBar"
import Footer from "./Footer"

export const Layout = ({children}) => {
    return (
        <div className='Main'>
            <main>
                <NavBar/>
                {children}
            </main>
            <Footer/>
        </div>
    )
}