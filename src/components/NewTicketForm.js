import React from "react";
import { v4 } from "uuid";

function NewTicketForm(){

  function handleNewTicketFormSubmission(event)
  {

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

export default NewTicketForm;