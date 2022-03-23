import { Link } from "react-router-dom";

import "./style.css"

export default function Seats() {
    return(
        <main className="seats-screen">
            <h1>Seats Screen</h1>
            <Link to = "/checkout">
                <h2>Go to Next</h2>
            </Link>
        </main>

    )
}