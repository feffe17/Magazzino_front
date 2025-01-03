import Navbar from "../components/NavBar"
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        <div className="col">Visualizza il tuo inventario</div>
                        <div className="col">Aggiorna il tuo inventario</div>
                        <div className="col">Fast Scan</div>
                        <div className="col">Imposta quantità minime</div>
                    </div>
                </div>
            </main>
        </>
    )
}