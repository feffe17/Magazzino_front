import Navbar from "../components/NavBar"
import { NavLink } from "react-router"
import style from "../components/Home.module.css"
export default function Home() {
    return (
        <>
            <div className={style.background}>
                <div className={style.layer}>
                    <Navbar />
                    <div className="container d-flex align-items-center flex-column w-100">
                        <p className={style.title}>Fast and easy administration for your storage</p>
                        <button className="btn btn-warning col-6">Get Started!</button>

                    </div>
                </div>
            </div>

        </>
    )
}