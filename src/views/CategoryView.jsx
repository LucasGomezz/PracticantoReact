import React from 'react';
import juegos from '/src/data/juegos.js';
import Header from '../components/Header';
import Card from '../components/Card';
import '../css/categorias.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CategoryView() {
  const listaCategorias = [];
  let categoriaBoolean = false;

  juegos.forEach((juego) => {
    categoriaBoolean = false;
    listaCategorias.forEach((categoria) => {
      if (juego.description === categoria) {
        categoriaBoolean = true;
      }
    });
    if (!categoriaBoolean) {
      listaCategorias.push(juego.description);
    }
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const listaCategoriasFinal = listaCategorias.map((categoria) => {
    const listaJuegos = juegos
      .filter((juego) => juego.description === categoria)
      .map((juego) => (
        <Card key={juego.name} title={juego.name} description={juego.description} image={juego.image} linkea={true} />
      ));

    return (
      <div key={categoria} className="categoria">
        <h1>{categoria}</h1>
        <Slider {...sliderSettings}>{listaJuegos}</Slider>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="titulo">
        <h1>Categorías</h1>
      </div>
      <div className="contenedor">
        {listaCategoriasFinal}
      </div>
    </div>
  );
}

export default CategoryView;




