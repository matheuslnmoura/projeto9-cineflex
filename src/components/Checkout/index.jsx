import { useNavigate } from "react-router-dom";

import "./style.css"


export default function Checkout(props) {
    const {checkoutInfo, setCheckoutInfo} = props
    const {buyerInfo, date, title, showtime, seatsNumber} = checkoutInfo
    const {name, cpf} = buyerInfo
    const navigate = useNavigate()

    const seatsNumberOrdered = seatsNumber.sort((a,b)=>{
        if(a > b) return 1
        if (a < b) return -1
        return 0
    })
    
    function backToStart(){
        setCheckoutInfo({})

        navigate("/")
    }
    
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
                <button onClick={backToStart}>Voltar para Home</button>
            </section>
        </>

    )
}

