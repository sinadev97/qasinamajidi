import { useState } from "react";
import { QuestionDto } from "../../api/questions";
import { useCreateAnswer, useFetchAnswers } from "../../api/questions.api";
import QuestionCard from "../Home/QuestionCard";
import AnswerCard from "./AnswerCard";

const QuestionDetails = ({ question }: { question: QuestionDto }) => {
  const { data: answers } = useFetchAnswers({ qId: question.id });
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const { mutate } = useCreateAnswer();

  const createAnswer = () => {
    if (!inputValue) {
      return setInputError("لطفا متن پاسخ خود را وارد کنید");
    } else setInputError("");

    mutate(
      {
        userName: "sinamajidi",
        questionId: question.id,
        description: inputValue,
        createDate: Date.now(),
        likedCount: 0,
        disLikedCount: 0,
      },
      { onSuccsess: () => setInputValue("") }
    );
  };

  return (
    <div className="py-8 px-14">
      <QuestionCard isShowDetails question={question} />

      <div className="text-2xl font-extrabold mt-6">پاسخ ها</div>

      <div className="flex flex-col gap-y-5 mt-4">
        {answers?.map((answer, index) => (
          <AnswerCard key={index} answer={answer} />
        ))}
      </div>

      <div className="text-2xl font-extrabold mt-6">پاسخ خود را ثبت کنید</div>

      <div className="text-gray-darker text-xs font-medium mt-5">
        پاسخ خود را بنویسید
      </div>

      <div className="relative">
        <textarea
          value={inputValue}
          className="w-full mt-2.5 rounded-lg resize-none text-sm py-3 px-4 shadow"
          rows={10}
          placeholder="متن پاسخ ..."
          onChange={(e) => setInputValue(e.target.value)}
        />

        {inputError && (
          <span className="absolute -bottom-6 right-5 text-[10px] text-error">
            {inputError}
          </span>
        )}
      </div>

      <button onClick={createAnswer} className="btn btn-primary px-16 mt-12">
        ارسال پاسخ
      </button>
    </div>
  );
};

export default QuestionDetails;
