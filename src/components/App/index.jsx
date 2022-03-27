import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import "./style.css"
import Header from "../Header"
import Movies from "../Movies"
import Sections from "../Sections"
import Seats from "../Seats"
import Checkout from "../Checkout"



export default function App() {
    const [checkoutInfo, setCheckoutInfo] = useState([])
    return (
        <main className="app-main">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path = "/" element =  {<Movies />} />
                    <Route path = "/sections/:movieId" element =  {<Sections />} />
                    <Route path = "/seats/:sectionId" element =  {<Seats setCheckoutInfo={setCheckoutInfo} />} />
                    <Route path = "/checkout" element =  {<Checkout checkoutInfo = {checkoutInfo} setCheckoutInfo={setCheckoutInfo} />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}