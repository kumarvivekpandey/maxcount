import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <div className="App">
      <h1>{count} </h1>
      <p> Time left : {time} </p>
      <button disabled={time === 0} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
