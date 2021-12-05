import { Flow, instantEndFlows, Story } from "../data/stories";
import React, { useState } from "react";
import questions from "../data/selections";
import { search } from "../data/search";
import StoryCard from "../component/StoryCard";

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
      <h1 className="text-2xl font-semibold mb-1">장자못 전설 살펴보기</h1>
      <p className="pt-1">
        장자못 전설은 전국적으로 퍼져 있지만, 지역마다 내용이 조금씩 다릅니다.
        <br />
        이야기의 분기를 따라가며 각 지역마다 들려주는 이야기를 확인해 봅시다.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mt-4 mb-8"
      >
        <ul className="space-y-4">
          {questions.map((question, questionIndex) =>
            (questionIndex === 0 || flow[questionIndex - 1] > 0) &&
            (!instantEnd || instantEnd[questionIndex]) ? (
              <li
                key={question.question}
                className="shadow-md px-6 py-6 rounded-xl border-2 border-purple-50 bg-gradient-to-r from-white via-white to-purple-50"
              >
                <h2 className="font-semibold text-xl mb-3">
                  {question.question}
                </h2>
                <ul className="space-y-2 ml-1">
                  {question.answers.map((answer, answerIndex) =>
                    answer === null ? null : (
                      <li key={answer} className="flex items-center">
                        <input
                          type="radio"
                          className="w-4 h-4 flex-shrink-0"
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
                        <label htmlFor={answer} className="ml-3">
                          {answer}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ) : null
          )}
        </ul>
      </form>
      {flow.reduce((prev, current) => (current !== 0 ? prev + 1 : prev)) ===
        flow.length || instantEnd ? (
        <div className="space-y-4">
          {result.exactStories.length > 0 && (
            <div className="py-6 border-t-2 border-gray-50">
              <h1 className="font-semibold text-2xl text-purple-700">
                일치하는 이야기
              </h1>
              <Result exact stories={result.exactStories} />
            </div>
          )}
          {result.otherStories.length > 0 && (
            <div className="py-6 border-t-2 border-gray-50">
              <h1 className="font-semibold text-2xl">비슷한 이야기</h1>
              <Result stories={result.otherStories} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

const Result: React.FC<{ stories: Story[]; exact?: boolean }> = ({
  stories,
  exact,
}) => {
  return (
    <ul className="mt-6 space-y-6">
      {stories.map((story) => (
        <li key={story.title}>
          <StoryCard story={story} exact={exact} />
        </li>
      ))}
    </ul>
  );
};

export default SearchPage;
