import { useState } from "react";
import { useToggle } from "./hooks/useToggle";

const Lesson5_2 = () => {
  const [count, setCount] = useState(0);
  const [on, toggle] = useToggle(false);

  console.log("Parent rendered");

  return (
    <div>
      <p>Parent: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <Child toggle={toggle} on={on} />
    </div>
  );
};

export default Lesson5_2;

// eslint-disable-next-line react-refresh/only-export-components
const Child = ({ toggle, on }: { toggle: () => void; on: boolean }) => {
  console.log("Child rendered");
  let i = 0;
  while (i < 10000000) i++;
  return (
    <div>
      <p>Child {on ? "ON" : "OFF"}</p>
      <button onClick={toggle} className="border-2 px-2 py-2 rounded-md">
        Toggle
      </button>
    </div>
  );
};
