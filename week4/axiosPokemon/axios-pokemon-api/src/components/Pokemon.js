import React, {useState} from "react";
import Button from '@mui/material/Button'
import axios from "axios";

const Pokemon = (props) => {

  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = (e) => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Button variant='contained' color='primary'  onClick={getPokemon}>
        Fetch Pokemon
      </Button>
      <ul>
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, index) => {
            return <h2 key={index}>{pokemon.name}</h2>;
          })}
      </ul>
    </div>
  );
}

export default Pokemon;