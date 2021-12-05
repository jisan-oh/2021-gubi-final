export type Flow = [number, number, number, number, number, number, number];
type EndValue = number | boolean;
type EndFlow = [
  EndValue,
  EndValue,
  EndValue,
  EndValue,
  EndValue,
  EndValue,
  EndValue
];

export type Story = {
  title: string;
  writtenPlace: string;
  speaker: string;
  storyPlace: string | null;
  flow: Flow;
};

export const instantEndFlows: EndFlow[] = [
  [2, false, false, false, false, false, false],
  [true, 4, false, false, false, false, false],
  [true, true, 2, false, false, false, false],
];

const stories: Story[] = [
  {
    title: "고랑포 장자못",
    writtenPlace: "연천군 장남면 원당2리 장남면 게이트볼장",
    speaker: "조성제",
    storyPlace: "경기 파주시 적성면 장좌리 479",
    flow: [1, 1, 1, 1, 1, 1, 4],
  },
  {
    title: "남양소 장자못 전설",
    writtenPlace: "강원 삼척군 삼척읍",
    speaker: "김일기",
    storyPlace: "강원 삼척시 성남동 198",
    flow: [1, 1, 1, 1, 1, 4, 1],
  },
  {
    title: "대산면 대장리의 장자못",
    writtenPlace: "전북 고창군 대산면 갈마리 46번지",
    speaker: "김상만",
    storyPlace: "전북 고창군 대산면 해룡리 821",
    flow: [1, 2, 1, 2, 1, 4, 1],
  },
  {
    title: "백운사 전설(장자못형)",
    writtenPlace: "전북 완주군 고산면",
    speaker: "이영구",
    storyPlace: null,
    flow: [1, 3, 2, 0, 0, 0, 0],
  },
  {
    title: "번개늪과 며느리바위[장자못]",
    writtenPlace: "경남 창녕군 영산면 구계리 구계마을회관",
    speaker: "차영시",
    storyPlace: "경남 창녕군 계성면 봉산리 1580",
    flow: [1, 1, 1, 1, 3, 1, 1],
  },
  {
    title: "안동부락 장자못 전설",
    writtenPlace: "전남 장성군 북하면 쌍웅리",
    speaker: "최준성",
    storyPlace: "전남 장성군 장성읍 봉덕리 234",
    flow: [1, 3, 1, 2, 2, 1, 1],
  },
  {
    title: "웅촌(熊村) 장자못",
    writtenPlace: "경남 울산시 신정1동",
    speaker: "이유수",
    storyPlace: "울산 울주군 웅촌면 통천리 841-2",
    flow: [1, 1, 2, 0, 0, 0, 0],
  },
  {
    title: "의령 북실 장자못",
    writtenPlace: "경남 의령군 지정면",
    speaker: "박연악",
    storyPlace: "경남 의령군 정곡면 적곡리 800",
    flow: [1, 2, 1, 1, 1, 1, 3],
  },
  {
    title: "의림지 장자못 전설",
    writtenPlace: "강원 영월군 영월읍",
    speaker: "김진홍",
    storyPlace: "충북 제천시 모산동 241",
    flow: [1, 2, 1, 1, 2, 3, 1],
  },
  {
    title: "장자못1",
    writtenPlace: "경기 구리시 교문동 635-3 백교경로당",
    speaker: "방호덕",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 2],
  },
  {
    title: "장자못2",
    writtenPlace: "경기 구리시 교문동 백교2 경로당",
    speaker: "김난순",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 2],
  },
  {
    title: "장자못3",
    writtenPlace: "경기 구리시 교문동 백교2 경로당",
    speaker: "강순덕",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 2],
  },
  {
    title: "장자못4",
    writtenPlace: "경기 구리시 교문동 635-3 백교경로당",
    speaker: "김석환",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 1],
  },
  {
    title: "장자못6",
    writtenPlace: "경기 구리시 아천동 316 우미천경로당",
    speaker: "이복순",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 1, 2],
  },
  {
    title: "장자못8",
    writtenPlace: "경기 구리시 갈매도당굿 전수회관",
    speaker: "박명섭",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 1, 2],
  },
  {
    title: "장자못10",
    writtenPlace: "경북 영덕군 달산면 대지1동",
    speaker: "조유란",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 1, 1, 1, 1, 1, 5],
  },
  {
    title: "장자못11",
    writtenPlace: "경남 진주시 망경북동",
    speaker: "김두상",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 3, 2, 0, 0, 0, 5],
  },
  {
    title: "장자못13",
    writtenPlace: "경남 밀양군 무안면",
    speaker: "김도연",
    storyPlace: "경남 밀양시 초동면 반월리 1045",
    flow: [2, 0, 0, 1, 2, 1, 1],
  },
  {
    title: "장자못14",
    writtenPlace: "경남 밀양군 산내면",
    speaker: "손기도",
    storyPlace: null,
    flow: [1, 4, 2, 0, 0, 0, 0],
  },
  {
    title: "장자못 다른 이야기",
    writtenPlace: "경북 월성군 안강읍 근계2리",
    speaker: "최춘원",
    storyPlace: null,
    flow: [1, 1, 1, 2, 1, 1, 1],
  },
  {
    title: "장자못 전설1",
    writtenPlace: "경기 구리시 수택동 626-4 수늪경로당",
    speaker: "임태은",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 2],
  },
  {
    title: "장자못 전설2",
    writtenPlace: "경기 구리시 수택동 626-4 수늪경로당",
    speaker: "정성용",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 1, 4],
  },
  {
    title: "장자못 전설4",
    writtenPlace: "경기 구리시 인창동 704 궁말경로당",
    speaker: "김대성",
    storyPlace: "경기 구리시 우미내길 50-140",
    flow: [1, 2, 1, 1, 1, 1, 1],
  },
  {
    title: "장자못 전설5",
    writtenPlace: "경기 김포시 하성면 마곡2리 184번지 이영희 자택",
    speaker: "이영희",
    storyPlace: null,
    flow: [1, 5, 1, 2, 1, 4, 1],
  },
  {
    title: "장자못 전설7",
    writtenPlace: "경기 하남시 대성로 151번길 90 법동경로당",
    speaker: "임종수",
    storyPlace: null,
    flow: [1, 1, 1, 1, 1, 3, 1],
  },
  {
    title: "장자못 전설10",
    writtenPlace: "경북 영양군 영양읍 서부1리",
    speaker: "양용숙",
    storyPlace: null,
    flow: [1, 1, 1, 2, 2, 1, 1],
  },
  {
    title: "장자못 전설13",
    writtenPlace: "전남 장성군 장성읍 수산리",
    speaker: "김일남",
    storyPlace: null,
    flow: [1, 1, 1, 2, 1, 3, 1],
  },
  {
    title: "장자못 전설14",
    writtenPlace: "강원 영월군 영월읍",
    speaker: "김진홍",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 2, 1, 1, 1, 1, 1],
  },
  {
    title: "장자못과 돌이 된 며느리",
    writtenPlace: "경북 상주군 은척면 우기1리",
    speaker: "황수용",
    storyPlace: null,
    flow: [1, 1, 1, 1, 1, 1, 1],
  },
  {
    title: "장자못과 욕심 많은 부자의 최후",
    writtenPlace: "경북 영주시 풍기읍 수철리 노인회관",
    speaker: "신란순",
    storyPlace: null,
    flow: [1, 1, 1, 1, 1, 1, 5],
  },
  {
    title: "장자못과 이무기",
    writtenPlace: "구리시 토평동 567-7 벌말 경로당",
    speaker: "이성실",
    storyPlace: "경기 구리시 교문동 593-1",
    flow: [1, 1, 1, 1, 1, 2, 4],
  },
  {
    title: "장자못전설3",
    writtenPlace: "경북 영양군 영양읍 서부1리 마을회관",
    speaker: "이금학",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 1, 1, 2, 1, 1, 1],
  },
  {
    title: "장좌리 장자못의 유래",
    writtenPlace: "경기 파주시 적성면 마지1리 봉수길 자택",
    speaker: "봉수길",
    storyPlace: "경기 파주시 적성면 장좌리 479",
    flow: [1, 1, 1, 1, 1, 2, 1],
  },
  {
    title: "중을 괄세한 황부자, 장자못 전설",
    writtenPlace: "경북 월성군 외동면",
    speaker: "김수만",
    storyPlace: null,
    flow: [1, 5, 1, 2, 1, 1, 1],
  },
  {
    title: "중을 괄시한 만석꾼, 장자못",
    writtenPlace: "경북 월성군 외동면 입실2리",
    speaker: "박동준",
    storyPlace: null,
    flow: [1, 2, 1, 1, 1, 1, 1],
  },
  {
    title: "황지(潢池) 장자못의 유래",
    writtenPlace: "경남 의령군 봉수면",
    speaker: "최용득",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 3, 1, 1, 2, 1, 1],
  },
  {
    title: "황지(潢池)의 장자못",
    writtenPlace: "경남 울주군 상북면",
    speaker: "김삼남",
    storyPlace: "강원 태백시 황지연못길 12",
    flow: [1, 2, 1, 1, 3, 1, 1],
  },
];

export default stories;
