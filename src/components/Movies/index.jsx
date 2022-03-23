import { Link } from "react-router-dom";

import "./style.css"

export default function Movies() {
    return(
        <main className="movies-screen">
            <h1>Movies Screen</h1>
            <Link to = "/sections">
                <h2>Go to Next</h2>
            </Link>
        </main>

    )
}