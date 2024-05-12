import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, countSet] = useState(0);
  const [step, stepSet] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => stepSet((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => stepSet((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => countSet((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => countSet((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
