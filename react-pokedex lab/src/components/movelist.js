import React from 'react';
import Move from './move';
import { string, array, func } from 'prop-types';

const MoveList = props => {
  return (
    <div className="row">
      <div className="col-4">
        <h1>{props.name} MOVES</h1>
        <button className="btn btn-primary m-2" onClick={props.close}>Close</button>
      </div>
      <div className="row">
        {
          props.moves.map(move => {
            return (
              <Move
                key={move}
                // ENTER REQUIRED PROPS HERE
                move={move}
              />
            )
          })
        }
      </div>
    </div>
  )
}

MoveList.propTypes = {
  name: string,
  close: func,
  moves: array
}





export default MoveList;