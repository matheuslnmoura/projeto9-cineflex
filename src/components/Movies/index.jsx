import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css"

export default function Movies() {
    const[moviesList, setMoviesList] = useState([])
    useEffect(()=>{
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        request.then((response)=>{
            setMoviesList(response.data)
        })
    }, [])

    function renderMovies() {
        return moviesList.map(movie=>{
            return <Movie id = {movie.id} posterURL = {movie.posterURL} title = {movie.title} />
        })
    }

    return(
        <section className="movies-screen">
            <h1>Escolha um filme</h1>
            <div className="movies-container">
                {renderMovies()}
            </div>
        </section>

    )
}



function Movie(props) {
    const{id, posterURL, title} = props
    return(
        <div className="movie" key={id + title}>
            <Link to = {`sections/${id}`} >
                <img src={posterURL} alt={title} />
            </Link>
        </div>
    )

}