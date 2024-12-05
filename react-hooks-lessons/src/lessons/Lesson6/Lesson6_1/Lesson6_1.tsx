import Thread from "./Thread";

export type Message = {
  text: string;
  sending: boolean;
  key: number;
};

const Lesson6_1 = () => {
  return (
    <div>
      <Thread />
    </div>
  );
};

export default Lesson6_1;
