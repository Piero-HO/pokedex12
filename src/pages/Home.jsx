import { useEffect, useState } from "react";
import "../App.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
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
          <div className="card" key={pokemon.name}>
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;