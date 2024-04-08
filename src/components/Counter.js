import "../css/counter.css";
import { useState } from "react";
export default function Counter() {
  /* Counter */
  const [count, setCount] = useState(
    localStorage.getItem(localStorage.getItem("counting"))
  );
  function Counting() {
    setCount(count + 1);
    localStorage.setItem("counting", count);
  }
  return (
    <div>
      <div className="count-divs" onClick={() => Counting()}>
        Count {count}
      </div>
    </div>
  );
}
