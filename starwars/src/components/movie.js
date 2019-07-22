import React from 'react';
import { string, number } from 'prop-types';

const Movie = props => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <li>
      <h3>{props.title}</h3>
      <h5>Episode {props.episode_id}</h5>
      <h5>{props.release_date}</h5>
    </li>
  )
}

Movie.propTypes = {
  title: string,
  episode_id: number,
  release_date: string
}

export default Movie;