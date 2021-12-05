// learn on how to use useState
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // function decrementCount() {
  //   setCount(count - 1);
  // }

  // function incrementCount() {
  //   setCount(count + 1);
  // }

  // the problem about using that setCount style above is that if it's being like below:

  // function decrementCount() {
  //   setCount(count - 1);
  //  setCount(count - 1);
  // }

  // then it will not reduce the value by 2 decrement
  // so, would be better if like this:

  function betterDecrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function betterIncrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // so, if like this:

  // function betterDecrementCount() {
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1);
  // }

  // then it will be decreased by 2

  return (
    <>
      <button onClick={betterDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={betterIncrementCount}>+</button>
    </>
  );
}

export default App;
