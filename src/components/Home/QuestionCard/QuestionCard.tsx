import React from "react";
import { Link } from "react-router-dom";
import { Question } from "../../../api/questions";
import routes from "../../../routes/routes";

const QuestionCard = ({
  question,
  isShowDetails,
}: {
  question: Question;
  isShowDetails?: boolean;
}) => {
  return (
    <div className="rounded-lg bg-gray-lighter shadow">
      <div className="bg-white rounded-lg px-4 py-2">
        <div className="flex items-center gap-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={question.user.avatarSrc}
            alt="user"
          />
          <div className="font-medium">{question.title}</div>
        </div>

        <div></div>
      </div>

      <div className="px-4 py-5 flex flex-col gap-y-4">
        <div className="text-sm">{question.description}</div>

        {isShowDetails ? (
          <div></div>
        ) : (
          <Link
            to={routes.questionDetails(question.id)}
            className="self-end text-xs px-2 py-3 border border-green rounded-lg text-green font-medium hover:text-green-dark hover:border-green-dark transition duration-200"
          >
            مشاهده جزییات
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
