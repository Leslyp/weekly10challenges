// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

// JSX syntax allows the code to be recognized in react (https://facebook.github.io/react/docs/rendering-elements.html)
import React, { Component } from 'react';
import Contact from'./Contact';

class VeryHardChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //create array of objects, pending should be orange, done shoud be green
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
      <div className ="VeryHardChallenge">      
        {contactsList}
      </div>
    );
  }
}

export default VeryHardChallenge;

