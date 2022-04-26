import phrasesFriends from '../data/phrases.json';
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState(phrasesFriends);

  const htmlData = data.map((character, i) => {
    return (
      <li key={i}>
        <p>
          {character.quote}
          <strong>{character.character}</strong>
        </p>
      </li>
    );
  });

  return (
    <>
      <header>
        <h1>Frases de Friends.</h1>
      </header>

      <main>
        <ul>{htmlData}</ul>
        <form>
          <h2>Añade una nueva frase</h2>
          <label htmlFor="phrase">Frase</label>
          <input type="text" name="phrase" id="phrase" />

          <label htmlFor="character">Personaje</label>
          <input type="text" name="character" id="character" />

          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir una nueva frase"
          />
        </form>
      </main>
    </>
  );
}

export default App;
