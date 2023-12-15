import React from 'react';
import "../css/juegoView.css"
import Header from '../components/Header';

function  JuegosView({juego}) {
    return (
        <div className='juegoView'>
            <Header/>
            <h1>{juego.name}</h1>
            <h2>{juego.description}</h2>
            <img src={juego.image} alt={juego.name} />
            
        </div>
    );
}

export default JuegosView;