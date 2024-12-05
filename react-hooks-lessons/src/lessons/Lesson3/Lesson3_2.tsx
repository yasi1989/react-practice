const Lesson3_2 = () => {
  const scrollToIndex = () => {};

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex()}>Cat1</button>
        <button onClick={() => scrollToIndex()}>Cat2</button>
        <button onClick={() => scrollToIndex()}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
        >
       <ul>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=small" alt="Cat 1" width="200" height="200" />
  </li>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=med" alt="Cat 2" width="300" height="200" />
  </li>
  <li>
    <img src="https://api.thecatapi.com/v1/images/search?size=small" alt="Cat 3" width="250" height="200" />
  </li>
</ul>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
