import phrasesFriends from '../data/phrases.json';
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState(phrasesFriends);
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });

  const handleNewQuote = (event) => {
    setNewQuote({
      ...newQuote,
      [event.target.id]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setData([...data, newQuote]);
  };

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
          <label htmlFor="quote">Frase</label>
          <input
            type="text"
            name="quote"
            id="quote"
            value={newQuote.quote}
            onChange={handleNewQuote}
          />

          <label htmlFor="character">Personaje</label>
          <input
            type="text"
            name="character"
            id="character"
            value={newQuote.character}
            onChange={handleNewQuote}
          />

          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir una nueva frase"
            onClick={handleClick}
          />
        </form>
      </main>
    </>
  );
}

export default App;
