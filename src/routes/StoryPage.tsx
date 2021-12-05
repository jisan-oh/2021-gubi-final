import { useParams } from "react-router-dom";
import stories from "../data/stories";
import selections from "../data/selections";
import React from "react";

type Params = "title";

const StoryPage = () => {
  const { title } = useParams<Params>();
  const story = stories.find((story) => story.title === title);

  if (!story) {
    return <div>찾으시는 이야기가 없네요.</div>;
  }

  return (
    <article>
      <h1>{story.title}</h1>
      <ul>
        <li>들은 곳: {story.writtenPlace}</li>
        <li>이야기하신 분: {story.speaker}</li>
        {story.storyPlace && <li>이야기의 배경: {story.storyPlace}</li>}
        <li>
          줄거리:
          <ul>
            {story.flow.map((selection, index) =>
              selection ? (
                <li key={index}>
                  {selections[index].question}
                  {" - "}
                  {selections[index].answers[selection]}
                </li>
              ) : null
            )}
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default StoryPage;
