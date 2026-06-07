import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>PokeDex Explorer</h1>

      <p>
        Explora Pokémon obtenidos desde la PokéAPI utilizando React y Vite.
      </p>

      <h2>Lista de Pokémon</h2>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;