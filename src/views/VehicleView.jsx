import React from 'react';
import "./vehicleView.css"

function VehicleView({vehicle}) {
    return (
        <div className='vehicleView'>
            <h1>{vehicle.name}</h1>
            <h2>{vehicle.description}</h2>
            <img src={vehicle.image} alt={vehicle.name + " image"} />
        </div>
    );
}

export default VehicleView;