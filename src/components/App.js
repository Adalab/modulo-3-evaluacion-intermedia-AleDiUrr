// import phrasesFriends from '../data/phrases.json';
import { useState, useEffect } from 'react';
import getQuotes from '../services/fetchQuotes';
// import localStorage from '../services/localStorage';
import '../styles/App.scss';

function App() {
  // const [data, setData] = useState(localStorage.get('data', []));
  const [data, setData] = useState([]);
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('everybody');

  // useEffect(() => {
  //   if (data.length === 0) {
  //     getQuotes().then((datafromAPI) => {
  //       localStorage.set('data', datafromAPI);
  //       setData(datafromAPI);
  //     });
  //   }
  // }, []);

  useEffect(
    () =>
      getQuotes().then((dataFromApi) => {
        setData(dataFromApi);
      }),
    []
  );

  const handleFilterCharacter = (event) => {
    setFilterCharacter(event.target.value);
  };

  const handleFilterQuote = (event) => {
    setFilterQuote(event.target.value);
  };

  const handleNewQuote = (event) => {
    setNewQuote({
      ...newQuote,
      [event.target.id]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({
      quote: '',
      character: '',
    });
  };

  const htmlData = data

    .filter((oneCharacter) => {
      if (filterCharacter === 'everybody') {
        return true;
      } else if (filterCharacter === oneCharacter.character) {
        return true;
      } else {
        return false;
      }
    })

    .filter((oneQuote) => {
      return oneQuote.quote
        .toLocaleLowerCase()
        .includes(filterQuote.toLocaleLowerCase());
    })

    .map((character, i) => {
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
        <form>
          <label htmlFor="quote">
            Filtra por frase
            <input
              type="text"
              name="quote"
              id="quote"
              onChange={handleFilterQuote}
            />
          </label>

          <label htmlFor="character">
            Filtra por personaje
            <select
              name="Filtra por personaje"
              id="character"
              onChange={handleFilterCharacter}
            >
              <option value="everybody">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
          </label>
        </form>
        <ul>{htmlData}</ul>
        <form>
          <h2>Añade una nueva frase</h2>
          <label htmlFor="quote">
            Frase
            <input
              type="text"
              name="quote"
              id="quote"
              value={newQuote.quote}
              onChange={handleNewQuote}
            />
          </label>
          <label htmlFor="character">
            Personaje
            <input
              type="text"
              name="character"
              id="character"
              value={newQuote.character}
              onChange={handleNewQuote}
            />
          </label>
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
