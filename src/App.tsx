import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [showCounter, setShowCounter] = useState<boolean>(false);

  return (
    <>
      <h1>React Components Lifecycle</h1>
      <div className="card">
        <button
          onClick={() => {
            setShowCounter(!showCounter);
          }}
        >
          Toggle counter
        </button>
        {showCounter && <Counter />}
      </div>
      <p>In order to see the logs you need to open your console</p>
      <p className="read-the-docs">
        Read the explainations written in README.md
      </p>
    </>
  );
}

export default App;
