import NavBar from "../components/NavBar"
import style from "../components/Home.module.css"
export default function Donate() {
    return (
        <>
            <div className={style.background}>
                <div className={style.layer}>
                    <NavBar />
                    <div className="container d-flex align-items-center flex-column w-100">
                        <p className={style.title}>If you're on this page, you may make a donation to support the development of the project and cover its operational costs.</p>
                        <img className="col-4" src="/img/donate.jpg" alt="" />
                        <a className="btn btn-warning mt-2 text-white" href="https://www.paypal.me/chiaraefede" target="blank"> <i class="bi bi-paypal"></i> Donate with PayPal</a>
                    </div>
                </div>
            </div>
        </>
    )
}