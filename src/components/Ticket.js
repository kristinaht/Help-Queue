import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}!</em></p>
      <hr/>
    </React.Fragment>
  );
}

//all PropTypes in the component will be stored inside the object literal.
//propTypes is a property of Ticket so that is why it is not capitilized. 
Ticket.propTypes = {
  //key : value pairs
  names: PropTypes.string.isRequired, //PropTypes is capitalized here because we are using the PropTypes library that we imported
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket;

//COMMON propTypes:

// MyExampleComponent.propTypes = {
//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,
// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
// exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName); here we declare that a prop is an instance of a class
// }
