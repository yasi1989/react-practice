import { useRef, useState } from "react";

const Lesson3_3 = () => {
  // const [inputText, setInputText] = useState("");
  const inputTextRef = useRef<HTMLInputElement>(null);
  console.log("render");
  const handleClick = () => {
    alert(inputTextRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border-b"
        ref={inputTextRef}
        // onChange={(e) => setInputText(e.target.value)}
        // value={inputText}
      />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
