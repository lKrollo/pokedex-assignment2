import { Link, Outlet } from "react-router-dom"

export default function App(){
    return (
        <>
            <nav class="changePage">
                <Link to="/" id="button">Pokedéx</Link>
                <Link to="/about" id="button">About</Link>
            </nav>
            <Outlet />
        </>
   )
   
}
