import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const handleClick = () => {

  };

  return (
    <>
      <button onClick={handleClick}></button>
      <ColorfulMessage color="red">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">おおたけさん？</ColorfulMessage>
    </>
  )
}

export default App