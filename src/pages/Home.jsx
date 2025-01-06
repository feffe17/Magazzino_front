import Navbar from "../components/NavBar"
import { NavLink } from "react-router"
import style from "../components/Home.module.css"
export default function Home() {
    return (
        <>
            <div className={style.background}>
                <div className={style.layer}>
                    <Navbar />
                    <div className="container d-flex justify-content-center align-items-center w-100 h-100">
                        <p className={style.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cumque ad enim assumenda fugit est possimus repellat pariatur similique reiciendis?</p>

                    </div>
                </div>
            </div>

        </>
    )
}