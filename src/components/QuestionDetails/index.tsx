import { useState } from "react";
import { useDispatch } from "react-redux";
import cAxios from "../../api/base.api";
import { QuestionDto } from "../../api/questions";
import { useAnswers, useCreateAnswer } from "../../api/questions.api";
import { questionsActions } from "../../store/cacheSlice";
import QuestionCard from "../Home/QuestionCard";
import Loader from "../Loader";
import AnswerCard from "./AnswerCard";

const QuestionDetails = ({ question }: { question: QuestionDto }) => {
  const { data: answers, isLoading: isLoadingAnswers } = useAnswers({
    qId: question.id,
  });
  const { mutate, isLoading: isCreatingAnswer } = useCreateAnswer();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();

  const createAnswer = () => {
    if (inputValue) {
      mutate(
        {
          userName: "سینا مجیدی",
          description: inputValue,
          createDate: Date.now(),
          questionId: question.id,
          disLikedCount: 0,
          likedCount: 0,
        },
        {
          onSuccess: () => {
            setInputValue("");
            setInputError("");
            cAxios
              .get("/answers", { params: { questionId: question.id } })
              .then((res) =>
                dispatch(
                  questionsActions.saveData({
                    cacheKey: ["answers", JSON.stringify({ qId: question.id })],
                    data: res.data,
                  })
                )
              );
            cAxios.get("/answers").then((res) =>
              dispatch(
                questionsActions.saveData({
                  cacheKey: ["allAnswers"],
                  data: res.data,
                })
              )
            );
          },
        }
      );
    } else setInputError("لطفا متن پاسخ را وارد کنید");
  };

  const isLoading = isCreatingAnswer || isLoadingAnswers;

  return (
    <div className="py-8 px-14">
      {isLoading && <Loader />}
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
