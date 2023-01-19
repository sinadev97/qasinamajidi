import { AnswerDto } from "../../api/questions";

const AnswerCard = ({ answer }: { answer: AnswerDto }) => {
  return (
    <div className="rounded-lg bg-gray-lighter shadow">
      <div className="bg-white rounded-lg px-4 py-2">
        <div className="flex items-center gap-x-4">
          <img
            className="w-8 h-8 rounded-md"
            src="http://localhost:3001/assets/images/user3.svg"
            alt="user"
          />
          <div className="font-medium">{answer.userName}</div>
        </div>

        <div></div>
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
