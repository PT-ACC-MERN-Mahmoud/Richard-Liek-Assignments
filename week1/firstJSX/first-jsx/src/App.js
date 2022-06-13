import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const todo = ['Learn React','Climb Mt. Everest','Run a Marathon','Feed the dogs']
  const todoList = todo.map(todo => <li>{todo}</li>)
  
  return (
        <div>
          <h1 className="title">Hello Dojo!</h1>
          <h2>Things I need to do:</h2>
          <div className="list">{todoList}</div>
        </div>
  );
}

export default App;
