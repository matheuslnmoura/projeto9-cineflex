import { Link } from "react-router-dom";

import "./style.css"
import Footer from "../Footer";

export default function Checkout() {
    return(
        <>
            <section className="checkout-screen">
                <h1>Pedido feito com sucesso!</h1>
                <div className="container">
                    <div className="section resume">
                        <h2>Filme e sessão</h2>
                        <p>Enola Homes</p>
                        <p>24/06/2021 15:00</p>
                    
                    </div>
                    <div className="seats resume">
                        <h2>Ingressos</h2>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </div>
                    <div className="client resume">
                        <h2>Comprador</h2>
                        <p>João da Silva Sauro</p>
                        <p>CPF: 123.456.789-00</p>
                    </div>
                </div>
                <button>Voltar para Home</button>
            </section>
        </>

    )
}

