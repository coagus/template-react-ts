import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Contador: {count}</h1>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
