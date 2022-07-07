import React, { useCallback, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState<{name: string, apiUrl: string}[]>([]);

  const fetchPokemonsHandler = useCallback(() => {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemons( data.results.map((pokemonData : any) => {
          return {
            name: pokemonData.name,
            apiUrl: pokemonData.url
          };
        }));
      });
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPokemonsHandler}>Fetch Pokemon</button>
      </section>
      <section>
        {pokemons.length ? pokemons.map(pokemon => <p>{pokemon.name}</p>) : <p>Found no Pokemon</p> }
      </section>
    </React.Fragment>
  )

}
export default App;
