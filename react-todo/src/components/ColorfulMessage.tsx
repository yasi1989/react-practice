import { ReactNode } from "react";

type ColorfulMessageProps = {
    color: string;
    children: ReactNode;  
};
const ColorfulMessage = ({color, children}: ColorfulMessageProps) => {
  const contentStyle = {
    color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
