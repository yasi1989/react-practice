import { useEffect, useState } from "react"

const Lesson2_1 = () => {
  const [position, setPosition] = useState({x: 0, y:0});

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
    };
    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  },[]);
  

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
