import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./style.css"
import Header from "../Header"
import Movies from "../Movies"
import Sections from "../Sections"
import Seats from "../Seats"
import Checkout from "../Checkout"



export default function App() {
    return (
        <main className="app-main">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path = "/" element =  {<Seats     />} />
                    <Route path = "/" element =  {<Movies />} />
                    <Route path = "/sections" element =  {<Sections />} />
                    <Route path = "/seats" element =  {<Seats />} />
                    <Route path = "/checkout" element =  {<Checkout />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}