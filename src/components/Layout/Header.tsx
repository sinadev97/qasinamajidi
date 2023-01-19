import { FaCaretDown, FaPlus } from "react-icons/fa";
import { useNewQuestionState } from "../../hooks/useNewQuestionState";
import NewQuestionModal from "../Modals/NewQuestionModals/NewQuestionModal";

export const Header = ({ title }: { title?: string }) => {
  const { isOpen, openModal } = useNewQuestionState();

  return (
    <header className="flex items-center justify-between px-14 py-4 bg-white shadow-light">
      <h1 className="font-extrabold text-2xl">{title}</h1>

      <div className="flex items-center gap-x-10">
        <button onClick={openModal} className="btn btn-primary">
          <FaPlus size={10} />
          <span>سوال جدید</span>
        </button>

        <div className="flex items-center gap-x-4">
          <img
            src="http://localhost:3001/assets/images/user2.svg"
            alt="user"
            className="w-11 h-11 bg-gray-300 rounded-full"
          />

          <div className="text-sm">الناز شاکردوست</div>

          <FaCaretDown size={20} className="text-gray-300" />
        </div>
      </div>

      {isOpen && <NewQuestionModal />}
    </header>
  );
};
