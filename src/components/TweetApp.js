import React, { useState } from "react";
import "./App.css";
import Tweet from "./Tweet";

function App() {
  const counter = 3;

  const hello = () => {
    console.log("hello world!");
  };

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setRed(true);
    setRed(!isRed); // flip the state
  };

  const [users] = useState([
    { name: "Ed", message: "Hello There!" },
    { name: "John", message: "Hello I am John!" },
    { name: "Traversy", message: "Hello I am awesome!" },
  ]);

  return (
    <div className="my-tweets">
      <h1>Hello React!</h1>
      <button>{counter}</button>
      <button onClick={hello}>Show Hello</button>

      {/* increment value and flipping color */}
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <h1 className={isRed ? "red" : ""}>This color should changed!</h1>

      {/* manual assign */}
      <Tweet name="John" message="Good morning" likes={400} />
      <Tweet name="Michael" message="Good afternoon" likes={500} />
      <Tweet name="Adam" message="Good evening" likes={700} />

      {/* using map */}
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} /> // using format from Tweet
      ))}
    </div>
  );
}

export default App;
