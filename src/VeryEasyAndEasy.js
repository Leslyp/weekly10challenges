// VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
// EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"

import React from 'react';

// create function component that will display the hello world message and name
function VeryEasyAndEasy(props) {
    return (
      // use divs so that you target it later in CSS
      // this syntax is JSX, returns React element
      <div className="greeting">
        <h1><span>Hello World, {props.name}</span></h1>
      </div>
    );      
}

export default VeryEasyAndEasy;


