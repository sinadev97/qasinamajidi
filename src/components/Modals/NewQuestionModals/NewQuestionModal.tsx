import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useCreateQuestion } from "../../../api/questions.api";
import { useNewQuestionState } from "../../../hooks/useNewQuestionState";
import Portal from "../../Portal";

const NewQuestionModal = () => {
  const { closeModal } = useNewQuestionState();
  const [inputErrors, setInputErrors] = useState({
    title: "",
    description: "",
  });
  const { mutate, isLoading } = useCreateQuestion();
  const [inputValues, setInputValue] = useState({
    title: "",
    description: "",
  });

  const createQuestion = () => {
    if (inputValues.description && inputValues.title) {
      return mutate(inputValues);
    }

    if (!inputValues.description)
      setInputErrors((prev) => ({
        ...prev,
        description: "لطفا متن سوال را وارد کنید",
      }));

    if (!inputValues.title)
      setInputErrors((prev) => ({
        ...prev,
        title: "لطفا موضوع سوال را وارد کنید",
      }));
  };

  return (
    <Portal>
      <div className="h-full w-full inset-0 fixed bg-black/40 flex items-center justify-center z-10">
        <div className="flex flex-col bg-gray-lighter w-full max-w-[700px] rounded-lg">
          <div className="flex items-center justify-between px-6 py-3 rounded-lg shadow-sm">
            <div className="font-extrabold">ایجاد سوال جدید</div>

            <button
              onClick={closeModal}
              className="text-gray-darker cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="px-6 pb-6 flex flex-col ">
            <div className="text-sm text-gray-darker mt-4">موضوع</div>

            <input
              value={inputValues.title}
              type="text"
              className="bg-white px-6 py-3 rounded-lg mt-2.5 outline-none text-sm shadow-sm"
              onChange={(e) =>
                setInputValue((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />

            {inputErrors.title && (
              <span className="text-[10px] text-error">
                {inputErrors.title}
              </span>
            )}

            <div className="text-sm text-gray-darker mt-4 ">متن سوال</div>

            <textarea
              value={inputValues.description}
              className="bg-white px-6 py-3 rounded-lg mt-2.5 outline-none resize-none text-sm shadow-sm"
              rows={8}
              onChange={(e) =>
                setInputValue((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />

            {inputErrors.description && (
              <span className="text-[10px] text-error">
                {inputErrors.description}
              </span>
            )}

            <div className="self-end flex items-center gap-x-12 mt-6">
              <button onClick={closeModal} className="text-green text-xs">
                انصراف
              </button>
              <button onClick={createQuestion} className="btn btn-primary">
                ایجاد سوال
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default NewQuestionModal;
