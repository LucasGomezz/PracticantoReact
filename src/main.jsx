import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView.jsx';

const rutas = [
  {
    path: "/",
    element: <App />
  }
]

vehicles.forEach(vehiculo => {
  rutas.push({
    path: vehiculo.name,
    element: <VehicleView vehicle={vehiculo}/>
  })
})

const router = createBrowserRouter(rutas);
//Obtiene el elemento y muestra que renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
