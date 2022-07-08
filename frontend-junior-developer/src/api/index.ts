export const pokemonSelector = async ():Promise<{ name: string; url: string; }[]> => {
  const stock = await fetch('https://pokeapi.co/api/v2/pokemon');
  const result = await stock.json();

  return (result.results);
}
