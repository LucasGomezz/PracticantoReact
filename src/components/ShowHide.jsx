import React, { useState } from 'react';

function ShowHide ()  {
    const [show, setShow] = useState(true); //El estado se llama show y el nombre de la funcion es set show, useState se le pasa el valor por defecto Use stat devuelve un array con dos elementos

    const handleClick = (event) => {
        setShow(!show);
    }
//show va a ser true o false y hide me siempre va a ser verdadero y si show es falso no lo muestra
    return (
        <div>
            <button onClick={handleClick}>{show ? "Hide" : "Show"} Text</button>
            {show && <h2>HIDE ME!</h2>} 
        </div>
    );
};

export default ShowHide;