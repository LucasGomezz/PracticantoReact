import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import juegos from './data/juegos.js';
import JuegosView from './views/JuegosView.jsx';
import DescriptionView from './views/DescriptionView.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const rutas = [
  {
    path: "/",
    element: <App />
  }
]

juegos.forEach(juego => {
  rutas.push({
    path: juego.url,
    element: <JuegosView juego={juego}/>
  })
  rutas.push({
    path: juego.description,
    element: <DescriptionView description={juego.description}/>
  })
})

const router = createBrowserRouter(rutas);
//Obtiene el elemento y muestra que renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)