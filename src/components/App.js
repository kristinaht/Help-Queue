import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  
  return( //under the hood, React is using React.createElement() method to create these elements. We write HTML which is syntatic sugar in this case.
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;