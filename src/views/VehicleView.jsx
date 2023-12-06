import React from 'react';
import "./JuegosView.css"


function JuegosView({juego}) {
    return (
        <div className='juegosView'>
            <h1>{juego.name}</h1>
            <h2>{juego.description}</h2>
            <img src={juego.image} alt={juego.name} />
        </div>
    );
}

export default JuegosView;