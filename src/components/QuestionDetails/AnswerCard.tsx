import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import cAxios from "../../api/base.api";
import { AnswerDto } from "../../api/questions";
import { useDisLikeAnswer, useLikeAnswer } from "../../api/questions.api";
import { questionsActions } from "../../store/cacheSlice";
import Loader from "../Loader";

const AnswerCard = ({ answer }: { answer: AnswerDto }) => {
  const dispatch = useDispatch();
  const date = new Date(answer.createDate).toLocaleDateString("fa-IR");
  const time = new Date(answer.createDate).toLocaleTimeString("fa-IR", {
    hour: "numeric",
    minute: "numeric",
  });

  const { mutate: like } = useLikeAnswer();
  const { mutate: disLike } = useDisLikeAnswer();

  const likeAnswer = () => {
    like(
      {
        aId: answer.id,
        data: { ...answer, likedCount: answer.likedCount + 1 },
      },
      {
        onSuccess: () => {
          cAxios
            .get("/answers", { params: { questionId: answer.questionId } })
            .then((res) =>
              dispatch(
                questionsActions.saveData({
                  cacheKey: [
                    "answers",
                    JSON.stringify({ qId: answer.questionId }),
                  ],
                  data: res.data,
                })
              )
            );
        },
      }
    );
  };

  const disLikeAnswer = () => {
    disLike(
      {
        aId: answer.id,
        data: { ...answer, disLikedCount: answer.disLikedCount + 1 },
      },
      {
        onSuccess: () => {
          cAxios
            .get("/answers", { params: { questionId: answer.questionId } })
            .then((res) =>
              dispatch(
                questionsActions.saveData({
                  cacheKey: [
                    "answers",
                    JSON.stringify({ qId: answer.questionId }),
                  ],
                  data: res.data,
                })
              )
            );
        },
      }
    );
  };

  return (
    <div className="rounded-lg bg-gray-lighter shadow">
      <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img
            className="w-8 h-8 rounded-md"
            src="http://localhost:3001/assets/images/user3.svg"
            alt="user"
          />
          <div className="font-medium">{answer.userName}</div>
        </div>

        <div className="flex items-center text-xs">
          <div className="border-l pl-4 border-black/20">
            <span className="text-gray-darker ml-2">ساعت :</span>
            <span>{time}</span>
          </div>
          <div className="mr-4">
            <span className="text-gray-darker ml-2">تاریخ :</span>
            <span>{date}</span>
          </div>
          <div className="mr-8 flex items-center gap-x-6">
            <button className="flex items-center gap-x-2">
              <FaRegThumbsUp className="text-green" size={16} />
              <span className="text-gray-darker">{answer.likedCount || 0}</span>
            </button>
            <button className="flex items-center gap-x-2">
              <FaRegThumbsDown className="text-black/30" size={16} />
              <span className="text-gray-darker">
                {answer.disLikedCount || 0}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 flex flex-col gap-y-4">
        <div className="text-sm">{answer.description}</div>

        <div className="self-end flex items-center gap-x-5">
          <button
            onClick={likeAnswer}
            className="flex items-center gap-x-2.5 px-3 py-2 border rounded-lg text-xs hover:bg-green/20 text-green"
          >
            <span>پاسخ خوب بود</span>
            <FaRegThumbsUp className="text-green" size={16} />
          </button>
          <button
            onClick={disLikeAnswer}
            className="flex items-center gap-x-2.5 px-3 py-2 border rounded-lg text-xs hover:bg-error/20 text-error"
          >
            <span>پاسخ خوب نبود</span>
            <FaRegThumbsDown className="text-error" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
