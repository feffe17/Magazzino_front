import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Donate from "./pages/Donate"
import Register from "./pages/Register.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
