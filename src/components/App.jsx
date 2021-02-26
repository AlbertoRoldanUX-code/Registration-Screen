import React from 'react';
import Login from "./Login";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return ( 
  <div className="container">
  {userIsRegistered?  <Login /> : <Form />   }
  </div>
  );
}

export default App;
