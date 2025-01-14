import { useOptimistic, useState } from "react";
import { sendMessage } from "./action";

const UseOptimisticSample = () => {
  type Message = {
    text: string;
    sending: boolean;
    key: number;
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessages] = useOptimistic(
    messages,
    (currentState: Message[], newMessage: string) => [
      ...currentState,
      { text: newMessage, sending: true, key: currentState.length + 1 },
    ]
  );
  const handleAction = async (formData: FormData) => {
    const message = formData.get("message") as string;
    addOptimisticMessages(message);
    const sentMessage = await sendMessage(message);
    setMessages((ms) => [
      ...ms,
      { text: sentMessage, sending: false, key: ms.length + 1 },
    ]);
  };
  return (
    <div>
      <form action={handleAction}>
        <input
          type="text"
          name="message"
          id="message"
          className="p-2 rounded-md border-2"
        />
        <button className="ml-2 px-4 py-2 border-2 rounded-md hover:bg-slate-200">
          送信
        </button>
      </form>
      {optimisticMessages.map((ms) => (
        <div key={ms.key}>
          {ms.text} {ms.sending && "sending..."} {ms.key}
        </div>
      ))}
    </div>
  );
};

export default UseOptimisticSample;
