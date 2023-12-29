import React, { useEffect } from 'react';
import '../css/header.css';

function Header() {
  useEffect(() => {
    // Esta función se ejecuta después de que el componente se monta
    let lupa = document.querySelector(".lupa");
    let searchBox = document.querySelector(".buscador");

    if (lupa) {
      lupa.addEventListener("click", tocarLupa);
    }

    function tocarLupa() {
      searchBox.classList.toggle("active");
      searchBox.style.display = "block";
    }

    // Esta función se ejecuta cuando el componente se desmonta
    return () => {
      if (lupa) {
        lupa.removeEventListener("click", tocarLupa);
        searchBox.style.display = "none";
      }
    };
  }, []); // El array vacío indica que este efecto solo se ejecutará una vez, después de que el componente se monte

  return (
    <header className='row'>
            <div className='row'>
                <h1 className='logo'>LOGO</h1>
                <nav>
                    <ul className='row categorias'>
                        <li><a href="/">Inicio</a></li>
                        <li> <a href="/categorias">Categorias</a></li>
                        <li>Mis juegos</li>
                    </ul>
                </nav>
            </div>
            <div className='row'>
                <input className='buscador' type="text" placeholder="buscar..." />
                <button className='lupa'><img src="/public/img/lupa.svg" alt="lupa"/></button>
                <div className='fotoPerfil'>
                    <img src="/public/img/Octubre.JPG" alt="us"/>
                </div>
            </div>  
        </header>
  );
}

export default Header;