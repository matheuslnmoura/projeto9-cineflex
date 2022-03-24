import { Link } from "react-router-dom";

import "./style.css"

export default function Checkout() {
    return(
        <section className="checkout-screen">
            <h1>Checkout Screen</h1>
            <Link to = "/">
                <h2>Back To Start</h2>
            </Link>
        </section>

    )
}