import { FaRegCommentDots } from "react-icons/fa";
import { AnswerDto } from "../../api/questions";

const AnswerCard = ({ answer }: { answer: AnswerDto }) => {
  const date = new Date(answer.createDate).toLocaleDateString("fa-IR");
  const time = new Date(answer.createDate).toLocaleTimeString("fa-IR", {
    hour: "numeric",
    minute: "numeric",
  });
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
          <div className="mr-8 flex items-center gap-x-2">
            <FaRegCommentDots className="text-gray-darker" size={16} />
            <span className="text-gray-darker">20</span>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4 py-5 flex flex-col gap-y-4">
          <div className="text-sm">{answer.description}</div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
