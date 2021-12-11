// learn on how to use useState, example with button
import React from "react";
import { useState } from "react";

const ReactState = () => {
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
    <div>
      <button onClick={betterDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={betterIncrementCount}>+</button>
    </div>
  );
};

export default ReactState;
