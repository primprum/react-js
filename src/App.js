import React from 'react';
import './App.css';

function App() {
  const counter = 3;

  const hello = () => {
    console.log("hello world!")
  }

  return (
    <div>
      <h1>Hello React!</h1>
      <button>{counter}</button>
      <button onClick={hello}>Show Hello</button>
    </div>
  );
}

export default App;
