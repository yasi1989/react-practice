import { useOptimistic, useState } from "react";
import { sendMessage } from "./action";

const UseOptimisticSample = () => {
  type Message = {
    text: string;
    sending: boolean;
    key: number;
  }
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessage, addOptimisticMessage] = useOptimistic(messages, (state: Message[], newMessage: string) => [
    ...state,
    {
      text: newMessage,
      sending: true,
      key: state.length + 1,
    }
  ]);
  const handleAction = async (formData: FormData) => {
    const sentMessage = formData.get("message") as string;
    addOptimisticMessage(sentMessage);
    const message = await sendMessage(sentMessage);
    setMessages((messages) => [
      ...messages,
      {text: message, sending:false, key: messages.length + 1},
    ])
  };
  return (
    <div>
      {
        optimisticMessage.map((m) => (
          <div key={m.key}>{m.text} {m.sending && "(sending...)"}</div>
        ))
      }
      <form action={handleAction}>
        <input
          type="text"
          name="message"
          id="message"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button className="ml-2 px-4 py-2 border-2 rounded-md hover:bg-slate-200 transition-all duration-300">
          送信
        </button>
      </form>
    </div>
  );
};

export default UseOptimisticSample;
