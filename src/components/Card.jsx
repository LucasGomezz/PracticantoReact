import '../css/card.css' 
import { Link } from "react-router-dom";

function Card({title = "titulo", description = "descripcion por defecto", image = "imagen", linkea = false, 
cantidadEstrellas = 0, cantidadDeUsuariosQueVotaron = 0}){
  
  const titlePath = `/${title.toLowerCase()}`;// agrega a la raiz
  const descriptionPath = `/${description.toLowerCase()}`;
  let rating = 3;
  if(cantidadDeUsuariosQueVotaron != 0){
    rating = Math.floor(cantidadEstrellas / cantidadDeUsuariosQueVotaron);
  }
  let stars = '★'.repeat(rating);
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
        <h1>{stars}</h1>
      </div>
    );
  }

export default Card;
