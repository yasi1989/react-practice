import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const Lesson8_2 = () => {
  const [text, setText] = useState("");
  const defferdText = useDeferredValue(text);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className={`border-2 border-slate-400 px-3 py-3 rounded-md`}
        value={text}
      />
      <SlowList text={defferdText} />
    </div>
  );
};

export default Lesson8_2;
