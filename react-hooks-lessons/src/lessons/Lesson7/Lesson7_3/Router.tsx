import { useState } from "react";
import IndexPage from "./IndexPage";
import ArtistPage from "./ArtistPage";
import Layout from "./Layout";

const Router = () => {
  const [page, setPage] = useState("/");

  function navigate(url: string) {
    setPage(url);
  }

  let content;
  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  }
  return <Layout>{content}</Layout>;
};

export default Router;
