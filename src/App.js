import React, { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className='App'><h1>Todays Agenda</h1>
    I am a div!</div>
  )
}

export default App