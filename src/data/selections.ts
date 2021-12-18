type Question = {
  question: string;
  photo: string;
  answers: (string | null)[];
};

const questions: Question[] = [
  {
    question: "이야기의 시작은...",
    photo: "photos/no1.jpeg",
    answers: [
      null,
      "옛날에 한 부자가 있었는데...",
      "한 여자가 시집을 갔는데 시집살이가 심해서...",
    ],
  },
  {
    question: "스님이 시주를 받으러 왔다. 부자는...",
    photo: "photos/no2.jpeg",
    answers: [
      null,
      "시주 그릇에 쇠똥을 퍼주었다",
      "시주 그릇에 거름을 퍼주었다",
      "스님에게 신체적 고통을 주었다",
      "시주를 많이 주는 대신 다른 요구를 했다",
      "아무것도 시주하지 않았다",
    ],
  },
  {
    question: "그렇게 스님이 고초를 겪고 나서...",
    photo: "photos/no3.jpeg",
    answers: [
      null,
      "며느리가 나와서 쌀을 대신 주었다",
      "스님이 부잣집을 망하게 했다",
    ],
  },
  {
    question: "스님은 며느리한테...",
    photo: "photos/no4.jpeg",
    answers: [
      null,
      "뒤를 돌아보지 말고 따라오라고 했다",
      "뒤를 돌아보지 말고 피하라고 했다",
    ],
  },
  {
    question: "며느리가 집을 떠나오면서...",
    photo: "photos/no5.jpeg",
    answers: [
      null,
      "그냥 혼자 나왔다",
      "아이도 같이 따라나왔다",
      "강아지도 같이 따라나왔다",
    ],
  },
  {
    question: "결국 며느리는...",
    photo: "photos/no6.jpeg",
    answers: [
      null,
      "바위가 되어 죽었다",
      "목이 떨어지거나 벼락을 맞아 죽었다",
      "살았다",
      "어떻게 됐을지 잘 모르겠다",
    ],
  },
  {
    question: "그 이후로...",
    photo: "photos/no7.jpeg",
    answers: [
      null,
      "딱히 남은 얘기는 없다",
      "마을에 며느리를 기리는 자리가 생겼다",
      "며느리바위에 치성을 드리면 아이를 가질 수 있다고 한다",
      "연못에는 이무기나 구렁이가 산다고 한다",
      "맑은 날에 못을 보면 기와집이 안에 보인다",
    ],
  },
];

export default questions;
