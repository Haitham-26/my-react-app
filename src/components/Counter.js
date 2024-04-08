import "../css/counter.css";
import { useState } from "react";
export default function Counter() {
  /* Counter */
  const [count, setCount] = useState(localStorage.getItem("counter") || 0);
  let newCount;
  function Counting() {
    newCount = parseInt(count) + 1;
    setCount(newCount);
    localStorage.setItem("counter", newCount);
  }
  function Clear() {
    localStorage.clear();
    setCount(0);
  }
  return (
    <div>
      <div className="count-divs" onClick={() => Counting()}>
        Count {count}
      </div>
      <div className="clear" onClick={() => Clear()}>
        Clear
      </div>
    </div>
  );
}
