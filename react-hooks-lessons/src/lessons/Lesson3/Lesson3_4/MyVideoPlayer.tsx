type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

export const MyVideoPlayer = (props: MyVideoPlayerProps) => {
  return (
    <video width={props.width}>
      <source src={props.src} type={props.type} />
    </video>
  );
};
