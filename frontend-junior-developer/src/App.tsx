import React, { useCallback, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Pokemon from './api/Pokemon'


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

}
export default App;
