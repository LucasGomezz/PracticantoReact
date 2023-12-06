import './App.css'
import Card from './components/Card';
import ShowHide from './components/ShowHide';
import juegos from './data/juegos';


function App() {
  const listaJuegos = juegos.map(juego => {
    return <Card title={juego.name}  description={juego.description} image={juego.image} />
  })

  return <div className='App'>
    <h1>Video juegos</h1>
    <div className='container'>
      {listaJuegos}
    </div>
  </div>;
 
}

export default App
