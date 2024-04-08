import "../css/counter.css";
import { useState } from "react";
export default function Counter() {
  /* Counter */
  const [count, setCount] = useState(sessionStorage.getItem("counter") || 0);
  function Counting() {
    const newCount = parseInt(count) + 1;
    setCount(newCount);
    sessionStorage.setItem("counter", newCount);
  }
  function Clear() {
    sessionStorage.clear();
    setCount(0);
  }
  return (
    <div className="count-divs">
      <div className="count-div" onClick={() => Counting()}>
        Count {count}
      </div>
      <div className="clear" onClick={() => Clear()}>
        Clear
      </div>
    </div>
  );
}
