import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
export default function DefaultLayout() {
    return (
        <>
            <header className="bg-header p-4 d-flex justify-content-center align-items-center">
                <NavLink className="text-decoration-none text-warning" to="/"> <h1>Stock Easy</h1></NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}