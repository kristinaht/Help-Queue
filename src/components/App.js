import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return( //under the hood, React is using React.createElement() method to create these elements. We write HTML which is syntatic sugar in this case.
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;