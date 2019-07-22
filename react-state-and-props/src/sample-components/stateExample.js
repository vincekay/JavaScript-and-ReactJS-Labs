import React, { Component } from 'react';
import Header from  '../components/header';

/**
 * Step 1:
 * 
 * First thing we will want to do is import your 
 * /src/components/header.js component into this file
 * 
 * NOTE
 * > header.js must have a prop to allow us to dynamically render a string
 */

class StateExample extends Component {
  state = {StateExample}
  /**
   * Step 2: 
   * 
   * Declare our first state
   * Note:
   * > What type is our state?
   * > How do we reference our state? (this keyword)
   * > Let's store something to display in our 'render' function 
   * > Let's now display that state attribute
   * 
   */

  /**
   * Exer. 2
   * 
   * > Create another state attribute that is a string
   * > Put <Header /> into your 'render' function
   * > Now get your new state attribute to render on the page using <Header />
   * 
   */

  render() {
    return (
      <div></div>
    );
  }
}

export default StateExample;

/**
 * After Exercise 2, uncomment <InputExample /> in the 'render' function in /src/App.js
 * Then proceed to /src/sample-components/inputExample.js
 * 
 * There we will talk about 'two-way binding' in React.
 * 
 */