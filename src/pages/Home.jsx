import { useEffect, useState } from "react";
import "../App.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
      );

      const data = await response.json();

      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemons(details);
    };

    loadPokemons();
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <h1>PokeDex Explorer</h1>

        <p>
          Explora Pokémon obtenidos desde la PokéAPI utilizando React y Vite.
        </p>
      </div>

      <div className="grid">
        {pokemons.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />

            <h3>{pokemon.name.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;