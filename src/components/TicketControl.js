import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState({formVisibleOnPage: true}); //setState() takes an object as argument. Object needs to contain any key-value pairs that application needs to update.
  }

  render(){
    // we can use plain JavaScript outside return() statement
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
      addTicketButton = <button onClick={this.handleClick}>Add ticket</button>
    }
    return(
      // JSX and {} need to be used inside return() statement
      <React.Fragment> 
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }
}

export default TicketControl;