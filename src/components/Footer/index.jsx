
import "./style.css"

export default function Footer(props) {
    const {sectionsInfo} = props
    const {title, posterURL, day, name} = sectionsInfo
    

    console.log(sectionsInfo)
    return(
        <footer>
            <div className="container">
                <img src={posterURL} alt={`${title} poster`} />
                <div className="movies-info">
                    <span className="name">{title}</span>
                    <span className="section">{
                    day!== undefined ? `${day.weekday} - ` : ""} {name !== undefined ? name : ""}</span>
                </div>
            </div>
        </footer>

    )
}