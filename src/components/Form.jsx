import React, { useState } from 'react'
import Input from "./Input";



function Form(){
    
  const [btnColor, setBtnColor] = useState(false);

  function changeBtnToBlack(){
    setBtnColor(true);
  }

  function changeBtnToWhite(){
    setBtnColor(false);
  }
  
  
  return (
      <div>
    <h1>Sign up</h1>
    <form className="form">
    <Input 
    type={"text"}
    placeholder={"Username"}
    />
    <Input 
    type={"password"}
    placeholder={"Password"}
    />
    <Input 
    type={"password"}
    placeholder={"Confirm Password"}
    />
    <button type="submit" onMouseOver={changeBtnToBlack} onMouseOut={changeBtnToWhite} style={{backgroundColor: btnColor? "black": "white"}}>Register</button>
  </form>
  </div>);
}

export default Form;