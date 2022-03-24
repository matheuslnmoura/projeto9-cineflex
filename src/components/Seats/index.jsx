import { Link } from "react-router-dom";

import "./style.css"
import Footer from "../Footer"

export default function Seats() {
    return(
        <>
            <section className="seats-screen">
                <h1>Escolha seu lugar</h1>
                <div className="seats-container">
                    <div className="seats">
                        <div className="first-row">
                            <div className="seat">1</div>
                            <div className="seat">2</div>
                            <div className="seat">3</div>
                            <div className="seat">4</div>
                            <div className="seat">5</div>
                            <div className="seat">6</div>
                            <div className="seat">7</div>
                            <div className="seat">8</div>
                            <div className="seat">9</div>
                            <div className="seat">10</div>
                        </div>
                        <div className="second-row">
                            <div className="seat">11</div>
                            <div className="seat">12</div>
                            <div className="seat">13</div>
                            <div className="seat">14</div>
                            <div className="seat">15</div>
                            <div className="seat">16</div>
                            <div className="seat">17</div>
                            <div className="seat">18</div>
                            <div className="seat">19</div>
                            <div className="seat">20</div>
                        </div>
                        <div className="third-row">
                            <div className="seat">21</div>
                            <div className="seat">22</div>
                            <div className="seat">23</div>
                            <div className="seat">24</div>
                            <div className="seat">25</div>
                            <div className="seat">26</div>
                            <div className="seat">27</div>
                            <div className="seat">28</div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="fourth-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="fifth-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
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
                        <label for="User">Nome do comprador:</label>
                        <input type="text" id="User" name="Name" placeholder="Digite seu nome..."/>
                    </div>
                    <div className="name">
                        <label for="User">CPF do comprador:</label>
                        <input type="text" id="User" name="Name" placeholder="Digite seu CPF..."/>
                    </div>
                </div>
                <button>Reservar assento(s)</button>
            </section>
            <Footer />
        </>


    )
}