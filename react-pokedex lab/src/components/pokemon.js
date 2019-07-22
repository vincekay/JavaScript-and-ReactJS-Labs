import React from 'react';

import { string, func, object } from 'prop-types';

const Pokemon = props => {
    
    return (
        <div className="col-3" onClick={() => props.selectPokemon(props.name)}>
            <h1>{props.name}</h1>
            <img src={props.sprites.front_default} alt="Pokemon"/>
        </div>
    )
}

Pokemon.propTypes = {
    name: string,
    selectPokemon: func,
    sprites: object
}

export default Pokemon;