import { useDispatch, useSelector } from "react-redux";
import { newQuestionActions } from "../store/newQuestion";

export const useNewQuestionState = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: any) => store.newQuestion.isOpen);
  const inputsValue = useSelector(
    (store: any) => store.newQuestion.inputsValue
  );

  const openModal = () => dispatch(newQuestionActions.openModal());
  const closeModal = () => dispatch(newQuestionActions.closeModal());
  const setTitle = (payload: string) =>
    dispatch(newQuestionActions.setTitle(payload));
  const setDescription = (payload: string) =>
    dispatch(newQuestionActions.setDescription(payload));

  return {
    isOpen,
    inputsValue,
    openModal,
    closeModal,
    setTitle,
    setDescription,
  };
};
