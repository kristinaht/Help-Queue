import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Help.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component ins\'t rendering.'
  }
]

function TicketList(){
  return(
    <React.Fragment> 
      <hr/>
      {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index}/>
      )}
    </React.Fragment>
  );
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