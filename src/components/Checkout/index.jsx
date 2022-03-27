import { Link } from "react-router-dom";

import "./style.css"

/*

buyerInfo:
cpf: "129.389.393-44"
ids: (2) [7495, 7496]
name: "Projeto Cineflex"
[[Prototype]]: Object
date: "26/10/2021"
seatsNumber: (2) ['45', '46']
title: "Rogue"

*/

export default function Checkout(props) {
    const {checkoutInfo, setCheckoutInfo} = props
    const {buyersInfo, date, title, seatsNumber} = checkoutInfo

    

    console.log(checkoutInfo)
    return(
        <>
            <section className="checkout-screen">
                <h1>Pedido feito com sucesso!</h1>
                <div className="container">
                    <div className="section resume">
                        <h2>Filme e sessão</h2>
                        <p>{title}</p>
                        <p>{date} 15:00</p>
                    
                    </div>
                    <div className="seats resume">
                        <h2>Ingressos</h2>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </div>
                    <div className="client resume">
                        <h2>Comprador</h2>
                        <p>jao</p>
                        <p>{`CPF: 00998`}</p>
                    </div>
                </div>
                <button>Voltar para Home</button>
            </section>
        </>

    )
}

