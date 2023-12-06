import "./card.css" 
import { Link } from "react-router-dom";

function Card({title = "tituloso ", description = "descripcion por defecto"}){
    //Lo ideal es que cada vehiculo tenga la direccion porque el titulo no puede coincidir
    return (<div className="card">
        <Link to={title}>
            <h2>{title}</h2>
        </Link>
        <p>{description}</p>
    </div>)
}

export default Card;