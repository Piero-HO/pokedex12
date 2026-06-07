import { useEffect, useState } from "react";
import "../App.css";
import { getPokemons } from "../services/pokemonService";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
  const loadPokemons = async () => {
    const data = await getPokemons();
    setPokemons(data);
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