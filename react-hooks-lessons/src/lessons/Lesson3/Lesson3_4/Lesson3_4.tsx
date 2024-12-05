import { MyVideoPlayer } from "./MyVideoPlayer";

const Lesson3_4 = () => {
  return (
    <div>
      <button onClick={() => {}}>Play</button>
      <button onClick={() => {}}>Pause</button>
      <br />
      <MyVideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
    </div>
  );
};

export default Lesson3_4;
