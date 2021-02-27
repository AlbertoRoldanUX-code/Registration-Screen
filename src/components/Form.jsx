import React from 'react'
import Input from "./Input";



function Form(){
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
    <button type="submit">Register</button>
  </form>
  </div>);
}

export default Form;