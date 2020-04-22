import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTicketCreation({names:event.target.names.value, location:event.target.location.value, id: v4()});
  }

  return (
    <React.Fragment>
     <form onSubmit ={handleNewTicketFormSubmission}> 
       <input type="text"
       name = "names"
       placeholder="Pair names" />
       <input type=
       "text"
       name="location" 
       placeholder="Your location"/>
       <textarea
       name="issue"
       placeholder="Describe your issue" />
       <button type="submit">Help!</button>
     </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func //this.handleAddingNewTicketToList is passed down from TicketControl to NewTicketForm componenet as onNewTicketCreation.
};

export default NewTicketForm;