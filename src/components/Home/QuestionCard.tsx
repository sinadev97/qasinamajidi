import { Link } from "react-router-dom";
import { QuestionDto } from "../../api/questions";
import routes from "../../routes/routes";

const QuestionCard = ({
  question,
  isShowDetails,
}: {
  question: QuestionDto;
  isShowDetails?: boolean;
}) => {
  return (
    <div className="rounded-lg bg-gray-lighter shadow">
      <div className="bg-white rounded-lg px-4 py-2">
        <div className="flex items-center gap-x-4">
          <img
            className="w-8 h-8 rounded-md"
            src="http://localhost:3001/assets/images/user3.svg"
            alt="user"
          />
          <div className="font-medium">{question.title}</div>
        </div>
      </div>

      <div className="px-4 py-5 flex flex-col gap-y-4">
        <div className="text-sm">{question.description}</div>

        {!isShowDetails && (
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
