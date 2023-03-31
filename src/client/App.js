import './App.css';
import gsap from 'gsap';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.js'
import Schede from './components/schede.js';
import cambiaColoreSfondo from './components/colori.js';
import Gsaptest from './components/Gsaptest.js';
import Footer from './components/footer.js';
import Boxanim from './components/boxanim.js';
import Video from './components/video.js';
import Bgvideo from './components/bgvideo.js';
import Card from './components/card.js'
import Card2 from './components/card2.js';

//l'ho fatto con funzioni qui ma ho fatto anche un file con classi
function App() {

  const [data, setData] = useState();

  // funzione da eseguire quando l'utente clicca submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // chiama il nostro server con i parametri che vogliamo usare e poi (then) ->
    axios.get(`https://localhost:3001/${formJson.selectedFruit}`).then(
      (d) =>
        // imposta lo stato del componente con i dati che abbiamo ricevuto
        setData(d.data)
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Select handleSubmit={handleSubmit} />
        {/* ogni dato che riceviamo, trasformiamolo in un elemento html */}
        {/* il ?. significa "se hai dati, vai avanti, altrimenti ritorna undefined" */}
        <ul>{data?.map((d) => <li key={d}>{d}</li>)}</ul>
      </header>
    </div>
  );
}

function Select({ handleSubmit }) {
  return (
    // quando clicchi Submit, esegui handleSubmit
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="lorem">
          <h1>Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Perspiciatis iste delectus, voluptatibus dolor aspernatur<br /> autem reiciendis tempore rerum?
          </p>
          <Card />
        </div>
        <div className="lorem2">
          <h2>Simple React App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Perspiciatis iste delectus, voluptatibus dolor aspernatur<br /> autem reiciendis tempore rerum?
          </p>
          <Card2 />
        </div>
        <Schede />
      </header>
      <footer>
        <Video />
        <Footer />
      </footer>
    </div>

  )
}

export default App;
