import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
import Footer from "../Footer"

export default function Seats() {
    const {sectionId} = useParams()
    const [seatsInfo, setSeatsInfo] = useState([])
    
    useEffect(()=>{
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`)
        request.then((response)=>{
            setSeatsInfo(response.data)           
        })
    }, [])

    function renderSeats(firstSeat, lastSeat){
        const {seats} = seatsInfo
        if(seatsInfo !== [] && seats !== undefined) {
            return seats.map((seat, index)=>{
                let id = index + 1 
                if(id >= firstSeat && id <= lastSeat)
                return(
                    <div className="seat" key={seat.name + " " + id} >{seat.name} </div>
                )
            })
        }
    }
    
    return(
        <>
            <section className="seats-screen">
                <h1>Escolha seu lugar</h1>
                <div className="seats-container">
                    <div className="seats">
                        <div className="first-row">
                            {renderSeats(1,10)}
                        </div>
                        <div className="second-row">
                            {renderSeats(11,20)}
                        </div>
                        <div className="third-row">
                            {renderSeats(21,30)}   
                        </div>
                        <div className="fourth-row">
                            {renderSeats(31,40)}
                        </div>
                        <div className="fifth-row">
                            {renderSeats(41,50)}
                        </div>
                    </div>
                    <div className="legend">
                        <div className="seat-legend-container">
                            <div className="seat selected"></div>
                            <span>Selecionado</span>
                        </div>
                        <div className="seat-legend-container">
                            <div className="seat available"></div>
                            <span>Disponível</span>
                        </div>
                        <div className="seat-legend-container">
                            <div className="seat unavailable"></div>
                            <span>Indisponível</span>
                        </div>

                    </div>
                </div>
                <div className="user-data">
                    <div className="name">
                        <label >Nome do comprador:</label>
                        <input type="text" id="User" name="Name" placeholder="Digite seu nome..."/>
                    </div>
                    <div className="name">
                        <label >CPF do comprador:</label>
                        <input type="text" id="User" name="Name" placeholder="Digite seu CPF..."/>
                    </div>
                </div>
                <button>Reservar assento(s)</button>
            </section>
            {/* <Footer /> */}
        </>


    )
}