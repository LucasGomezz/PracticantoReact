import "./card.css" 
import { Link } from "react-router-dom";

function Card({title = "titulo", description = "descripcion por defecto", image = "imagen", linkea = false}){
    
    const titlePath = `/${title.toLowerCase()}`;// agrega a la raiz
    const descriptionPath = `/${description.toLowerCase()}`;
  
    return (
      <div className="card" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}>
        <Link to={titlePath}>
          <h2>{title}</h2>
        </Link>
        {linkea ? (
          <h2>{description}</h2>
        ) : (
          <Link to={descriptionPath}>
            <h2>{description}</h2>
          </Link>
        )}
      </div>
    );
  }

export default Card;
