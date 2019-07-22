import React from 'react';
import { array } from 'prop-types';

import Character from './character.js'

const CharacterList = props => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <div className="row">
      {
        // Create your .map function here
        props.characters.map(person => (
          <Character
            key={person.name} // DO NOT EDIT
            // Enter the correct props here
            
          />
        ))
      }
    </div>
  )
}

CharacterList.propTypes = {
  characters: array
}


export default CharacterList;