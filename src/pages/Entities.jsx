import { useEffect, useState } from "react";

function Entities() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
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
    <div style={{ padding: "20px" }}>
      <h1>Listado de Pokémon</h1>

      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default Entities;