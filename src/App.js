import './App.css';
import Encuestas from './components/Encuestas';

function App() {
  // Encuestas
  const encuestas = [
    {id: 1, pregunta: "Cuál es tu color favorito?", opciones: ['Rojo', 'Azul', 'Verde']},
    {id: 2, pregunta: "Cuál es tu comida favorita?", opciones:['Pizza', 'Hamburguesa', 'Sushi']},
    {id: 3, pregunta: "Cuál es tu género de música favorito?", opciones:['Pop', 'Rock', 'Cumbia', 'Metal']},
  ];

  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
    {/* Contenido de las páginas */}
      <Encuestas encuestas={encuestas}/>
    </div>
  );
}

export default App;
