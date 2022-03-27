
import "./style.css"

export default function Footer(props) {
    const {id, title, posterURL, weekday, name} = props


    // return (
    //     <></>
    // )
    
    return(
        <footer>
            <div className="container">
                <img src={posterURL} alt={`${title} poster`} />
                <div className="movies-info">
                    <span className="name">{title}</span>
                    <span className="section">{
                        weekday !== undefined ? 
                        `${weekday} - ` 
                        : ""} 
                        {name !== undefined ? 
                        name 
                        :""
                    }
                    </span>
                </div>
            </div>
        </footer>

    )
}