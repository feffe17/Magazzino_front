import NavBar from "../components/NavBar"
import style from "../components/Home.module.css"
import { NavLink } from "react-router"
export default function AbouteUs() {
    return (
        <>
            <div className={style.background}>
                <div className={style.layer}>
                    <NavBar />
                    <div className="container d-flex align-items-center flex-column w-100">
                        <p className={style.aboutus}>Stock Easy is a project that started as a playful experiment by a solo developer to gain experience. It is currently in beta and undergoing continuous updates. The software is free and will remain so until a final version is reached.
                            On this page, you will find my contact details in case you want to report a bug or any general issue. I will carefully review every report. Many features, such as password recovery, are not yet implemented but will be gradually added over time.
                            If you like the project and want to support it, you can visit the <NavLink className="text-warning" to={"/Donate"}>DONATE</NavLink>  page, where you’ll have the option to make a free contribution that will help cover management costs.</p>
                        <div className="mt-5">
                            <h3 className="text-warning text-center">Contacts</h3>
                            <ul className="list-unstyled text-center">
                                <li className="text-warning mb-1">Email: <a className="text-white" href="mailto:feffe1702@gmail.com">feffe1702@gmail.com</a></li>
                                <li className="text-warning mb-1">Telegram: <a className="text-white" href="https://t.me/Dimuuuu" target="blank">t.me/Dimuuuu</a></li>
                                <li className="text-warning mb-1">Instagram: <a className="text-white" href="https://www.instagram.com/_dimuu_/#" target="blank">_dimuu_</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}