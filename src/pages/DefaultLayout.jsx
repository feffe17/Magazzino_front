import Navbar from "../components/NavBar"
export default function DefaultLayout() {
    return (
        <>
            <header className="bg-secondary p-4 d-flex justify-content-between align-items-center">
                <h1>Stock Easy</h1>
                <Navbar />
            </header>
        </>
    )
}