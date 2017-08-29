// HARD: Using an array of contacts, loop through each one and create a new Contact component for each
// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.
// need button for each contact, and reset button

// extra notes: 
// JSX syntax allows the code to be recognized in react (https://facebook.github.io/react/docs/rendering-elements.html)
import React, { Component } from 'react';
import VeryHardChallenge from './VeryHardChallenge';
import HardChallenge from './HardChallenge';
import MediumChallenge from './MediumChallenge';
import VeryEasyAndEasy from './VeryEasyAndEasy';
import './App.css';

class App extends Component {
  // render is what is going to display in the DOM
  render() {
    return(    
      <div className ="App">
        <h1>Very Easy and Easy Challenge</h1>
        <VeryEasyAndEasy name="Lesly" />
        <hr />
        <h1>Medium Challenge</h1>
        <MediumChallenge />
        <hr />
        <h1>Hard Challenge</h1>
        <HardChallenge />
        <hr />
        <h1>Very Hard Challenge</h1>
        <VeryHardChallenge />
      </div>
    );
  }
}

export default App;