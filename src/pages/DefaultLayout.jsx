import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
export default function DefaultLayout() {
    return (
        <>
            <header className="bg-secondary p-4 d-flex justify-content-center align-items-center">
                <NavLink className="text-decoration-none text-black" to="/"> <h1>Stock Easy</h1></NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}