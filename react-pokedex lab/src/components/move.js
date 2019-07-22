import React from 'react';
import { string } from 'prop-types';

const Move = props => {
  return (
    <div className="col-2 border">
      <h2 style={{ color: 'red' }}>{props.move}</h2>
    </div>
  );
}

Move.propTypes = {
  move: string
}

export default Move;