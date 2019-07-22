import React, { Component } from 'react';

class ButtonInputExample extends Component {
  state = {
    value: '',
    entries: []
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  buttonClicked = () => {
    /**
     *  Here we are using spread operator to copy our this.state.entries (RULE: no direct mutation of state)
     *  along with adding our current value into our 'newEntries'
     */
    let newEntries = [...this.state.entries, this.state.value];

    /**
     * I am setting 'this.state.entries' to 'newEntries' now which has the effect of adding our input value.
     * I am clearing the input box by changing this.state.value into an empty string.
     */
    this.setState({
      entries: newEntries,
      value: ''
    })

  }

  render() {
    return (
      <div>
        <div>
          {/* This is code for us to see our array being built. 
              '.join' converts an array of strings into one string */}
          {this.state.entries.join(', ')}
        </div>
        <div>
          <input value={this.state.value} onChange={this.onChange} />
          <button className="btn btn-primary" onClick={this.buttonClicked}>Enter</button>
        </div>
      </div>
    );
  }
}

export default ButtonInputExample;
function state = []

/**
 * Exer. 4
 * 
 * > Make another array in your state
 *
 * > Make an input and button that when something is entered, 
 *   the input value is pushed into your new array
 * > Render this array on the screen using '.join(' + ')
 * 
 */


/**
 * After Exercise 4, uncomment <MapExample /> in the 'render' function in /src/App.js
 * Then proceed to /src/sample-components/mapExample.js
 * 
 * There we will talk about dynamically rendering an array of data.
 * 
 */