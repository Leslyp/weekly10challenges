import React, { Component } from 'react';

// create function component to display contact info element
class Contact extends Component {
	constructor (){
		super();
		this.handleToggleContact = this.handleToggleContact.bind(this);
		this.state = {
			isPending: true,
		  bgColor: {
				background: 'orange'
			}
		}
	}
	// change state of isPending to false when clicked
	handleToggleContact (event){
	 	console.log(this.state.isPending);
    event.preventDefault();
    this.setState({
      isPending: false,
      bgColor: {
				background: 'green'
			}
    })
  }

	render(){
		// set values equal to state values so they are not undefined
		const isPending = this.state.isPending;
		const bgColor = this.state.bgColor;

	  return (
	    <div className="contact">
	      <p>You need to contact {this.props.firstName} {this.props.lastName} at {this.props.phoneNumber}</p>
				<button style={bgColor} onClick={this.handleToggleContact}>{isPending ? "Pending" : "Done"}</button>
	    </div>
	  );
	}     
}

export default Contact;