import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  // Phase 1: Mounting
  useEffect(() => {
    console.log("Counter has been mounted.");
  }, []);

  // Phase 2: Updating
  useEffect(() => {
    console.log(`Counter's value has updated to ${count}.`);

    // Cleanup
    return () => {
      console.log(`Counter's value has updated from ${count}.`);
    };
  }, [count]);

  // Phase 3: Unmounting
  useEffect(() => {
    return () => {
      console.log("Counter has been unmounted.");
    };
  }, []);

  return (
    <div className="counter">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};
export default Counter;
