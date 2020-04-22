import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterTicketList: []
    };
  }

  //handleAddingNewTicketToList is the event handler.
  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket); //we are assigning value to newMasterTicketList by using concat() - this method does not modify state, it creates a copy of masterTicketList that will be stored in newMasterTicketList
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({formVisibleOnPage: false});
  }

  render(){
    // we can use plain JavaScript outside return() statement
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} /> //this.handleAddingNewTicketToList will be passed to NewTicketForm as a prop. It will be saved in the prop onNewTicketCreation
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList}/>
      buttonText = "Add Ticket";
    }
    return(
      // JSX and {} need to be used inside return() statement
      <React.Fragment> 
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;