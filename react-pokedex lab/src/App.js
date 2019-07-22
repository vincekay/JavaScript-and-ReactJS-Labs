import React, { Component } from 'react';
import Data from './data'

import PokemonList from './components/pokemonList';
import MoveList from './components/movelist';


/**
 * INSTRUCTIONS:
 * 
 * We have a problem currently with our <PokemonList />. I think it needs some props from the 'App' component.
 * > Inspect what props are required in 'PokemonList' and supply it from 'App'
 * 
 * In 'PokemonList' it seems like <Pokemon /> is missing some props as well.
 * > Investigate 'Pokemon' and supply it the necessary props through 'PokemonList'
 * 
 * Our 'MoveList' is working in 'App', but in 'MoveList' it looks like <Move /> is not getting the props
 * it requires.
 * > Add the props 'Move' requires
 * 
 * You are now done!
 * Try out the application by clicking on each pokemon and scrolling to the top.
 * 
 */
class App extends Component {
  state = {             // --- DO NOT EDIT ANYTHING BETWEEN HERE ---
    pokemons: Data,     // You may inspect 'this.state.pokemons' by console.log in 'render' function
    selected: {         // You can also inspect 'Data' in /data/index.js; DO NOT REFERENCE 'Data' VARIABLE ANYWHERE ELSE
      name: "",
      moves: []
    },
    open: false
  }                     // -----------------------------------------

  /** DO NOT EDIT FUNCTION */
  selectPokemon = name => {
    this.setState({
      selected: this.state.pokemons.find(poke => poke.name === name),
      open: true
    })
  }

  /** DO NOT EDIT FUNCTION */
  closeMoves = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.open &&
          (
            <MoveList
              name={this.state.selected.name}
              moves={this.state.selected.moves}
              close={this.closeMoves}
            />
          )
        }
        <PokemonList
          // ENTER REQUIRED PROPS HERE
          pokemons={this.state.pokemons}
          selectPokemon={this.selectPokemon}
        />
      </div>
    )
  }
}

export default App;



