import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
};
