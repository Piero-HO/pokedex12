const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";

export const getPokemons = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const details = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return details;
};