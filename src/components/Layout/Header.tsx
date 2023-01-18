import { FaCaretDown, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { newQuestionModalAction } from "../../store";
import NewQuestionModal from "../Modals/NewQuestionModals/NewQuestionModal";

export const Header = ({ title }: { title?: string }) => {
  const dispatch = useDispatch();

  const newQuestionModal = useSelector(
    (store: any) => store.newQuestionModal.isOpen
  );

  const openModalHandler = () => {
    dispatch(newQuestionModalAction.open());
  };

  console.log(newQuestionModal);

  return (
    <header className="flex items-center justify-between px-14 py-4 bg-white shadow-light">
      <h1 className="font-extrabold text-2xl">{title}</h1>

      <div className="flex items-center gap-x-10">
        <button onClick={openModalHandler} className="btn btn-primary">
          <FaPlus size={10} />
          <span>سوال جدید</span>
        </button>

        <div className="flex items-center gap-x-4">
          <div className="w-11 h-11 bg-gray-300 rounded-full"></div>

          <div className="text-sm">الناز شاکردوست</div>

          <FaCaretDown size={20} className="text-gray-300" />
        </div>
      </div>

      {newQuestionModal && <NewQuestionModal />}
    </header>
  );
};
