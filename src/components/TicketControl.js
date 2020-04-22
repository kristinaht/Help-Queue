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

  render(){
    // we can use plain JavaScript outside return() statement
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
    }
    return(
      // JSX and {} need to be used inside return() statement
      <React.Fragment> 
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TicketControl;