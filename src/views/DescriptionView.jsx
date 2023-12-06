import React from 'react';
import "./JuegoView.css"
import Card from '/src/components/Card.jsx';
import juegos from '/src/data/juegos.js';

function DescriptionView({description})  {
    const listaJuegos = juegos.map(juego => {
        if(juego.description == description){
            return <Card title={juego.name}  description={juego.description} image={juego.image} linkea={true}/>
        }
    })
  
    return <div className='App'>
      <h1>Video juegos</h1>
      <div className='container'>
        {listaJuegos}
      </div>
    </div>;
   
  }

export default DescriptionView;