import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {
  // function that creates a form of name and email
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  
  
  export default App;
  
  // const todo = ['Learn React','Climb Mt. Everest','Run a Marathon','Feed the dogs']
  // const todoList = todo.map(todo => 
  //   <ul>
  //     <li>{todo}</li>
  //   </ul>
  // )
  
  // return (
  //       <div>
  //         <h1 className="title">Hello Dojo!</h1>
  //         <h2>Things I need to do:</h2>
  //         <div className="list">{todoList}</div>
  //       </div>
  // );