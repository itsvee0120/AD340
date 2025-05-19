import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };
  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  const correctIncrementTwice = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
