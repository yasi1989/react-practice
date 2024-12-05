import { useState } from "react";

const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {};

  return (
    <div>
      <div>
        <p>ログイン済み:</p>
        <button>ログアウト</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>ログイン</button>
      </div>
    </div>
  );
};

export default Lesson4_1;
