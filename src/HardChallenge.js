// HARD: Using an array of contacts, loop through each one and create a new Contact component for each

// JSX syntax allows the code to be recognized in react (https://facebook.github.io/react/docs/rendering-elements.html)
import React, { Component } from 'react';

class HardChallenge extends Component {
  /* constructor for a React component is called before it is mounted
   you should call super(props) before any other statement. Otherwise, 
   this.props will be undefined , which can lead to bugs.
  */
  constructor() {
    super();
    this.state = {
      //create array of objects
      // pending should be orange, done shoud be green
      contacts: [
        {
          firstName: "Jody",
          lastName: "Revens",
          phoneNumber: "7043856284",
        },

       {
          firstName: "Roger",
          lastName: "Lowski",
          phoneNumber: "7049852251",
        },

       {
          firstName: "Doug",
          lastName: "Pugens",
          phoneNumber: "7048436252",        
        }
      ]
    }
  }
  
  // render is what is going to display in the DOM
  render() {
    // map through array of contacts and create new contact component
    const contactsList = this.state.contacts.map(function (contact, i) {  
      return(
        <Contact 
          key={i}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber} 
        />
      );
    });

    return(    
      <div className ="HardChallenge">     
        {contactsList}
      </div>
    );
  }
}

// create function component to display contact info 
function Contact(props){
  return (
    <div className="contact">
      <p>You need to contact {props.firstName} {props.lastName} at {props.phoneNumber}</p>
    </div>
  );     
}

export default HardChallenge;
