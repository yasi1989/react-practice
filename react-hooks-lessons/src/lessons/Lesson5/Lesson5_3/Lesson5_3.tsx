import { useState } from "react";

const Lesson5_3 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number) => {
    let i = 0;
    while (i < 100000000) i++;
    return count * 2;
  };

  const doubleCount = double(count2);

  return (
    <div>
      <p>Counter: {count1}</p>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Increment count1
      </button>

      <p>
        Counter: {count2}, {doubleCount}
      </p>
      <button
        onClick={() => setCount2(count2 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Increment count2
      </button>
    </div>
  );
};

export default Lesson5_3;
