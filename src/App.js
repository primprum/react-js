import React, { useState } from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  const counter = 3;

  const hello = () => {
    console.log("hello world!")
  }

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setRed(true);
    setRed(!isRed) // flip the state
  }

  return (
    <div className="my-tweets">
      <h1>Hello React!</h1>
      <button>{counter}</button>
      <button onClick={hello}>Show Hello</button>

      <Tweet name="John" message="Good morning" likes={400}/>
      <Tweet name="Michael" message="Good afternoon" likes={500}/>
      <Tweet name="Adam" message="Good evening" likes={700}/>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <h1 className={isRed ? 'red' : ''}>This color should changed!</h1>
    </div>
  );
}

export default App;
