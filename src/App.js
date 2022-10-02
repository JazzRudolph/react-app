import React, { useState } from 'react';
import './App.css';
import MyImage from './ShoppingCart.png';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  const today = new Date();
  const date = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
  const showTime = today.getHours() 
  + ':' + today.getMinutes() 
  + ":" + today.getSeconds();



  return (
    <div className='App outLine' >
      <img src={MyImage}/>
      <h1>Lets Go Shopping</h1>
      <h2>{date}</h2>
      <h3>{showTime}</h3>
      <br/>
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