export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Login</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Donate</a>
                        <a className="nav-link" href="#">Prova</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}