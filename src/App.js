import React from "react";
import {  Button, Form, TextInput } from '@carbon/react';

import { useState } from "react";
import "../src/App.css"




function App() { 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function onFormSubmit(e) {
    e.preventDefault();
    if(username === password.split("").reverse().join("")) {
      alert("Password is correct")
    } else {
      alert("Password is incorrect")
    }
    setUsername("");
    setPassword("");
  }
  return (
    <div className="App" style={{Align:"center",marginTop:"100px",marginLeft:"350px",marginRight:"350px", fontSize:"30px" ,background:"white",paddingBottom:"30px"}}>
     
     <div style={{textAlign:"center",padding:"20px",backgroundColor:"burlywood"}}>Login Page</div>
     <Form  onSubmit={e=>onFormSubmit(e)}>

     <TextInput className="app1" 
        onChange={e=>setUsername(e.target.value)}
        value={username}
        id="username"
        invalidText="Invalid error message."
        labelText="Username"
        placeholder="Enter Username"
        required
        $text-placeholder="Red"
        />
        
      <TextInput className="app2"
        id="password"
        value={password}
        type="password"
        labelText="Password"
        placeholder="Enter Password"
        required
        onChange={e=>setPassword(e.target.value)}
        onInvalid={h=>h.target.setCustomValidity("Password is incorrect!")}
        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"

      />
      <Button type="submit"  className="app3"  >Submit</Button>
      </Form>
    </div>
  );
}

export default App;

