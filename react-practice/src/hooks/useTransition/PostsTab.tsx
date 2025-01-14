const PostsTab = () => {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
};

function SlowPost({ index }: { index: number }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 6) {
    // Do nothing for 6 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
}

export default PostsTab;
