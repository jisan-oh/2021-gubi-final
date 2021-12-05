import { useParams } from "react-router-dom";
import stories from "../data/stories";
import React from "react";
import StoryCard from "../component/StoryCard";

type Params = "title";

const StoryPage = () => {
  const { title } = useParams<Params>();
  const story = stories.find((story) => story.title === title);

  if (!story) {
    return <div>찾으시는 이야기가 없네요.</div>;
  }

  return (
    <article>
      <StoryCard story={story} />
    </article>
  );
};

export default StoryPage;
