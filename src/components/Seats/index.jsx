import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import "./style.css"
import Footer from "../Footer"

export default function Seats(props) {
    const {setCheckoutInfo} = props
    const {sectionId} = useParams()
    const [seatsInfo, setSeatsInfo] = useState([])
    const [selectedSeatsId, setSelectedSeatsId] = useState([])
    const [selectedSeatsName, setSelectedSeatsName] = useState([])
    const [nameValue, setNameValue] = useState("")
    const [documentValue, setDocumentValue] = useState("")
    const navigate = useNavigate()

    let title = ""
    let posterURL = ""
    let weekday = ""
    let date = ""
    let showtime = "" //showtime
    
    
    useEffect(()=>{
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`)
        request.then((response)=>{
            setSeatsInfo(response.data)           
        })
    }, [])

    if(seatsInfo.movie !== undefined) {
        title = seatsInfo.movie.title
        posterURL = seatsInfo.movie.posterURL
        weekday = seatsInfo.day.weekday
        date = seatsInfo.day.date
        showtime = seatsInfo.name
    }


    function RenderSeats(firstSeat, lastSeat){
        const {seats} = seatsInfo
        let seatBgColor = ""
        let seatBorderColor = ""

        if(seatsInfo !== [] && seats !== undefined) {
            return seats.map((seat, index)=>{

                let id = index + 1 
                if(id >= firstSeat && id <= lastSeat){
                    if (selectedSeatsId.indexOf(seat.id) !== -1) {
                        seatBgColor = "#8DD7CF"
                        seatBorderColor = "#1AAE9E"
                    }else if (selectedSeatsId.indexOf(seat.id) === -1 && seat.isAvailable === true) {
                        seatBgColor = "var(--header-bg)"
                        seatBorderColor = "#808F9D"
                    } else if(selectedSeatsId.indexOf(seat.id) === -1 && seat.isAvailable === false) {
                        seatBgColor = "#FBE192"
                        seatBorderColor = "#F7C52B"
                    }

                    
                    return(
                        <SeatContainer seatBgColor = {seatBgColor} seatBorderColor = {seatBorderColor} key={seat.name + " " + id} >
                            <div className="seat" key={seat.name + " " + id} onClick={()=>{
                                selectSeats(seat)
                            }} >{seat.name} </div>
                        </SeatContainer>
                    )
                }
            })
        }

        function selectSeats(seat) {
            if (seat.isAvailable === false) {
                alert("Assento não disponível")
            }
            if (selectedSeatsId.indexOf(seat.id) === -1 && seat.isAvailable === true){
                setSelectedSeatsName([...selectedSeatsName, seat.name])
                setSelectedSeatsId([...selectedSeatsId, seat.id])
            } else if (selectedSeatsId.indexOf(seat.id) !== -1 && seat.isAvailable === true) {
                const seatIndex = selectedSeatsId.indexOf(seat.id)
                const copyOfSelectedSeatsId = selectedSeatsId
                copyOfSelectedSeatsId.splice(seatIndex, 1)
                setSelectedSeatsId([...copyOfSelectedSeatsId])

                const seatNameIndex = selectedSeatsName.indexOf(seat.name)
                const copyOfSelectedSeatsName = selectedSeatsName
                copyOfSelectedSeatsName.splice(seatNameIndex, 1)
                setSelectedSeatsName([...copyOfSelectedSeatsName])
            }
        }
    }





    function cpfMask(value) {
        return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') 
    }

    function sendInfos(event) {
        event.preventDefault()
        if(selectedSeatsId.length === 0){
            alert("Escolha pelo menos um assento")
        } else if(nameValue === "") {
            alert("Preencha seu nome")
        } else if(documentValue === "") {
            alert("Preencha seu CPF")
        } else{        
            const requestObj = {ids: selectedSeatsId, name: nameValue, cpf: documentValue}
            const postRequest = axios.post(
                'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', 
                requestObj
            )
    
            setSelectedSeatsId([])
            setNameValue("")
            setDocumentValue("")
            
            const checkoutObj = {title: title, date: date, showtime: showtime, buyerInfo: requestObj, seatsNumber: selectedSeatsName}
    
            setCheckoutInfo(checkoutObj)
            
    
            navigate('/checkout')
        }
    }
    

    
    return(
        <>
            <section className="seats-screen">
                <h1>Escolha seu lugar</h1>
                <div className="seats-container">
                    <div className="seats">
                        <div className="first-row">
                            {RenderSeats(1,10)}
                        </div>
                        <div className="second-row">
                            {RenderSeats(11,20)}
                        </div>
                        <div className="third-row">
                            {RenderSeats(21,30)}   
                        </div>
                        <div className="fourth-row">
                            {RenderSeats(31,40)}
                        </div>
                        <div className="fifth-row">
                            {RenderSeats(41,50)}
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
                <form method="post" onSubmit={sendInfos}>
                <div className="user-data">
                    <div className="name">
                        <label >Nome do comprador:</label>
                        <input 
                            type="text" 
                            id="user" 
                            name="name" 
                            value = {nameValue} 
                            placeholder="Digite seu nome..." 
                            onChange={(event)=>{
                                setNameValue(event.target.value)  
                            }} />
                    </div>
                    <div className="name">
                        <label >CPF do comprador:</label>
                        <input 
                        type="text" 
                        id="userDocument" 
                        name="userDocument" 
                        placeholder="Digite seu CPF..." 
                        value = {documentValue}
                        onChange = {event=>{
                            setDocumentValue(cpfMask(event.target.value))
                        }} />
                    </div>
                </div>
                <button type="submit">Reservar assento(s)</button>
                </form>
                
            </section>
            <Footer title = {title} posterURL = {posterURL} weekday = {weekday} name = {showtime} />
        </>


    )
}

const SeatContainer = styled.div`
        
    div {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: ${props => props.seatBgColor};
        border: ${props => props.seatBorderColor};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 18px; 
    }

`