import { QuestionDto, useAnswers } from "../../api/questions";
import QuestionCard from "../Home/QuestionCard";
import AnswerCard from "./AnswerCard";

const QuestionDetails = ({ question }: { question: QuestionDto }) => {
  const { data, isLoading } = useAnswers({ qId: question.id });

  return (
    <div className="py-8 px-14 flex flex-col gap-y-6">
      <QuestionCard isShowDetails question={question} />

      <div>
        <div className="text-2xl font-extrabold">پاسخ ها</div>

        <div className="flex flex-col gap-y-4 mt-4">
          {data?.map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
