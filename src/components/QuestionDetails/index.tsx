import { QuestionDto, useAnswers } from "../../api/questions";
import QuestionCard from "../Home/QuestionCard";
import AnswerCard from "./AnswerCard";

const QuestionDetails = ({ question }: { question: QuestionDto }) => {
  const { data: answers, isLoading } = useAnswers({ qId: question.id });

  return (
    <div className="py-8 px-14">
      <QuestionCard isShowDetails question={question} />

      <div className="text-2xl font-extrabold mt-6">پاسخ ها</div>

      <div className="flex flex-col gap-y-5 mt-4">
        {answers?.map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
      </div>

      <div className="text-2xl font-extrabold mt-6">پاسخ خود را ثبت کنید</div>

      <div className="text-gray-darker text-xs font-medium mt-5">
        پاسخ خود را بنویسید
      </div>

      <div className="relative">
        <textarea
          className="w-full mt-2.5 rounded-lg resize-none text-sm py-3 px-4 shadow"
          rows={10}
          placeholder="متن پاسخ ..."
        />

        <span className="absolute -bottom-6 right-5 text-[10px] text-error">
          محل قرارگیری متن خطا
        </span>
      </div>

      <button className="btn btn-primary px-16 mt-12">ارسال پاسخ</button>
    </div>
  );
};

export default QuestionDetails;
