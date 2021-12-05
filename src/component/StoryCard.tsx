import { Link } from "react-router-dom";
import {
  DocumentTextIcon,
  LocationMarkerIcon,
  SpeakerphoneIcon,
  UserIcon,
} from "@heroicons/react/outline";
import selections from "../data/selections";
import React from "react";
import { Story } from "../data/stories";

type Props = {
  story: Story;
  exact?: boolean;
};

const StoryCard: React.FC<Props> = ({ story, exact }) => (
  <div
    className={`shadow-md py-6 px-6 rounded-lg border-2 ${
      exact ? "border-purple-300" : "border-gray-300"
    }`}
  >
    <Link className="font-medium text-lg" to={`/stories/${story.title}`}>
      {story.title}
    </Link>
    <ul>
      <li className="flex items-center">
        <SpeakerphoneIcon className="w-4 h-4 mr-1" /> 들은 곳:{" "}
        {story.writtenPlace}
      </li>
      <li className="flex items-center">
        <UserIcon className="w-4 h-4 mr-1" />
        이야기하신 분: {story.speaker}
      </li>
      {story.storyPlace && (
        <li className="flex items-center">
          <LocationMarkerIcon className="w-4 h-4 mr-1" />
          이야기의 배경: {story.storyPlace}
        </li>
      )}
      <li>
        <h4 className="flex items-center">
          <DocumentTextIcon className="w-4 h-4 mr-1" />
          줄거리:
        </h4>
        <ul className="px-5 py-2">
          {story.flow.map((selection, index) =>
            selection ? (
              <li key={index} className="py-1">
                <p className="font-semibold">{selections[index].question}</p>
                <p className="pl-3">{selections[index].answers[selection]}</p>
              </li>
            ) : null
          )}
        </ul>
      </li>
    </ul>
  </div>
);

export default StoryCard;
