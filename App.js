import React, { Fragment, useState } from "react";
import Axios from 'axios'
import './App.css';

import InputTodo from "./components/InputTodo";

import ListTodos from "./components/ListTodos";
//import login from "./components/login";

function App() {
  const[usernameReg,setUsernameReg] =useState("");
  const[passwordReg,setPasswordReg]=useState("");

  const[username,setUsername] =useState("");
  const[password,setPassword]=useState("");



  

  




  const register = () =>{
    Axios.post("https://localhost5000/register",{
      username: usernameReg,
      password:passwordReg,
    }).then((response) => {
      console.log(response);
    }
    
    );
  };

  

  const login = () =>{
    Axios.post("https://localhost5000/login",{
      username: username,
      password:password,
    }).then((response) => {
      console.log(response);
    }
    
    );
  };









  return (
    <Fragment>
      < div className="container">
      <InputTodo />
      <ListTodos/>
      </div>
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <lable>Username</lable>
          <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }
          }
          />
          <label>Password</label>
          <input 
          type="text"
          onChange ={(e) =>{
            setPasswordReg(e.target.value);
          }
          }
           />
           <button onClick={register}> Register</button>
        </div>




        <div className="login">
          <h1>Login</h1>
          <input type="text" placeholder="Username..."  onChange ={(e) =>{
            setUsername(e.target.value);
          }
          }/>
          <input type="password" placeholder="Password..." onChange ={(e) =>{
            setPassword(e.target.value);
          }
          }/>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
