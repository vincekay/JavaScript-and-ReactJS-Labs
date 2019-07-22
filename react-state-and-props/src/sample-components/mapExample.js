import React from 'react';

const mapPokemon = (name, index) => (
  <tr key={name + index}>
    <td>{index + 1}</td>
    <td>{name}</td>
  </tr>
);

const MapExample = props => (
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(mapPokemon)}
    </tbody>
  </table>
);

export default MapExample;

/**
 * Step 1:
 * 
 * > The way in which we can dynamically render an array of information
 *   in React is to use '.map' on an array.
 * > The function that we pass into '.map' must be return JSX (React.Element)
 * > All parent html element in the function (<tr> in my example), must have a key property
 * > This key property is for React to handle things behind the scene. You just need to know
 *   that you should pass in things are unique. Passing in index (0, 1, 2, 3...) is only sometimes 
 *   reliable.
 * 
 * > Try editing the 'data' prop in /src/App.js and seeing what you notice 
 *   in regards to what gets rendered on the screen
 * 
 */

/**
 * Exer. 5
 * 
 * Build an input and button in /src/App.js along with an array in the state in App.js to represent 'data'
 * Make it so that you can add new pokemon names into your array and thus show it mapped on screen.
 */