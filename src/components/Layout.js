import NavBar from "./NavBar"

export const Layout = ({children}) => {
    return (
        <main className='Main'>
            <NavBar/>
            {children}
        </main>
        //Agregar footer
    )
}