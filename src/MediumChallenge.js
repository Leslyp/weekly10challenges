// MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}

// JSX syntax allows the code to be recognized in react (https://facebook.github.io/react/docs/rendering-elements.html)
import React, { Component } from 'react';

class MediumChallenge extends Component {
  // render is what is going to display in the DOM
  render() {
    return(    
      <div className ="App">
        <div className ="contact">      
         <Contact firstName ="Lesly" lastName ="Perez" phoneNumber ="7049572397" /> 
        </div>
      </div>
    );
  }
}

// create function component to display contact info element
function Contact(props){
  return (
    <div className="contact">
      <p>
        You need to contact {props.firstName} {props.lastName} at {props.phoneNumber}
      </p>
    </div>
  );     
}

export default MediumChallenge;
