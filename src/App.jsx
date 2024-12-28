import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
