import { Link } from "react-router-dom";

import "./style.css"

export default function Sections() {
    return(
        <main className="sections-screen">
            <h1>Sections Screen</h1>
            <Link to = "/seats">
                <h2>Go to Next</h2>
            </Link>
        </main>

    )
}