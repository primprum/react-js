import React from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  const counter = 3;

  const hello = () => {
    console.log("hello world!")
  }

  return (
    <div className="my-tweets">
      <h1>Hello React!</h1>
      <button>{counter}</button>
      <button onClick={hello}>Show Hello</button>

      <Tweet name="John" message="Good morning" likes={400}/>
      <Tweet name="Michael" message="Good afternoon" likes={500}/>
      <Tweet name="Adam" message="Good evening" likes={700}/>
    </div>
  );
}

export default App;
