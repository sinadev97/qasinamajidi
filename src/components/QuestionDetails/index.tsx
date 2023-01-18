import { useQuestion } from "../../api/questions";
import QuestionCard from "../Home/QuestionCard/QuestionCard";

const QuestionDetails = () => {
  const { data: question, isLoading } = useQuestion({ qId: "1" });

  console.log(question);

  return (
    <div className="py-8 px-14 flex flex-col gap-y-5">
      {question && <QuestionCard isShowDetails question={question} />}
    </div>
  );
};

export default QuestionDetails;
