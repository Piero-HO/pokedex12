import { useEffect, useState } from "react";
import "../App.css";
import { getPokemons } from "../services/pokemonService";

function Entities() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  const loadPokemons = async () => {
    const data = await getPokemons();
    setPokemons(data);
  };

  loadPokemons();
}, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="container">
      <div className="hero">
  <h1>Pokédex Explorer</h1>
  <p>Información detallada de los Pokémon obtenidos desde la PokéAPI</p>

  <input
    type="text"
    placeholder="Buscar Pokémon..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
</div>

      <div className="grid">
        {filteredPokemons.map((pokemon) => (
          <div
  className="card"
  key={pokemon.id}
  style={{
    borderTop: `8px solid ${
      pokemon.types[0].type.name === "grass"
        ? "#4CAF50"
        : pokemon.types[0].type.name === "fire"
        ? "#FF5722"
        : pokemon.types[0].type.name === "water"
        ? "#2196F3"
        : pokemon.types[0].type.name === "electric"
        ? "#FFC107"
        : "#9E9E9E"
    }`,
  }}
>
            <img
  src={pokemon.sprites.other["official-artwork"].front_default}
  alt={pokemon.name}
  className="pokemon-image"
/>

<h3>{pokemon.name.toUpperCase()}</h3>

<p style={{ color: "#666", marginBottom: "10px" }}>
  Pokémon #{pokemon.id}
</p>

<div className="pokemon-info">
  <div className="info-item">
    <span>#</span>
    <strong>{pokemon.id}</strong>
  </div>

  <div className="info-item">
    <span>📏</span>
    <strong>{pokemon.height}</strong>
  </div>

  <div className="info-item">
    <span>⚖️</span>
    <strong>{pokemon.weight}</strong>
  </div>

  <div className="pokemon-type">
    {pokemon.types[0].type.name.toUpperCase()}
  </div>
</div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Entities;