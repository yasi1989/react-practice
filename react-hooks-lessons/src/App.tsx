import "./App.css";
import Lesson1_2 from "./lessons/Lesson1/Lesson1_2";
import Lesson2_1 from "./lessons/Lesson2/Lesson2_1/Lesson2_1";
import Lesson2_2 from "./lessons/Lesson2/Lesson2_2/Lesson2_2";
import Lesson2_3 from "./lessons/Lesson2/Lesson2_3/Lesson2_3";
import Lesson3_1 from "./lessons/Lesson3/Lesson3_1";
import Lesson3_2 from "./lessons/Lesson3/Lesson3_2";
import Lesson3_3 from "./lessons/Lesson3/Lesson3_3";
import Lesson3_4 from "./lessons/Lesson3/Lesson3_4/Lesson3_4";
import AuthProvider from "./lessons/Lesson4/Lesson4_1/context/AuthContext";
import Lesson4_1 from "./lessons/Lesson4/Lesson4_1/Lesson4_1";
import Lesson5_1 from "./lessons/Lesson5/Lesson5_1/Lesson5_1";
import Lesson5_2 from "./lessons/Lesson5/Lesson5_2/Lesson5_2";
import Lesson5_3 from "./lessons/Lesson5/Lesson5_3/Lesson5_3";

function App() {
  return (
    <div className="flex items-center max-w-4xl mx-auto py-8 text-2xl">
      {/* <Lesson1_1 /> */}
      {/* <Lesson1_2 /> */}
      {/* <Lesson2_2 /> */}
      {/* <Lesson2_3 /> */}
      {/* <Lesson3_1 /> */}
      {/* <Lesson3_2 /> */}
      {/* <Lesson3_3 /> */}
      {/* <Lesson3_4 /> */}
      {/* <AuthProvider>
      <Lesson4_1 />
      </AuthProvider> */}
      {/* <Lesson5_1 /> */}
      {/* <Lesson5_2 /> */}
      <Lesson5_3 />
      {/* ... */}
    </div>
  );
}

export default App;
