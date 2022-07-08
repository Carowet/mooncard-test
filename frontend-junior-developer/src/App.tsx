import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import { pokemonSelector } from './api';
import images from './images/pokeball.png'

function App() {
  const [pokemons, setPokemons] = useState<{name: string, url: string}[]>([]);

  const pokeballImage = useMemo(() => <img src={images} alt="Pokeball" className='pokeball-img'/>, []);

  const fetchPokemonsHandler = useCallback(async () => {
    const pokemonList = await pokemonSelector();
    setPokemons(pokemonList.sort((a,b) => a.name.localeCompare(b.name)));
  }, []);

  return (
    <React.Fragment>
      <section className='container'>
          <button onClick={fetchPokemonsHandler} className="button">
            {pokeballImage}
            Fetch Pokemon
            {pokeballImage}
          </button>
        <section className='pokemon-container'>
          {pokemons.length ?
          pokemons.map(pokemon => <p key={pokemon.name} className='pokemon-name'>{pokemon.name}</p>)
          : <p className='no-pokemon'>No Pokemon found</p> }
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
