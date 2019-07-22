import React from 'react';
import { array, func } from 'prop-types';

import Pokemon from './pokemon';

const PokemonList = props => {
  return (
    <div className="row">
      {
        props.pokemons.map(poke => {
          return (
            <Pokemon
              key={poke.name}
              // ENTER REQUIRED PROPS HERE
              name={poke.name}
              selectPokemon={props.selectPokemon}
              sprites={poke.sprites}
            />
          )
        })
      }
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: array,
  selectPokemon: func
}


export default PokemonList;