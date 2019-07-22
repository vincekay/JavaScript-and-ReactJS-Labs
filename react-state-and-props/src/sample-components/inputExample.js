import React, { Component } from 'react';

class InputExample extends Component {
  state = {
    value: ''
  }

  /** 
   * 'onChange' function can be called anything (not a special override of React.Component) 
   * 
   * NOTE
   * It must be an arrow function for it to work the way we expect it.
   * In the future, if you are curious why, ask us about 'binding'.
   */
  onChange = event => {
    /**
     * Step 1:
     * 
     * Make sure we have React Devtools installed in Chrome by now
     * > Inspect what 'event.target.value' is
     * > What is 'this.setState'? 
     * > Can we just change 'this.state' directly?
     * > Using the Devtools, what happens to 'this.state.value' as you type into the input?
     * 
     */
    this.setState({
      value: event.target.value
    })
  }

  
  render() {
    /**
     * Step 2: 
     * 
     * 'Two-way Binding'
     * 
     * > Try removing 'value' and see if you can type into your input box
     * > Try removing 'onChange' and see if your input box behaves normally
     * > Keep React Devtools open to see if your 'this.state.value' is changing accordingly
     * 
     * > NOTE that even though you may be able to have 'this.state.value' updated without 'value' attribute
     *   on input, this is considered bad practice (it creates an uncontrolled component)
     * > Extra reading on this: https://reactjs.org/docs/forms.html
     */
    return (
      <input
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

/**
   * Exercise 3:
   * > Try to create a h2 tag to display 'this.state.value'
   * > See if it updates when you type
   * > Create another input and attribute in your state.
   * > Wire them up for 'two-way binding' and get your new input box to
   *   display text onto the screen like 'this.state.value'
   * > This will require a new 'onChange' function
   * 
   * Stretch Goal:
   * > Render an image based on entering in an url into an input
   * 
   */

export default InputExample;

/**
 * After Exercise 3, uncomment <ButtonInputExample /> in the 'render' function in /src/App.js
 * Then proceed to /src/sample-components/buttonInputExample.js
 * 
 * There we will talk about combining click behavior with inputs in React.
 * 
 */