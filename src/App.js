
import './App.css';
import Header from './componentes/header/Header';
import cardData from './data/cardData';
import Card from './componentes/card/Card';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <>
      <Header title="Galeria de Imagenes con React"/>
      {cardData.map((card) => {
        return (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          img={card.img}
      
        />
        )
      }
      )}
      <Footer title="Todos los Derechos Reservados"/>
    </>
  );
}


export default App;
