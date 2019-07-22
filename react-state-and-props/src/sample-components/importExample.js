// this statement is required anytime you are building a react component in your folder
import React from 'react';

const ImportExample = props => <h1>Hello, this is a sample component that I'm importing.</h1>;



/**
 * Note that we are exporting our `Example` function. This allows
 * us to use this component anywhere we want it in our React project.
 * 
 * The `default` keyword is important so that we can import it properly.
 */
export default ImportExample;