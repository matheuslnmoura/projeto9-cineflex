import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./style.css"
import Movies from "../Movies"
import Sections from "../Sections"
import Seats from "../Seats"
import Checkout from "../Checkout"



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element =  {<Movies />} />
                <Route path = "/sections" element =  {<Sections />} />
                <Route path = "/seats" element =  {<Seats />} />
                <Route path = "/checkout" element =  {<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}