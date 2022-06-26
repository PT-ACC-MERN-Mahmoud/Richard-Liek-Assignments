import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <AddTodo list={list} setList={setList} />
      {list.map((task, i) => (
        <TodoList task={task} setList={setList} index={i} list={list}/>
      ))}
    </div>
  );
}

export default App;
