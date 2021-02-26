import React from 'react';
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return ( 
  <div className="container">
  {userIsRegistered?  <Login /> : <h1>Hello</h1>   }
  </div>
  );
}

export default App;
