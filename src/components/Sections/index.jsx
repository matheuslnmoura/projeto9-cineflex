import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css"
import Footer from "../Footer"

export default function Sections() {
    const {movieId} = useParams()
    const [sectionsInfo, setSectionsInfo] = useState([])

    useEffect(()=>{
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        request.then((response)=>{
            setSectionsInfo(response.data)
        })
    }, [])

    function renderSectionsDates() {
        const {days} = sectionsInfo
        if(days !== undefined) {
            return days.map((day, index)=>{
                const {showtimes} = day
                return <Day  
                    id = {day.id} 
                    weekday = {day.weekday} 
                    date = {day.date} 
                    showtimes = {showtimes} 
                    index = {index}
                />
            })
        }
    }

    function Day(props){
        const {id, weekday, date, showtimes, index} = props

        return(
            <article key={id + weekday}>
                <h2>{weekday}- {date}</h2>

                <div className="hours">
                    {showtimes.map(hour=> <ShowTimes showtime = {hour.name} id = {hour.id} />)}
                </div>
            </article>
        )
    }

    function ShowTimes(props) {
        const {showtime, id} = props
        return(
            <Link to={`/seats/${id}`}><button className="time">{showtime}</button></Link>
        )
    }

    return(
        <>
            <section className="sections-screen">
                <h1>Escola uma sessão</h1>
                <div className="sections-container">
                    {renderSectionsDates()}
                </div>
            </section>

            <Footer sectionsInfo = {sectionsInfo} />
        </>



    )
}