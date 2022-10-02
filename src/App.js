import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  const today = new Date();
  const date = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;

  const current = new TimeRanges();
  const timeRanges = `${current.getHour()}`;



  return (
    <div className='App'>
      <h1>Todays Agenda</h1>
      <h2>Current date is {date}</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add to list</button>
        <ul>
          {list.map((todo)  => (
          <li key={todo.id}>
              {todo.todo}
              <button className="button" onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App