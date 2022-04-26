// Fichero src/services/api.js

const getQuotes = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = {
        quote: response.quote,
        character: response.character,
      };
      return result;
    });
};

export default getQuotes;
