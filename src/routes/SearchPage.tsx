import { Flow, instantEndFlows, Story } from "../data/stories";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import selections from "../data/selections";
import questions from "../data/selections";
import { search } from "../data/search";

const SearchPage = () => {
  const [flow, setFlow] = useState<Flow>([0, 0, 0, 0, 0, 0, 0]);

  const instantEnd = instantEndFlows.find((endFlow) =>
    endFlow.some((value, i) => flow[i] === value)
  );
  const flowWithEnd = flow.map((v, i) =>
    instantEnd ? (instantEnd[i] ? v : 0) : v
  ) as Flow;

  const result = search(flowWithEnd);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {questions.map((question, questionIndex) =>
          (questionIndex === 0 || flow[questionIndex - 1] > 0) &&
          (!instantEnd || instantEnd[questionIndex]) ? (
            <ul key={question.question}>
              <li>
                {question.question}
                <ul>
                  {question.answers.map((answer, answerIndex) =>
                    answer === null ? null : (
                      <li key={answer}>
                        <input
                          type="radio"
                          checked={flow[questionIndex] === answerIndex}
                          onChange={() =>
                            setFlow((flow) => {
                              const newFlow = [...flow] as Flow;
                              newFlow[questionIndex] = answerIndex;
                              return newFlow;
                            })
                          }
                          id={answer}
                          name={question.question}
                        />
                        <label htmlFor={answer}>{answer}</label>
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          ) : null
        )}
      </form>
      {flow.reduce((prev, current) => (current !== 0 ? prev + 1 : prev)) ===
        flow.length || instantEnd ? (
        <div>
          {result.exactStories.length > 0 && (
            <>
              <h1>가장 비슷한 이야기들</h1>
              <Result stories={result.exactStories} />
            </>
          )}
          {result.otherStories.length > 0 && (
            <>
              <h1>비슷한 이야기들</h1>
              <Result stories={result.otherStories} />
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

const Result: React.FC<{ stories: Story[] }> = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.title}>
          <Link to={`/stories/${story.title}`}>{story.title}</Link>
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
        </li>
      ))}
    </ul>
  );
};

export default SearchPage;
