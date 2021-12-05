import stories, { Flow, instantEndFlows, Story } from "./stories";

type SearchResult = {
  exactStories: Story[];
  otherStories: Story[];
};

export function search(flow: Flow): SearchResult {
  stories.forEach((story) => {
    console.log(story.title, dist(flow, story.flow));
  });

  return stories
    .sort((a, b) => dist(flow, a.flow) - dist(flow, b.flow))
    .reduce<SearchResult>(
      (result, story) =>
        dist(flow, story.flow) === 0
          ? {
              ...result,
              exactStories: [...result.exactStories, story],
            }
          : {
              ...result,
              otherStories: [...result.otherStories, story],
            },
      {
        exactStories: [],
        otherStories: [],
      }
    );
}

const weight: Flow = [1, 1, 1, 1, 1, 1, 5];

export function dist(flow1: number[], flow2: number[]) {
  let sum = 0;
  for (let i = 0; i < flow1.length; i++) {
    if (
      instantEndFlows.some((endFlow) =>
        endFlow.some((value, i) => flow1[i] === value && flow2[i] === value)
      )
    ) {
      return 0;
    } else if (
      instantEndFlows.some((endFlow) =>
        endFlow.some((value, i) => flow1[i] !== value && flow2[i] === value)
      )
    ) {
      return Infinity;
    }
    if (flow1[i] > 0 && flow2[i] > 0) {
      sum += Math.pow(flow1[i] - flow2[i], 2) * (1 / weight[i]);
    }
  }
  return Math.sqrt(sum);
}
