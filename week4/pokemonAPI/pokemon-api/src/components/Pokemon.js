import React, {useState} from "react";
import Button from '@mui/material/Button'
const Pokemon = (props) => {

  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemonList(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-fluid text-center mt-5">
      <Button variant='contained' color='primary'  onClick={getPokemon}>
        Fetch Pokemon
      </Button>
      <ul className="mt-5 list-unstyled">
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, index) => {
            return <h2 key={index}>{pokemon.name}</h2>;
          })}
      </ul>
    </div>
  );
}

export default Pokemon;
