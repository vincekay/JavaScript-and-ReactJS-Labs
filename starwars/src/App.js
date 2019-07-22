import React, { Component } from 'react';

import CharacterList from './components/characterlist';
import { characterData } from './data'


/**
 * Instructions:
 * 
 * > Only change code regarding `CharacterList` by passing in the proper variables into the props (line 64)
 * > Move on to /components/characterlist.js afterwards for the next part of the problem
 * > Look at what props are required in /components/characterlist.js to get sense of what you need to pass as props
 * > Use `console.log` on 'this.state.characters' or reference /data/index.js to see what data is being used
 * 
 */
class App extends Component {
  state = {
    characters: characterData,          // <-- DO NOT CHANGE; characters are from '/data/index.js'
    sortUp: 0                           // <-- DO NOT CHANGE;
  }


  // DO NOT EDIT; BUILT ALREADY
  sortFunction = () => {
    if (this.state.sortUp === 0) {
      this.setState({
        characters: [...this.state.characters].sort((a, b) => a.name > b.name ? 1 : -1),
        sortUp: 1
      })
    } else if (this.state.sortUp === 1) {
      this.setState({
        characters: [...this.state.characters].sort((a, b) => a.name < b.name ? 1 : -1),
        sortUp: 2
      })
    } else {
      this.setState({
        characters: characterData,
        sortUp: 0
      })
    }
  }

  // !IMPORTANT: EDIT LINE 64 ONLY
  render() {
    //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
    // -------- CODE HERE ----------



    // -----------------------------
    return (
      <div className="container">
        <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.sortFunction}
          >
            Sort!
          </button>
        </div>
        <CharacterList
          // Enter Props Here!
          
        />
      </div>
    );
  }
}

export default App;
