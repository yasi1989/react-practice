import { useState } from "react";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";
import TabButton from "./TabButton";

const UseTransitionSample = () => {
  const [tab, setTab] = useState("about");
  const selectTab = (nextTab: string) => {
    setTab(nextTab);
  };

  return (
    <div>
      <div className="flex gap-4">
        <TabButton
          isActive={tab === "about"}
          onClick={() => selectTab("about")}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === "posts"}
          onClick={() => selectTab("posts")}
        >
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => selectTab("contact")}
        >
          Contact
        </TabButton>
      </div>
      <hr className="mt-4" />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
};

export default UseTransitionSample;
