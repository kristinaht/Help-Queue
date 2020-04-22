import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";



function TicketList(props){
  return(
    <React.Fragment> 
      <hr/>
      {props.ticketList.map((ticket, index) => //loop through the list passed down from TicketControl
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index} />
      )}
    </React.Fragment>
  );
}


//Add props for ticketList:
TicketList.propTypes = {
  ticketList: PropTypes.array
}

export default TicketList;


// function TicketList(){
//   return(
//     <React.Fragment> 
//       <Ticket 
//       location="3A"
//       names="Thato and Haley"
//       issue="Firebase will not record!"/>
//       <Ticket
//       location="4B"
//       names="Sleater and Kinney"
//       issue="Prop types are throwing an error." />
//     </React.Fragment>
//   );
// }