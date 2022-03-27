import { Link } from "react-router-dom";
import { useState } from "react";

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
    const [checkoutInfoUpdate, setCheckoutInfoUpdate] = useState({})
    const {checkoutInfo, setCheckoutInfo} = props
    const {buyerInfo, date, title, showtime, seatsNumber} = checkoutInfo
    const {name, cpf} = buyerInfo

    const seatsNumberOrdered = seatsNumber.sort((a,b)=>{
        if(a > b) return 1
        if (a < b) return -1
        return 0
    })
    

    
    return(
        <>
            <section className="checkout-screen">
                <h1>Pedido feito com sucesso!</h1>
                <div className="container">
                    <div className="section resume">
                        <h2>Filme e sessão</h2>
                        <p>{title}</p>
                        <p>{date} {showtime}</p>
                    
                    </div>
                    <div className="seats resume">
                        <h2>Ingressos</h2>
                        {seatsNumberOrdered.map((seatNumber, index)=>{
                            return <p key={seatNumber + " " + index}>Assento {seatNumber}</p>
                        })}
                        {/* <p>Assento 15</p>
                        <p>Assento 16</p> */}
                    </div>
                    <div className="client resume">
                        <h2>Comprador</h2>
                        <p>{name}</p>
                        <p>{`CPF: ${cpf}`}</p>
                    </div>
                </div>
                <button>Voltar para Home</button>
            </section>
        </>

    )
}

