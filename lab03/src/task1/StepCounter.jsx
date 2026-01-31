import { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "1px solid black", padding: 10, marginBottom: 20 }}>
      <h3>Current count: {count}</h3>
      <p>Total operations: {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>History (last 5):</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;